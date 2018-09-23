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
import { MarkerCategoryComponent } from "./marker-filter/marker-category/marker-category.component";
import { MarkerCategoriesService } from "./marker-categories/marker-categories.service";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MarkerDetailsComponent,
        MarkerFilterComponent,
        MarkerCategoryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        MapService,
        MarkersService,
        MarkerTypesService,
        MarkerCategoriesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
