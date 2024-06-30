import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./components/date-picker/date-picker.component";
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { WindowRef } from "./windowRef";
import { NasaHeaderComponent } from "./components/header/header.component";
import { NasaSearchComponent } from "./components/seachbar/search.component";
// import { AppRoutingModule, appRoutingComponents } from "./app-routing.module";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    // appRoutingComponents,
    NasaHeaderComponent,
    NasaSearchComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    // AppRoutingModule], providers: [WindowRef, provideHttpClient(withInterceptorsFromDi())
  ],
})
export class AppModule {}
