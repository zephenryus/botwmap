import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';
import { HttpModule } from "@angular/http";
import { MarkerDetailsComponent } from "./marker-details/marker-details.component";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MarkerDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        MapService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
