import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';
import { MarkerDetailsComponent } from "./marker-details/marker-details.component";
import { MarkerFilterComponent } from "./marker-filter/marker-filter.component";
import { HttpClientModule } from "@angular/common/http";
import { MarkersService } from "./markers/markers.service";
import { MarkerTypesService } from "./marker-types/marker-types.service";
import { MarkerTypeComponent } from "./marker-filter/marker-type/marker-type.component";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MarkerDetailsComponent,
        MarkerFilterComponent,
        MarkerTypeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        MapService,
        MarkersService,
        MarkerTypesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
