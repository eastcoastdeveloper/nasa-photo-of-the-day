import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./components/date-picker/date-picker.component";
import { WindowRef } from "./windowRef";
import { NasaHeaderComponent } from "./components/header/header.component";
import { NasaSearchComponent } from "./components/seachbar/search.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NasaPhotoBodyComponent } from "./components/photo-body/photo-body.component";

@NgModule({
  declarations: [AppComponent, CalendarComponent, NasaHeaderComponent, NasaSearchComponent, NasaPhotoBodyComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, YouTubePlayerModule],
  providers: [WindowRef, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
