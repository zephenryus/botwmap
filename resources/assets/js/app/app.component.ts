import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Marker } from "./marker.model";
import { MarkerType } from "./MarkerType.model";
import { map } from "rxjs/operators";
import { BinarySearchTree } from "./BinarySearchTree";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    markerTypes: MarkerType[];
    markerTypesIndex: BinarySearchTree;

    selectedMarkerTypes: number[] = [1, 2];
    selectedMarker: Marker;

    constructor(private http:HttpClient) {}

    ngOnInit() {
        this.http.get<MarkerType[]>('/marker-types')
            .pipe(map(
                (markerTypes) => {
                    this.markerTypes = markerTypes;
                    this.generateSearchTree(this.markerTypesIndex, this.markerTypes);
                }
            ))
            .subscribe();
    }

    private onMarkerSelected(marker: Marker) {
        this.selectedMarker = marker;
    }

    private onSelectedMarkerTypesChanged(selectedMarkerTypes: number[]) {
        this.selectedMarkerTypes = selectedMarkerTypes;
    }

    private generateSearchTree(binaryTree: BinarySearchTree, terms: any[]) {
        terms = terms.sort();
    }
}
