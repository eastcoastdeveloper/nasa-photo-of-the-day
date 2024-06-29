import { Component } from "@angular/core";
import { NasaSearchService } from "./services/nasa.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  history!: any[];

  constructor(private _nasaSearchService: NasaSearchService) {}

  externalClick() {
    this._nasaSearchService.changeDatePickerVal(false);
  }

  searchResults(e: any) {
    // See History for Caching
    console.log(e);
    this.history = e;
  }
}
