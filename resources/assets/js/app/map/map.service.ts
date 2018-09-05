import { Injectable, OnDestroy, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet/dist/leaflet.js';
import { Marker } from "../markers/marker";
import { MarkersService } from "../markers/markers.service";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MapService {
    map: Leaflet;
    isMapGenerated: boolean;
    markers: Marker[];
    markersSubscription: Subscription;

    constructor(private markersService: MarkersService) {}

    generateMap() {
        if (!this.isMapGenerated) {
            this.map = Leaflet.map('map', {
                crs: Leaflet.CRS.Simple,
                continuousWorld: false,
                minZoom: 0,
                maxZoom: 7,
                noWrap: true,
                maxBoundsViscosity: 0.75,
                bounds: Leaflet.bounds(
                    Leaflet.point(-5000, -4000),
                    Leaflet.point(5000, 4000)
                ),
                zoomControl: false
            })
                .on('load', () => {
                    this.isMapGenerated = true;
                    this.markersService.getMarkers()
                })
                .on('zoomend', (e) => {
                    if (this.map) {
                        const zoom = this.map.getZoom();
                        console.log(zoom);
                    }
                })
                .setView([-131.375, 84.125])
                .setZoom(5);

            const southWest = this.map.unproject([0, 200], 0);
            const northEast = this.map.unproject([200, 0], 0);
            const bounds = new Leaflet.LatLngBounds(southWest, northEast);
            this.map.setMaxBounds(bounds);

            Leaflet.tileLayer('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 200
            }).addTo(this.map);
        }
    }
}
