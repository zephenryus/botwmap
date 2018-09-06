import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Marker } from "./marker";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
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
}
