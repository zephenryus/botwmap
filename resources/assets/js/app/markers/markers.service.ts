import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Marker } from "./marker";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
    selectedMarker: Marker;
    onMarkerSelected = new Subject<Marker>();

    constructor(private http: Http) {

    }

    getMarkers () {
        return this.http.get('/markers')
            .pipe(map(
                (response: Response) => {
                    let markers = response.json();

                    for (let marker in markers) {
                        if (markers.hasOwnProperty(marker)) {
                            markers[marker] = new Marker(markers[marker]);
                            markers[marker].id = marker;
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
