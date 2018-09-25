import { Component, Input } from "@angular/core";
import { Marker } from "../Marker.model";

@Component({
    selector: 'app-marker-details',
    templateUrl: './marker-details.component.html'
})
export class MarkerDetailsComponent {
    @Input() selectedMarker: Marker = null;

    closeDialog() {
        this.selectedMarker = null;
    }
}