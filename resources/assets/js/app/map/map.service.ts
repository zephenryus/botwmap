import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Response } from '@angular/http';
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
    layers = [];

    constructor(private markersService: MarkersService) {}

    generateMap() {
        if (!this.isMapGenerated) {
            this.map = Leaflet.map('map', {
                crs: Leaflet.CRS.Simple,
                continuousWorld: false,
                minZoom: 0,
                maxZoom: 6,
                noWrap: true,
                maxBoundsViscosity: 0.75,
                zoomControl: false
            })
                .on('load', () => {
                    this.isMapGenerated = true;
                    this.markersService.getMarkers()
                        .subscribe(
                            (markers: Marker[]) => {
                                this.markers = markers;
                                this.loadMarkers();
                            },
                            (error) => console.log(error)
                        );
                })
                .on('zoomend', (e) => {
                    if (this.map) {
                        const zoom = this.map.getZoom();
                        console.log(zoom);
                    }
                })
                // .setView([-131.375, 84.125])
                .setView([-187.5, 187.5])
                .setZoom(3);

            const southWest = this.map.unproject([0, 375], 0);
            const northEast = this.map.unproject([375, 0], 0);
            const bounds = new Leaflet.LatLngBounds(southWest, northEast);
            this.map.setMaxBounds(bounds);

            Leaflet.tileLayer('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    }

    loadMarkers() {
        console.log('loading markers...');
        if (this.markers.length > 0) {
            for (let marker of this.markers) {
                if (this.layers.hasOwnProperty(marker.marker_type_id)) {
                    this.layers[marker.marker_type_id].push(marker);
                } else {
                    this.layers[marker.marker_type_id] = [marker];
                }
            }
        }

        this.loadLayers();
    }

    loadLayers() {
        console.log('Loading layers...');
        let newLayers = [];

        for (let layer in this.layers) {
            let layerMarkers = [];

            if (this.layers.hasOwnProperty(layer)) {
                for (let marker in this.layers[layer]) {
                    if (this.layers[layer].hasOwnProperty(marker)) {
                        this.layers[layer][marker].pointer = Leaflet.circle(
                            [
                                (((this.layers[layer][marker].z + 6000) / 12000) * -375),
                                (((this.layers[layer][marker].x + 6000) / 12000) * 375)
                                // -1000 + 8000 = 7000
                                // Should be about
                                // -8000 = 0
                                // 0 = -101
                                // 8000 = -200
                                // Time to do some math on paper...
                            ],
                            {
                                color: 'red',
                                fillColor: 'red',
                                radius: 0.1,
                                title: this.layers[layer][marker].marker_name
                            }
                        );

                        this.layers[layer][marker].pointer.markerId = this.layers[layer][marker].id;
                        this.layers[layer][marker].pointer.layerId = layer;
                        layerMarkers.push(this.layers[layer][marker].pointer);
                    }
                }

                newLayers[layer] = Leaflet.layerGroup(layerMarkers);
            }
        }

        this.layers = newLayers;

        console.log('Adding markers to map...');
        console.log(this.layers);
        for (let layer in this.layers) {
            if (this.layers.hasOwnProperty(layer)) {
                this.layers[layer].addTo(this.map);
            }
        }
    }
}
