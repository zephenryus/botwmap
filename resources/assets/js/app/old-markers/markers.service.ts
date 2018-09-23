import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Marker } from "./marker";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getMarkers(options?: { types: number[] }) {
        const types = options.types.join(',');

        return this.http.get<Marker[]>('/markers?types=' + types)
            .pipe(map(
                (markers) => {
                    return markers;
                }
            ));
    }

    getMarker(id: number) {
        return this.http.get<Marker>('/markers/' + id)
            .pipe(map(
                (marker) => {
                    return marker;
                }
            ));
    }
}
