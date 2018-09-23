import { Injectable, OnDestroy, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet/dist/leaflet.js';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import { Marker } from "../old-markers/marker";
import { MarkersService } from "../old-markers/markers.service";
import { MarkerTypesService } from "../old-marker-types/marker-types.service";
import { Subject, Subscription } from "rxjs";
import { MarkerType } from "../old-marker-types/marker-type";

@Injectable({
    providedIn: 'root'
})
export class MapService {
    map: Leaflet;

    isMapGenerated = false;

    onMarkerSelected = new Subject<any>();
    markers = {};

    selectedLayersSubscription: Subscription;
    layers = {};
    selectedMarkerTypes = [100, 498, 932, 2013];

    constructor(
        private markersService: MarkersService,
        private markerTypesService: MarkerTypesService
    ) {
        this.markerTypesService.onSelectedMarkerTypesChanged.subscribe(
            (markerTypes) => {
                this.getMarkers(markerTypes);
            }
        )
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
                    this.markerTypesService.getMarkerTypes()
                        .subscribe(
                            (markerTypes: MarkerType[]) => {
                                this.markerTypesService.setSelectedMarkerTypes(this.selectedMarkerTypes);
                                this.getMarkers(this.selectedMarkerTypes);
                            }
                        );
                })
                .setView([-245.7, 156.25])
                .setZoom(4);

            this.map.setMaxBounds(Leaflet.LatLngBounds(
                this.map.unproject([-62.5, 437.5], 0),
                this.map.unproject([437.5, -62.5], 0)
            ));

            Leaflet.tileLayer('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    }

    getMarkers(markerTypes) {
        this.selectedMarkerTypes = markerTypes;

        this.markersService.getMarkers({
            types: this.selectedMarkerTypes
        })
            .subscribe(
                (markers) => {
                    this.addMarkersToMap(markers);
                }
            );
    }

    clearMarkers() {
        for (let layer in this.markers) {
            this.markers[layer].clearLayers();
            this.map.removeLayer(this.markers[layer]);
        }
    }

    addMarkersToMap(markersData) {
        this.clearMarkers();

        for (let marker of markersData) {
            if (!this.markers.hasOwnProperty(marker.marker_type_id.toString())) {
                this.markers[marker.marker_type_id.toString()] = Leaflet.layerGroup();
            }

            let markerTypeGroup = this.markers[marker.marker_type_id.toString()];

            if (this.selectedMarkerTypes.includes(marker.marker_type_id)) {
                console.log(marker);
                let newMarker = Leaflet.marker([
                        -this.normalizeCoord(marker.z),
                        this.normalizeCoord(marker.x)
                    ],
                    {
                        icon: Leaflet.icon({
                            iconUrl: this.markerTypesService.getIcon(marker.marker_type_id),
                            iconSize: [32, 32]
                        }),
                        title: this.markerTypesService.getName(marker.marker_type_id),
                        zIndexOffset: marker.y
                    }
                ).on('click', (event) => {
                    this.showMarkerDetails(event.target);
                });
                newMarker.markerId = marker.id;
                newMarker.layerId = marker.marker_type_id;

                markerTypeGroup.addLayer(newMarker);
                this.map.addLayer(markerTypeGroup);
            } else {
                console.log('removing layer: ' + markerTypeGroup);
                this.map.removeLayer(markerTypeGroup);
            }
        }
    }

    showMarkerDetails(target) {
        this.markersService.getMarker(target.markerId).subscribe(
            (marker: Marker) => {
                this.onMarkerSelected.next(marker);
                this.map.panTo([
                    -this.normalizeCoord(marker.z),
                    this.normalizeCoord(marker.x)
                ]);
            }
        );
    }

    normalizeCoord(coord: number) {
        return (coord + 6000) * 0.03125
    }
}
