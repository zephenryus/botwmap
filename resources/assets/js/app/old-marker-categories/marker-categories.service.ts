import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

import { MarkerCategory } from "./marker-category";

@Injectable({
    providedIn: 'root'
})
export class MarkerCategoriesService {
    markerCategories: MarkerCategory[];
    allMarkerCategories: MarkerCategory[];
    selectedMarkerCategories: number[];
    onSelectedMarkerCategoriesChanged = new Subject<number[]>();

    constructor(private http: HttpClient) {
    }

    getMarkerCategories() {
        return this.http.get<MarkerCategory[]>('/marker-categories')
            .pipe(map(
                (markerCategories: MarkerCategory[]) => {
                    this.markerCategories = markerCategories;
                    return markerCategories;
                }
            ));
    }

    toggleSelected(markerCategory: MarkerCategory) {
        let category = this.getById(markerCategory.id);
        category.selected = !category.selected;
        return category.selected;
    }

    getById(id: number) {
        return this.recurseForID(this.markerCategories, id);
    }

    private recurseForID(markerCategories: MarkerCategory[], id: number) {
        for (let markerCategory of markerCategories) {
            if (markerCategory.id === id) {
                return markerCategory;
            }

            let idInChild = this.recurseForID(markerCategory.children, id);

            if (idInChild) {
                return idInChild;
            }
        }

        return false;
    }
}