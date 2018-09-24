import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

import * as Leaflet from 'leaflet/dist/leaflet.js';
import { MarkersService } from "../markers.service";
import { MarkerType } from "../MarkerType.model";
import { Marker } from "../Marker.model";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, OnChanges {
    @Input() markerTypes: MarkerType[];
    @Input() selectedMarkerTypes: number[];
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
            this.selectedMarkersChanged(changes.selectedMarkerTypes);
        }
    }

    selectedMarkersChanged(values: {currentValue: number[], previousValue: number[], firstChange: boolean}) {
        if (! values.firstChange) {
            let added = values.currentValue.filter(item => values.previousValue.indexOf(item) < 0);
            let removed = values.previousValue.filter(item => values.currentValue.indexOf(item) < 0);

            if (added.length > 0) {
                this.markersService.getByType(added).subscribe((markers: Marker[]) => {
                });
            }
        } else {
            this.markersService.getByType(values.currentValue).subscribe((markers: Marker[]) => {
                this.addMarkers(markers);
            });
        }
    }

    private addMarkers(markers: Marker[]) {
        for (let marker of markers) {
            if (!this.mapLayers.hasOwnProperty(marker.marker_type_id.toString())) {
                this.mapLayers[marker.marker_type_id.toString()] = Leaflet.layerGroup();
            }

            let markerTypeGroup = this.mapLayers[marker.marker_type_id.toString()] = Leaflet.layerGroup();

            if (this.selectedMarkerTypes.includes(marker.marker_type_id)) {
                let newMarker = Leaflet.marker([
                    -this.normalizeCoord(marker.z),
                    this.normalizeCoord(marker.x)
                ], {
                    icon: Leaflet.icon({
                        iconUrl: 'images/icons/markers/default.png',
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
}
