import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MapComponent } from "./map/map.component";
import { MarkerFiltersComponent } from "./marker-filters/marker-filters.component";
import { MarkerDetailsComponent } from "./marker-details/marker-details.component";

import { MarkersService } from "./markers.service";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MarkerFiltersComponent,
        MarkerDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        MarkersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
