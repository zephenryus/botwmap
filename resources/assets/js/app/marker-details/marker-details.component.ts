import { Component, OnInit } from '@angular/core';
import { MarkersService } from "../markers/markers.service";
import { Marker } from "../markers/marker";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-marker-details',
    templateUrl: './marker-details.component.html'
})
export class MarkerDetailsComponent implements OnInit {
    selectedMarker: Marker;
    markerSelectSubscription: Subscription;
    isOpen = false;

    constructor (private  markersService: MarkersService) {}

    ngOnInit(): void {
        this.markerSelectSubscription = this.markersService.onMarkerSelected.subscribe(
            (marker: Marker) => {
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