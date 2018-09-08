import { Injectable, OnDestroy, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet/dist/leaflet.js';
import { Marker } from "../markers/marker";
import { MarkersService } from "../markers/markers.service";
import { MarkerTypesService } from "../marker-types/marker-types.service";
import { MarkerType } from "../marker-types/marker-type";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MapService implements OnInit, OnDestroy {
    map: Leaflet;
    isMapGenerated: boolean;
    markers: Marker[];

    selectedLayersSubscription: Subscription;
    layers = [];
    selectedLayers: MarkerType[];
    defaultShowMarkers = [1, 2, 3];

    constructor(
        private markersService: MarkersService,
        private markerTypesService: MarkerTypesService
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.selectedLayersSubscription.unsubscribe();
    }

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

                    this.markersService.getMarkers(this.selectedLayers)
                        .subscribe(
                            (markers: Marker[]) => {
                                this.markers = markers;
                                this.loadMarkers();
                            }
                        );

                    // this.markerTypesService.setSelectedMarkerTypes(
                    //
                    // );

                    this.markerTypesService.onSelectedMarkerTypesChanged
                        .subscribe(
                            (markerTypes: MarkerType[]) => {
                                this.selectedLayers = markerTypes;
                                this.filterLayers(this.selectedLayers);
                            }
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
        let markerTypes = [];

        for (let layer in this.layers) {
            let layerMarkers = [];
            markerTypes.push(layer);

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
        this.filterLayers(this.markerTypesService.getMarkerTypesById(markerTypes));

        for (let layer in this.layers) {
            if (this.layers.hasOwnProperty(layer)) {
                this.layers[layer].addTo(this.map);
            }
        }
    }

    filterLayers(showTypes: MarkerType[]) {
        for (let layer in this.layers) {
            if (showTypes[layer] !== undefined) {
                if (!this.map.hasLayer(this.layers[layer])) {
                    this.layers[layer].addTo(this.map)
                }
            } else {
                if (this.map.hasLayer(this.layers[layer])) {
                    this.layers[layer].remove();
                }
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
