import { Component, OnInit } from '@angular/core';
import { MapService } from "./map.service";
import * as Leaflet from 'leaflet/dist/leaflet.js';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    isMapGenerated: boolean;
    map;
    markers = {};
    selectedMarkerTypes = [100, 498, 932, 2013];
    control;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.mapService.generateMap();
    }
}
