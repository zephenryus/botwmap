import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Marker } from "./marker.model";
import { MarkerType } from "./MarkerType.model";
import { map } from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    markerTypes: MarkerType[];

    selectedMarkerTypes: number[] = [1, 2];
    selectedMarker: Marker;

    constructor(private http:HttpClient) {}

    ngOnInit() {
        this.http.get<MarkerType[]>('/marker-types')
            .pipe(map(
                (markerTypes) => {
                    this.markerTypes = markerTypes;
                }
            ))
            .subscribe();
    }

    private onMarkerSelected(event) {
        console.log(event);
    }

    private onSelectedMarkerTypesChanged(selectedMarkerTypes: number[]) {
        this.selectedMarkerTypes = selectedMarkerTypes;
    }
}
