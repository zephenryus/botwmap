import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Marker } from "../marker/marker.model";

import * as Leaflet from 'leaflet/dist/leaflet.js';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, OnChanges {
    @Input() selectedMarkerTypes: number[];
    @Input() selectedMarker: Marker;

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
    }
}
