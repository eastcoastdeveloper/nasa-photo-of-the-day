import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { NasaInterface } from "../interfaces/nasa.interface";
import { Router } from "@angular/router";
import { DateInterface } from "../interfaces/date.interface";

@Injectable({
  providedIn: "root",
})
export class NasaSearchService implements OnDestroy {
  // Observables & Variables
  chosenDate?: DateInterface;
  result?: any;
  datePickerStatus: boolean = false;
  private unsubscribe$ = new Subject<void>();
  private dateSource$ = new BehaviorSubject<DateInterface>(this.chosenDate!);
  private mediaSource$ = new BehaviorSubject<NasaInterface[]>(this.result);
  private datePickerSource$ = new BehaviorSubject<boolean>(this.datePickerStatus);

  chosenDateValue$ = this.dateSource$.asObservable();
  chosenMedia$ = this.mediaSource$.asObservable();
  dataPickerCurrentVal = this.datePickerSource$.asObservable();

  constructor(private _http: HttpClient, private _router: Router) {}

  changeDatePickerVal(newVal: boolean) {
    this.datePickerSource$.next(newVal);
    return newVal;
  }

  private apiUrl = "http://localhost:3000/api/data"; // URL to your backend

  fetchData(time: number) {
    // Extrapolate Date from Timestamp (1691478000000)
    // Received from Date Picker Component
    const d = new Date(time);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const date = `${year}-${month}-${day}`;
    this.dateSource$.next({ year: year, month: month, day: day });

    // Fetch via Environment URL & API Key
    this._http
      .get<NasaInterface[]>(this.apiUrl, {
        params: {
          date: date,
        },
      })
      .pipe(
        takeUntil(this.unsubscribe$),
        map((data) => {
          console.log({ year: year, month: month, day: day });
          this.result = data;
        })
      )
      .subscribe(() => {
        this.mediaSource$.next(this.result);
      });
  }

  // Life Cycle to Kill Subscriptions
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
