import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

import { MarkerType } from "./marker-type";


@Injectable({
    providedIn: 'root'
})
export class MarkerTypesService {
    markerTypes: MarkerType[] = [];
    selectedMarkerTypes: MarkerType[] = [];

    onSelectedMarkerTypesChanged = new Subject<MarkerType[]>();

    constructor(private http: HttpClient) {}

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

    setSelectedMarkerTypes(types: MarkerType[]) {
        this.selectedMarkerTypes = types;
        this.onSelectedMarkerTypesChanged.next(this.selectedMarkerTypes);
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
}