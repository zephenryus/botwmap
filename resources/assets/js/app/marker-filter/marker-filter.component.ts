import { Component, OnInit } from '@angular/core';
import { MarkerTypesService } from "../marker-types/marker-types.service";
import { MarkerType } from "../marker-types/marker-type";
import { MapService } from "../map/map.service";

@Component({
    selector: 'app-marker-filter',
    templateUrl: './marker-filter.component.html'
})
export class MarkerFilterComponent implements OnInit {
    isOpen = false;
    markerLayers = [];
    selectedLayers = [];
    iconHref = "images/icons/markers/markers.svg";

    constructor(
        private markerTypesService: MarkerTypesService,
        private mapService: MapService
    ) {}

    toggleDialog() {
        this.isOpen = !this.isOpen;
        (this.isOpen)
            ? this.iconHref = "images/icons/markers/close.svg"
            : this.iconHref = "images/icons/markers/markers.svg";
    }

    toggleLayer(index: number) {
        // console.log(this.markerLayers[index]);
        this.markerLayers[index].selected = !this.markerLayers[index].selected;

        if (this.markerLayers[index].selected) {
            this.markerTypesService.selectMarkerType(this.markerLayers[index].id);
        } else {
            this.markerTypesService.unselectMarkerType(this.markerLayers[index].id);
        }
    }

    markSelected() {
        for (let markerLayer in this.markerLayers) {
            this.markerLayers[markerLayer].selected = false;
        }
    }

    ngOnInit() {
        this.markerTypesService.getMarkerTypes()
            .subscribe(
                (markerTypes: MarkerType[]) => {
                    this.markerLayers = markerTypes;
                    this.selectedLayers = this.mapService.selectedMarkerTypes;
                    this.markSelected();
                }
            );
    }
}