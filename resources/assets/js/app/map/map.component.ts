import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Marker } from "../marker/marker.model";

import * as Leaflet from 'leaflet/dist/leaflet.js';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, OnChanges {
    @Input() selectedMarkerTypes: number[];
    @Input() selectedMarker: Marker;

    // @Output() markerSelected: any;

    public isMapGenerated: boolean = false;
    private map: Leaflet;
    private mapLayers = [];

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
        console.log(changes);
        if (changes.hasOwnProperty('selectedMarkerTypes')) {
            this.selectedMarkersChanged(changes.selectedMarkerTypes);
        }
    }

    selectedMarkersChanged(values: {currentValue: number[], previousValue: number[], firstChange: boolean}) {
        if (! values.firstChange) {
            let added = values.currentValue.filter(item => values.previousValue.indexOf(item) < 0);
            let removed = values.previousValue.filter(item => values.currentValue.indexOf(item) < 0);
            console.log(added, removed);
        } else {
            console.log(values.currentValue);
        }
    }
}
