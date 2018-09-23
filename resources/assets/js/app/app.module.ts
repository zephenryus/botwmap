import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MapComponent } from "./map/map.component";
import { MarkerFiltersComponent } from "./marker-filters/marker-filters.component";
import { MarkerDetailsComponent } from "./marker-details/marker-details.component";

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
