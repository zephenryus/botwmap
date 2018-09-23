import { Component } from '@angular/core';
import { Marker } from "./marker/marker.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedMarkerTypes: number[] = [100, 498, 932, 2013];
    selectedMarker: Marker;

    private onMarkerSelected(event) {
        console.log(event);
    }
}
