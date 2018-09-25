import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Marker } from "./marker.model";
import { MarkerType } from "./MarkerType.model";
import { map } from "rxjs/operators";
import { BinarySearchTree } from "./BinarySearchTree";
import { MarkerCategory } from "./MarkerCategory.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    markerTypes: MarkerType[];
    markerTypesIndex: BinarySearchTree = new BinarySearchTree();

    markerCategories: MarkerCategory[];
    markerCategoriesIndex: BinarySearchTree = new BinarySearchTree();

    selectedMarkerTypes: number[] = [];
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

        this.http.get<MarkerCategory[]>('/marker-categories')
            .pipe(map(
                (markerCategories) => {
                    this.markerCategories = markerCategories;
                    this.generateSearchTree(this.markerCategoriesIndex, this.markerCategories);
                }
            ))
            .subscribe();
    }

    private onMarkerSelected(marker: Marker) {
        this.selectedMarker = marker;
    }

    private onSelectedMarkerTypesChanged(selectedMarkerTypes: number[]) {
        this.selectedMarkerTypes = Object.assign([], selectedMarkerTypes);
    }

    private generateSearchTree(binaryTree: BinarySearchTree, terms: any[]) {
        let midpoint = Math.ceil(terms.length / 2);

        for (let index = 0; index < midpoint; index++) {
            binaryTree.insert(terms[midpoint - index].id, midpoint - index);

            if (midpoint - index !== midpoint + index) {
                binaryTree.insert(terms[midpoint + index].id, midpoint + index);
            }
        }
    }
}
