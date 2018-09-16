import { Component, OnInit } from '@angular/core';
import { MarkerTypesService } from "../marker-types/marker-types.service";
import { MarkerType } from "../marker-types/marker-type";
import { MapService } from "../map/map.service";

@Component({
    selector: 'app-marker-filter',
    templateUrl: './marker-filter.component.html'
})
export class MarkerFilterComponent implements OnInit {
    isOpen = true;
    markerLayers = [];
    selectedLayers = [];
    iconHref = "images/icons/markers/markers.svg";

    markerTypes: object;

    constructor(
        private markerTypesService: MarkerTypesService,
        private mapService: MapService
    ) {
        this.markerTypes =
            [
                {
                    "id": 'Animal',
                    "markerTypes": [],
                    "label": "Animals",
                    "children": [
                        {
                            "id": 'Animal_Bear',
                            "markerTypes": [57, 3427],
                            "label": "Bears",
                            "children": [
                                {
                                    "id": 'Animal_Bear_B',
                                    "markerTypes": [57],
                                    "label": "Grizzlemaw Bear",
                                    "children": []
                                },
                                {
                                    "id": 'Animal_Bear_A',
                                    "markerTypes": [3427],
                                    "label": "Honeyvore Bear",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 'Animal_Birds',
                            "markerTypes": [3095, 3576, 1545, 1542, 1537, 1556, 1549, 1158, 3984, 2846, 3758, 810, 1476,
                                1473, 563, 1568, 1547, 3851, 3183, 568],
                            "label": "Birds",
                            "children": [
                                {
                                    "id": 'Animal_Kokko_A',
                                    "markerTypes": [3095, 3576],
                                    "label": "Cuccos",
                                    "children": [
                                        {
                                            "id": 'Animal_Kokko_B',
                                            "markerTypes": [3576],
                                            "label": "Cuccos (Cado's Cuccos)",
                                            "children": []
                                        },
                                    ]
                                },
                                {
                                    "id": '',
                                    "markerTypes": [1545, 1542],
                                    "label": "Crows",
                                    "children": [
                                        {
                                            "id": '',
                                            "markerTypes": [1542],
                                            "label": "Crow Swarm",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": '',
                                    "markerTypes": [1537],
                                    "label": "Bright-Chested Duck",
                                    "children": []
                                },
                                {
                                    "id": '',
                                    "markerTypes": [1556],
                                    "label": "Islander Hawk",
                                    "children": []
                                },
                                {
                                    "id": '',
                                    "markerTypes": [1549, 1158],
                                    "label": "Heron",
                                    "children": [
                                        {
                                            "id": '',
                                            "markerTypes": [1549],
                                            "label": "Blue-Winged Heron",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [1158],
                                            "label": "Pink Heron",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": '',
                                    "markerTypes": [3984, 2846],
                                    "label": "Seagull",
                                    "children": [
                                        {
                                            "id": '',
                                            "markerTypes": [2846],
                                            "label": "Seagull Swarm",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": '',
                                    "markerTypes": [3758],
                                    "label": "Eldin Ostrich",
                                    "children": []
                                },
                                {
                                    "id": '',
                                    "markerTypes": [810, 1476, 1473, 563],
                                    "label": "Pigeons",
                                    "children": [
                                        {
                                            "id": '',
                                            "markerTypes": [810],
                                            "label": "Wood Pigeon Swarm",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [1476],
                                            "label": "Rainbow Pigeon",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [1473],
                                            "label": "Rainbow Pigeon Swarm",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [563],
                                            "label": "White Pigeon",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": '',
                                    "markerTypes": [1568, 1547, 3851, 3183, 568],
                                    "label": "Sparrows",
                                    "children": [
                                        {
                                            "id": '',
                                            "markerTypes": [1568],
                                            "label": "Blue Sparrow",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [1547],
                                            "label": "Common Sparrow",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [3851],
                                            "label": "Golden Sparrow",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [3183],
                                            "label": "Rainbow Sparrow",
                                            "children": []
                                        },
                                        {
                                            "id": '',
                                            "markerTypes": [568],
                                            "label": "Red Sparrow",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ];
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
        (this.isOpen)
            ? this.iconHref = "images/icons/markers/close.svg"
            : this.iconHref = "images/icons/markers/markers.svg";
    }

    toggleLayer(index
                    :
                    number
    ) {
        // console.log(this.markerLayers[index]);
        this.markerLayers[index].selected = !this.markerLayers[index].selected;

        if (this.markerLayers[index].selected) {
            this.markerTypesService.selectMarkerType(this.markerLayers[index].id);
        } else {
            this.markerTypesService.unselectMarkerType(this.markerLayers[index].id);
        }
    }

    markSelected() {
        for (let markerLayer in this.markerLayers) {
            this.markerLayers[markerLayer].selected = false;
        }
    }

    ngOnInit() {
        this.markerTypesService.getMarkerTypes()
            .subscribe(
                (markerTypes: MarkerType[]) => {
                    this.markerLayers = markerTypes;
                    this.selectedLayers = this.mapService.selectedMarkerTypes;
                    this.markSelected();
                }
            );
    }
}