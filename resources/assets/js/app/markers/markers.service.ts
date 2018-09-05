import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Marker } from "./marker";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarkersService {
    constructor(private http: HttpClient) {
    }

    getMarkers(): Observable<Marker[]> {
        return this.http.get<Marker[]>('/markers');
    }
}
