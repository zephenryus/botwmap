import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

import * as Leaflet from 'leaflet/dist/leaflet.js';
import { MarkersService } from "../markers.service";
import { MarkerType } from "../MarkerType.model";
import { Marker } from "../Marker.model";
import { BinarySearchTree } from "../BinarySearchTree";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, OnChanges {
    @Input() markerTypes: MarkerType[];
    @Input() markerTypesIndex: BinarySearchTree;

    @Input() selectedMarkerTypes: number[];
    private previousSelectedMarkerTypes: number[] = [];
    @Input() selectedMarker: Marker;

    @Output() markerSelected = new EventEmitter<Marker>();

    public isMapGenerated: boolean = false;
    private map: Leaflet;
    private mapLayers = {};

    constructor(private markersService: MarkersService) {}

    ngOnInit() {
        this.generateMap();
    }

    private generateMap() {
        if (!this.isMapGenerated) {
            this.map = Leaflet.map('map', {
                crs: Leaflet.CRS.Simple,
                continuousWorld: false,
                noWrap: true,
                minZoom: 0,
                maxZoom: 6,
                maxBoundsViscosity: 0.75,
                zoomControl: false
            })
                .on('load', () => {
                    this.isMapGenerated = true;
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('selectedMarkerTypes')) {
            this.selectedMarkerTypesChanged(changes.selectedMarkerTypes);
        }
    }

    selectedMarkerTypesChanged(values: { currentValue: number[], previousValue: number[], firstChange: boolean }) {
        if (!values.firstChange) {
            let added = values.currentValue.filter(item => this.previousSelectedMarkerTypes.indexOf(item) < 0);
            let removed = this.previousSelectedMarkerTypes.filter(item => values.currentValue.indexOf(item) < 0);

            if (added.length > 0) {
                this.markersService.getByType(added).subscribe((markers: Marker[]) => {
                    this.addMarkers(markers);
                });
            }

            if (removed.length > 0) {
                this.removeMarkers(removed);
            }
        } else {
            this.markersService.getByType(values.currentValue).subscribe((markers: Marker[]) => {
                this.addMarkers(markers);
            });
        }

        this.previousSelectedMarkerTypes = Object.assign([], this.selectedMarkerTypes);
    }

    private addMarkers(markers: Marker[]) {
        if (markers !== null) {
            for (let marker of markers) {
                if (!this.mapLayers.hasOwnProperty(marker.marker_type_id.toString())) {
                    this.mapLayers[marker.marker_type_id.toString()] = Leaflet.layerGroup();
                }

                let markerTypeGroup = this.mapLayers[marker.marker_type_id.toString()];

                if (this.selectedMarkerTypes.includes(marker.marker_type_id)) {
                    let markerTypeId = (this.markerTypesIndex.lookup(marker.marker_type_id));

                    if (markerTypeId != undefined && markerTypeId.hasOwnProperty('value')) {
                        let markerType = this.markerTypes[markerTypeId.value];

                        let newMarker = Leaflet.marker([
                            -this.normalizeCoord(marker.z),
                            this.normalizeCoord(marker.x)
                        ], {
                            icon: Leaflet.icon({
                                iconUrl: markerType.icon,
                                iconSize: [32, 32]
                            }),
                            title: marker.marker_name,
                            zIndexOffset: Math.floor(marker.y),
                        })
                            .on('click', (event) => {
                                this.showMarkerDetails(event.target);
                            });
                        newMarker.markerId = marker.id;
                        newMarker.layerId = marker.marker_type_id;

                        markerTypeGroup.addLayer(newMarker);
                    }
                }

                this.map.addLayer(markerTypeGroup);
            }
        }
    }

    private normalizeCoord(coord: number) {
        return (coord + 6000) * 0.03125
    }

    public showMarkerDetails(target) {
        this.markersService.getById(target.markerId).subscribe(
            (marker: Marker) => {
                this.selectedMarker = marker;
                this.markerSelected.emit(marker);
                this.map.panTo([
                    -this.normalizeCoord(marker.z),
                    this.normalizeCoord(marker.x)
                ])
            }
        );
    }

    private removeMarkers(removed: number[]) {
        for (let layerId of removed) {
            if (this.map.hasLayer(this.mapLayers[layerId.toString()])) {
                this.mapLayers[layerId.toString()].clearLayers();
                this.map.removeLayer(this.mapLayers[layerId.toString()]);
                delete this.mapLayers[layerId.toString()];
            }
        }
    }
}
