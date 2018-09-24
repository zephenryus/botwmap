import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Marker } from "./marker.model";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
    constructor(private http: HttpClient) {
    }

    public getByType(types: number[]) {
        const typeString = types.join(',');

        return this.http.get<Marker[]>('http://127.0.0.1:8000/markers?type=' + typeString)
            .pipe(map(
                (markers) => {
                    return markers;
                }
            ));
    }
}