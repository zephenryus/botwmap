(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./resources/assets/js/app/app.component.css":
/*!***************************************************!*\
  !*** ./resources/assets/js/app/app.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/js/app/app.component.html":
/*!****************************************************!*\
  !*** ./resources/assets/js/app/app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"app\">\r\n    <header id=\"map-header\">\r\n        <div id=\"header-wrapper\">\r\n            <div id=\"main-menu\" class=\"d-flex align-items-center\">\r\n                <button class=\"btn\">\r\n                    <div class=\"menu-icon flex-shrink-1\"></div>\r\n                </button>\r\n\r\n                <div id=\"search\" class=\"flex-grow-1\">\r\n                    <input type=\"search\" id=\"q\" name=\"q\" placeholder=\"Hyrule Castle...\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n    <aside id=\"map-modifiers\">\r\n        <button id=\"layers\" class=\"btn btn-primary\">\r\n            L\r\n        </button>\r\n\r\n        <div id=\"sidebar\">\r\n            <button id=\"close-sidebar\">\r\n                X\r\n            </button>\r\n\r\n            <main style=\"background: white;\">\r\n                <div class=\"d-flex flex-wrap\">\r\n                    <div style=\"height:30px; width:30px\"></div>\r\n                    <div style=\"height:30px; width:30px\"></div>\r\n                    <div style=\"height:30px; width:30px\"></div>\r\n                    <div style=\"height:30px; width:30px\"></div>\r\n                    <div style=\"height:30px; width:30px\"></div>\r\n                </div>\r\n            </main>\r\n        </div>\r\n    </aside>\r\n\r\n    <app-marker-details></app-marker-details>\r\n\r\n    <div id=\"loader\">\r\n        <div id=\"loader-orb-wrapper\">\r\n            <div id=\"loader-orb-0\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-1\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-2\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-3\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-4\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-5\" class=\"loader-orb\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-map></app-map>\r\n</main>"

/***/ }),

/***/ "./resources/assets/js/app/app.component.ts":
/*!**************************************************!*\
  !*** ./resources/assets/js/app/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./resources/assets/js/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./resources/assets/js/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/app.module.ts":
/*!***********************************************!*\
  !*** ./resources/assets/js/app/app.module.ts ***!
  \***********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./resources/assets/js/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./resources/assets/js/app/map/map.component.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.service */ "./resources/assets/js/app/map/map.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marker-details/marker-details.component */ "./resources/assets/js/app/marker-details/marker-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_6__["MarkerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            providers: [
                _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./resources/assets/js/app/map/map.component.css":
/*!*******************************************************!*\
  !*** ./resources/assets/js/app/map/map.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css';\n/*@import '../../../../../node_modules/leaflet/dist/leaflet.css';*/\n#map {\r\n    height: 100vh;\r\n    width: 100vw;\r\n}"

/***/ }),

/***/ "./resources/assets/js/app/map/map.component.html":
/*!********************************************************!*\
  !*** ./resources/assets/js/app/map/map.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./resources/assets/js/app/map/map.component.ts":
/*!******************************************************!*\
  !*** ./resources/assets/js/app/map/map.component.ts ***!
  \******************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.service */ "./resources/assets/js/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(mapService) {
        this.mapService = mapService;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.mapService.generateMap();
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./resources/assets/js/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./resources/assets/js/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/map/map.service.ts":
/*!****************************************************!*\
  !*** ./resources/assets/js/app/map/map.service.ts ***!
  \****************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.js */ "./node_modules/leaflet/dist/leaflet.js");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _markers_markers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markers/markers.service */ "./resources/assets/js/app/markers/markers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService(markersService) {
        this.markersService = markersService;
        this.layers = [];
    }
    MapService.prototype.generateMap = function () {
        var _this = this;
        if (!this.isMapGenerated) {
            this.map = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
                crs: leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["CRS"].Simple,
                continuousWorld: false,
                minZoom: 0,
                maxZoom: 6,
                noWrap: true,
                maxBoundsViscosity: 0.75,
                zoomControl: false
            })
                .on('load', function () {
                _this.isMapGenerated = true;
                _this.markersService.getMarkers()
                    .subscribe(function (markers) {
                    _this.markers = markers;
                    _this.loadMarkers();
                }, function (error) { return console.log(error); });
            })
                .on('zoomend', function (e) {
                if (_this.map) {
                    var zoom = _this.map.getZoom();
                }
            })
                .setView([-187.5, 187.5])
                .setZoom(6);
            var southWest = this.map.unproject([-62.5, 437.5], 0);
            var northEast = this.map.unproject([437.5, -62.5], 0);
            var bounds = new leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"](southWest, northEast);
            this.map.setMaxBounds(bounds);
            leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    };
    MapService.prototype.loadMarkers = function () {
        if (this.markers.length > 0) {
            for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
                var marker = _a[_i];
                if (this.layers.hasOwnProperty(marker.marker_type_id)) {
                    this.layers[marker.marker_type_id].push(marker);
                }
                else {
                    this.layers[marker.marker_type_id] = [marker];
                }
            }
        }
        this.loadLayers();
    };
    MapService.prototype.loadLayers = function () {
        var _this = this;
        var newLayers = [];
        for (var layer in this.layers) {
            var layerMarkers = [];
            if (this.layers.hasOwnProperty(layer)) {
                for (var marker in this.layers[layer]) {
                    if (this.layers[layer].hasOwnProperty(marker)) {
                        this.layers[layer][marker].pointer = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["circle"]([
                            // ((coordinate + 6000) / 12000) * 375
                            (this.layers[layer][marker].z + 6000) * -0.03125,
                            (this.layers[layer][marker].x + 6000) * 0.03125
                        ], {
                            color: 'red',
                            fillColor: 'red',
                            radius: 0.1,
                            title: this.layers[layer][marker].marker_name
                        })
                            .on('click', function (event) {
                            _this.showMarkerDetails(parseInt(event.target.markerId));
                        });
                        this.layers[layer][marker].pointer.markerId = this.layers[layer][marker].id;
                        this.layers[layer][marker].pointer.layerId = layer;
                        layerMarkers.push(this.layers[layer][marker].pointer);
                    }
                }
                newLayers[layer] = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["layerGroup"](layerMarkers);
            }
        }
        this.layers = newLayers;
        for (var layer in this.layers) {
            if (this.layers.hasOwnProperty(layer)) {
                this.layers[layer].addTo(this.map);
            }
        }
    };
    MapService.prototype.showMarkerDetails = function (markerId) {
        this.markersService.setSelectedMarker(this.markers[markerId]);
        this.map.panTo([
            this.getCoordY(this.markers[markerId].z),
            this.getCoordX(this.markers[markerId].x)
        ]);
    };
    MapService.prototype.getCoordX = function (x) {
        return (x + 6000) * 0.03125;
    };
    MapService.prototype.getCoordY = function (x) {
        return (x + 6000) * -0.03125;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_markers_markers_service__WEBPACK_IMPORTED_MODULE_2__["MarkersService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-details/marker-details.component.html":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/app/marker-details/marker-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"marker-details\" [class.open]=\"isOpen\" *ngIf=\"selectedMarker\">\r\n    <div id=\"marker-details-wrapper\" (click)=\"openDetails()\">\r\n        <button id=\"marker-details-close\" class=\"btn\" (click)=\"closeDetails()\">Close</button>\r\n        <h3>{{ selectedMarker.marker_name }}</h3>\r\n\r\n        <div>{{ selectedMarker.marker_category_id }}</div>\r\n\r\n        <div> &lt;{{ selectedMarker.x }}, {{ selectedMarker.y }}, {{ selectedMarker.z }}&gt;</div>\r\n\r\n        <!--<p>{{ selectedMarker.id }}</p>-->\r\n        <!--<p>{{ selectedMarker.map_region_id }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_name }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_sub_category_id }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_type_id }}</p>-->\r\n        <!--<p>{{ selectedMarker.source }}</p>-->\r\n\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./resources/assets/js/app/marker-details/marker-details.component.ts":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/app/marker-details/marker-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: MarkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerDetailsComponent", function() { return MarkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _markers_markers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markers/markers.service */ "./resources/assets/js/app/markers/markers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerDetailsComponent = /** @class */ (function () {
    function MarkerDetailsComponent(markersService) {
        this.markersService = markersService;
        this.isOpen = false;
    }
    MarkerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markerSelectSubscription = this.markersService.onMarkerSelected.subscribe(function (marker) {
            _this.selectedMarker = marker;
        });
    };
    MarkerDetailsComponent.prototype.openDetails = function () {
        this.isOpen = true;
    };
    MarkerDetailsComponent.prototype.closeDetails = function () {
        this.isOpen = false;
        this.selectedMarker = null;
    };
    MarkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marker-details',
            template: __webpack_require__(/*! ./marker-details.component.html */ "./resources/assets/js/app/marker-details/marker-details.component.html")
        }),
        __metadata("design:paramtypes", [_markers_markers_service__WEBPACK_IMPORTED_MODULE_1__["MarkersService"]])
    ], MarkerDetailsComponent);
    return MarkerDetailsComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/markers/marker.ts":
/*!***************************************************!*\
  !*** ./resources/assets/js/app/markers/marker.ts ***!
  \***************************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
var Marker = /** @class */ (function () {
    function Marker(marker) {
        this.marker_name = marker.marker_name;
        this.map_region_id = marker.map_region_id;
        this.x = marker.x;
        this.y = marker.y;
        this.z = marker.z;
        this.source = marker.source;
        this.marker_type_id = marker.marker_type_id;
        this.marker_category_id = marker.marker_category_id;
        this.marker_sub_category_id = marker.marker_sub_category_id;
    }
    return Marker;
}());



/***/ }),

/***/ "./resources/assets/js/app/markers/markers.service.ts":
/*!************************************************************!*\
  !*** ./resources/assets/js/app/markers/markers.service.ts ***!
  \************************************************************/
/*! exports provided: MarkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkersService", function() { return MarkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker */ "./resources/assets/js/app/markers/marker.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkersService = /** @class */ (function () {
    function MarkersService(http) {
        this.http = http;
        this.onMarkerSelected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    MarkersService.prototype.getMarkers = function () {
        return this.http.get('/markers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var markers = response.json();
            for (var marker in markers) {
                if (markers.hasOwnProperty(marker)) {
                    markers[marker] = new _marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](markers[marker]);
                    markers[marker].id = marker;
                }
            }
            return markers;
        }));
    };
    MarkersService.prototype.setSelectedMarker = function (marker) {
        if (this.selectedMarker != marker) {
            this.selectedMarker = marker;
            this.onMarkerSelected.next(marker);
        }
    };
    MarkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MarkersService);
    return MarkersService;
}());



/***/ }),

/***/ "./resources/assets/js/environments/environment.ts":
/*!*********************************************************!*\
  !*** ./resources/assets/js/environments/environment.ts ***!
  \*********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./resources/assets/js/main.ts":
/*!*************************************!*\
  !*** ./resources/assets/js/main.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./resources/assets/js/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./resources/assets/js/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./resources/assets/js/main.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\botwmap\resources\assets\js\main.ts */"./resources/assets/js/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map