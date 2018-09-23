import { Component, Input, OnInit } from '@angular/core';
import { MarkerCategory } from "../../marker-categories/marker-category";
import { MarkerCategoriesService } from "../../marker-categories/marker-categories.service";
import { MarkerTypesService } from "../../marker-types/marker-types.service";

@Component({
    selector: 'app-marker-category',
    templateUrl: './marker-category.component.html'
})
export class MarkerCategoryComponent {
    @Input() markerCategories: MarkerCategory[] = [];
    types: number[];

    constructor (private markerCategoriesService: MarkerCategoriesService,
                 private markerTypesService: MarkerTypesService) {}

    toggleLayer(markerCategory: MarkerCategory) {
        if (this.markerCategoriesService.toggleSelected(markerCategory)) {
            for (let markerType of markerCategory.types) {
                this.markerTypesService.selectMarkerType(markerType);
            }
        } else {
            for (let markerType of markerCategory.types) {
                this.markerTypesService.unselectMarkerType(markerType);
            }
        }

        // if (this.markerCategories[index].selected) {
        //     console.log(this.markerCategories[index]);
        //     for (let type of this.markerCategories[index].types) {
        //         console.log(this.markerCategories[index], type);
        //         this.markerTypesService.selectMarkerType(type);
        //     }
        // } else {
        //     for (let type of this.markerCategories[index].types) {
        //         console.log(this.markerCategories[index], type);
        //         this.markerTypesService.unselectMarkerType(type);
        //     }
        // }
    }
}