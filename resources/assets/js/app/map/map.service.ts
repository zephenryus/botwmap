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
                    }
                })
                // .setView([-131.375, 84.125])
                .setView([-187.5, 187.5])
                .setZoom(6);

            const southWest = this.map.unproject([-62.5, 437.5], 0);
            const northEast = this.map.unproject([437.5, -62.5], 0);
            const bounds = new Leaflet.LatLngBounds(southWest, northEast);
            this.map.setMaxBounds(bounds);

            Leaflet.tileLayer('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    }

    loadMarkers() {
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
        let newLayers = [];

        for (let layer in this.layers) {
            let layerMarkers = [];

            if (this.layers.hasOwnProperty(layer)) {
                for (let marker in this.layers[layer]) {
                    if (this.layers[layer].hasOwnProperty(marker)) {
                        this.layers[layer][marker].pointer = Leaflet.circle(
                            [
                                // ((coordinate + 6000) / 12000) * 375
                                (this.layers[layer][marker].z + 6000) * -0.03125,
                                (this.layers[layer][marker].x + 6000) * 0.03125
                            ],
                            {
                                color: 'red',
                                fillColor: 'red',
                                radius: 0.1,
                                title: this.layers[layer][marker].marker_name
                            }
                        )
                            .on('click', (event) => {
                                this.showMarkerDetails(parseInt(event.target.markerId));
                            });

                        this.layers[layer][marker].pointer.markerId = this.layers[layer][marker].id;
                        this.layers[layer][marker].pointer.layerId = layer;
                        layerMarkers.push(this.layers[layer][marker].pointer);
                    }
                }

                newLayers[layer] = Leaflet.layerGroup(layerMarkers);
            }
        }

        this.layers = newLayers;

        for (let layer in this.layers) {
            if (this.layers.hasOwnProperty(layer)) {
                this.layers[layer].addTo(this.map);
            }
        }
    }

    showMarkerDetails(markerId: number) {
        this.markersService.setSelectedMarker(this.markers[markerId]);
        this.map.panTo([
            this.getCoordY(this.markers[markerId].z),
            this.getCoordX(this.markers[markerId].x)
        ]);
    }

    getCoordX(x: number) {
        return (x + 6000) * 0.03125
    }

    getCoordY(x: number) {
        return (x + 6000) * -0.03125
    }
}
