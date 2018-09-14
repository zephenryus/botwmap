import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Marker } from "./marker";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
    selectedMarker: Marker;
    onMarkerSelected = new Subject<Marker>();

    constructor(private http: HttpClient) {

    }

    getMarkers (filter?: any[]) {
        let params = (filter)
            ? { filter: filter }
            : {};

        return this.http.get<Marker[]>('/markers', {
            params
        })
            .pipe(map(
                (markers) => {
                    for (let marker in markers) {
                        if (markers.hasOwnProperty(marker)) {
                            markers[marker] = new Marker(markers[marker]);
                            markers[marker].id = parseInt(marker);
                        }
                    }

                    return markers;
                }
            ))
    }

    setSelectedMarker(marker: Marker) {
        if (this.selectedMarker != marker) {
            this.selectedMarker = marker;
            this.onMarkerSelected.next(marker);
        }
    }
}
