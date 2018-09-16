import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

import { MarkerType } from "./marker-type";


@Injectable({
    providedIn: 'root'
})
export class MarkerTypesService {
    markerTypes: MarkerType[] = [];
    selectedMarkerTypes: number[] = [];

    onSelectedMarkerTypesChanged = new Subject<number[]>();

    constructor(private http: HttpClient) {
    }

    getMarkerTypes() {
        return this.http.get<MarkerType[]>('/marker-types')
            .pipe(map(
                (markerTypes) => {
                    for (let markerType in markerTypes) {
                        if (markerTypes.hasOwnProperty(markerType)) {
                            markerTypes[markerType] = new MarkerType(markerTypes[markerType]);
                            this.markerTypes.push(markerTypes[markerType]);
                        }
                    }
                    return markerTypes;
                }
            ));
    }

    selectMarkerType(id: number) {
        const index = this.selectedMarkerTypes.indexOf(id);
        if (index === -1) {
            this.selectedMarkerTypes.push(id);
            this.onSelectedMarkerTypesChanged.next(this.selectedMarkerTypes);
        }
    }

    unselectMarkerType(id: number) {
        const index = this.selectedMarkerTypes.indexOf(id);
        if (index > -1) {
            this.selectedMarkerTypes.splice(index, 1);
            this.onSelectedMarkerTypesChanged.next(this.selectedMarkerTypes);
        }
    }

    selectAllMarkerTypes() {

    }

    unselectAllMarkerTypes() {

    }

    setSelectedMarkerTypes(types: number[]) {
        this.selectedMarkerTypes = types;
        this.onSelectedMarkerTypesChanged.next(types);
    }

    getMarkerTypesById(ids: number[]) {
        let markerTypes: MarkerType[] = [];

        for (let markerType of this.markerTypes) {
            if (ids.indexOf(markerType.id) > -1) {
                markerTypes.push(markerType);
            }
        }

        return markerTypes;
    }

    getById(id: number) {
        for (let markerType of this.markerTypes) {
            if (markerType.id == id) {
                return markerType;
            }
        }

        return undefined;
    }

    getIcon(id) {
        const markerType = this.getById(id);
        return markerType.icon;
    }

    getName(id) {
        const markerType = this.getById(id);
        return markerType.marker_type_name;
    }
}