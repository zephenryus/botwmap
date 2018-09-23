import { Component, OnInit } from '@angular/core';
import { MarkersService } from "../old-markers/markers.service";
import { Marker } from "../old-markers/marker";
import { Subscription } from "rxjs";
import { MapService } from "../old-map/map.service";

@Component({
    selector: 'app-marker-details',
    templateUrl: './marker-details.component.html'
})
export class MarkerDetailsComponent implements OnInit {
    selectedMarker: Marker;
    markerSelectSubscription: Subscription;
    isOpen = false;

    constructor (private mapService: MapService, private  markersService: MarkersService) {}

    ngOnInit(): void {
        this.markerSelectSubscription = this.mapService.onMarkerSelected.subscribe(
            (marker) => {
                this.selectedMarker = marker;
            }
        )
    }

    openDetails() {
        this.isOpen = true;
    }

    closeDetails() {
        this.isOpen = false;
        this.selectedMarker = null;
    }
}