import { Component, OnInit } from '@angular/core';
import { MarkerTypesService } from "../old-marker-types/marker-types.service";
import { MapService } from "../old-map/map.service";
import { MarkerCategoriesService } from "../old-marker-categories/marker-categories.service";
import { MarkerCategory } from "../old-marker-categories/marker-category";

@Component({
    selector: 'app-marker-filter',
    templateUrl: './marker-filter.component.html'
})
export class MarkerFilterComponent implements OnInit {
    isOpen = true;
    markerCategories: MarkerCategory[] = [];
    selectedLayers = [];
    iconHref = "images/icons/markers/markers.svg";

    constructor(
        private markerCategoriesService: MarkerCategoriesService,
        private mapService: MapService,
        private markerTypesService: MarkerTypesService
    ) {
        this.markerCategoriesService.getMarkerCategories()
            .subscribe(
                (markerCategories: MarkerCategory[]) => {
                    this.markerCategories = markerCategories;
                    this.selectedLayers = this.mapService.selectedMarkerTypes;
                    this.markSelected();
                }
            );
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
        (this.isOpen)
            ? this.iconHref = "images/icons/markers/close.svg"
            : this.iconHref = "images/icons/markers/markers.svg";
    }

    markSelected() {
        for (let markerLayer in this.markerCategories) {
            this.markerCategories[markerLayer].selected = false;
        }
    }

    ngOnInit() {

    }
}