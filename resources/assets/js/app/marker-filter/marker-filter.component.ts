import { Component, OnInit } from '@angular/core';
import { MarkerTypesService } from "../marker-types/marker-types.service";
import { MarkerType } from "../marker-types/marker-type";
import { MapService } from "../map/map.service";

@Component({
    selector: 'app-marker-filter',
    templateUrl: './marker-filter.component.html'
})
export class MarkerFilterComponent implements OnInit {
    isOpen = true;
    markerLayers = [];
    selectedLayers = [];

    constructor(
        private markerTypesService: MarkerTypesService,
        private mapService: MapService
    ) {}

    toggleDialog() {
        this.isOpen = !this.isOpen;
    }

    toggleLayer(index: number) {
        this.markerLayers[index].selected = !this.markerLayers[index].selected;
        this.filterMarkers();
    }

    filterMarkers() {
        let layers = [];

        for (let markerLayer of this.markerLayers) {
            if (markerLayer.selected) {
                layers.push(markerLayer.id);
            }
        }

        this.markerTypesService.setSelectedMarkerTypes(
            this.markerTypesService.getMarkerTypesById(layers)
        );
    }

    markSelected() {
        for (let markerLayer of this.markerLayers) {
            if (this.selectedLayers.indexOf(markerLayer) > -1) {
                if (this.markerLayers.hasOwnProperty(markerLayer)) {
                    this.markerLayers[markerLayer].selected = true;
                }
            }
        }
    }

    toggleAllLayers() {
        if (this.selectedLayers.length === this.markerLayers.length) {
            this.selectNoLayers();
        } else {
            this.selectAllLayers();
        }
    }

    selectAllLayers() {
        this.selectedLayers = [];

        for (let markerLayer of this.markerLayers) {
            this.selectedLayers.push(markerLayer.id);
            markerLayer.selected = true;
        }

        this.filterMarkers();
    }

    selectNoLayers() {
        this.selectedLayers = [];

        for (let markerLayer of this.markerLayers) {
            markerLayer.selected = false;
        }

        this.filterMarkers();
    }

    ngOnInit() {
        this.markerTypesService.getMarkerTypes()
            .subscribe(
                (markerTypes: MarkerType[]) => {
                    this.markerLayers = markerTypes;
                    this.markSelected();
                }
            )
    }
}