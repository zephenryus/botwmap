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

module.exports = "<main id=\"app\">\r\n    <header id=\"map-header\">\r\n        <!--<div id=\"header-wrapper\">-->\r\n            <!--<div id=\"main-menu\" class=\"d-flex align-items-center\">-->\r\n                <!--<button class=\"btn\">-->\r\n                    <!--<div class=\"menu-icon flex-shrink-1\"></div>-->\r\n                <!--</button>-->\r\n\r\n                <!--<div id=\"search\" class=\"flex-grow-1\">-->\r\n                    <!--<input type=\"search\" id=\"q\" name=\"q\" placeholder=\"Hyrule Castle...\">-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    </header>\r\n\r\n    <app-marker-filter></app-marker-filter>\r\n\r\n    <app-marker-details></app-marker-details>\r\n\r\n    <div id=\"loader\">\r\n        <div id=\"loader-orb-wrapper\">\r\n            <div id=\"loader-orb-0\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-1\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-2\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-3\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-4\" class=\"loader-orb\"></div>\r\n            <div id=\"loader-orb-5\" class=\"loader-orb\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-map></app-map>\r\n</main>"

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
/* harmony import */ var _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marker-details/marker-details.component */ "./resources/assets/js/app/marker-details/marker-details.component.ts");
/* harmony import */ var _marker_filter_marker_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marker-filter/marker-filter.component */ "./resources/assets/js/app/marker-filter/marker-filter.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _markers_markers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markers/markers.service */ "./resources/assets/js/app/markers/markers.service.ts");
/* harmony import */ var _marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marker-types/marker-types.service */ "./resources/assets/js/app/marker-types/marker-types.service.ts");
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
                _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_5__["MarkerDetailsComponent"],
                _marker_filter_marker_filter_component__WEBPACK_IMPORTED_MODULE_6__["MarkerFilterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [
                _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
                _markers_markers_service__WEBPACK_IMPORTED_MODULE_8__["MarkersService"],
                _marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_9__["MarkerTypesService"]
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
        this.markers = {};
        this.selectedMarkerTypes = [100, 498, 932, 2013];
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
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.markercluster/dist/leaflet.markercluster.js */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster.js");
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markers_markers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../markers/markers.service */ "./resources/assets/js/app/markers/markers.service.ts");
/* harmony import */ var _marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../marker-types/marker-types.service */ "./resources/assets/js/app/marker-types/marker-types.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function MapService(markersService, markerTypesService) {
        var _this = this;
        this.markersService = markersService;
        this.markerTypesService = markerTypesService;
        this.isMapGenerated = false;
        this.onMarkerSelected = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.markers = {};
        this.layers = {};
        this.selectedMarkerTypes = [100, 498, 932, 2013];
        this.markerTypesService.onSelectedMarkerTypesChanged.subscribe(function (markerTypes) {
            _this.getMarkers(markerTypes);
        });
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
                _this.markerTypesService.getMarkerTypes()
                    .subscribe(function (markerTypes) {
                    _this.markerTypesService.setSelectedMarkerTypes(_this.selectedMarkerTypes);
                    _this.getMarkers(_this.selectedMarkerTypes);
                });
            })
                .setView([-245.7, 156.25])
                .setZoom(4);
            this.map.setMaxBounds(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"](this.map.unproject([-62.5, 437.5], 0), this.map.unproject([437.5, -62.5], 0)));
            leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    };
    MapService.prototype.getMarkers = function (markerTypes) {
        var _this = this;
        this.selectedMarkerTypes = markerTypes;
        this.markersService.getMarkers({
            types: this.selectedMarkerTypes
        })
            .subscribe(function (markers) {
            _this.addMarkersToMap(markers);
        });
    };
    MapService.prototype.clearMarkers = function () {
        for (var layer in this.markers) {
            this.markers[layer].clearLayers();
            this.map.removeLayer(this.markers[layer]);
        }
    };
    MapService.prototype.addMarkersToMap = function (markersData) {
        var _this = this;
        this.clearMarkers();
        for (var _i = 0, markersData_1 = markersData; _i < markersData_1.length; _i++) {
            var marker = markersData_1[_i];
            if (!this.markers.hasOwnProperty(marker.marker_type_id.toString())) {
                this.markers[marker.marker_type_id.toString()] = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]();
            }
            var markerTypeGroup = this.markers[marker.marker_type_id.toString()];
            if (this.selectedMarkerTypes.includes(marker.marker_type_id)) {
                var newMarker = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["marker"]([
                    -this.normalizeCoord(marker.z),
                    this.normalizeCoord(marker.x)
                ], {
                    icon: leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                        iconUrl: this.markerTypesService.getIcon(marker.marker_type_id),
                        iconSize: [32, 32]
                    }),
                    title: this.markerTypesService.getName(marker.marker_type_id),
                    zIndexOffset: marker.y
                }).on('click', function (event) {
                    _this.showMarkerDetails(event.target);
                });
                newMarker.markerId = marker.id;
                newMarker.layerId = marker.marker_type_id;
                markerTypeGroup.addLayer(newMarker);
                this.map.addLayer(markerTypeGroup);
            }
            else {
                console.log('removing layer: ' + markerTypeGroup);
                this.map.removeLayer(markerTypeGroup);
            }
        }
    };
    MapService.prototype.showMarkerDetails = function (target) {
        var _this = this;
        this.markersService.getMarker(target.markerId).subscribe(function (marker) {
            _this.onMarkerSelected.next(marker);
            _this.map.panTo([
                -_this.normalizeCoord(marker.z),
                _this.normalizeCoord(marker.x)
            ]);
        });
    };
    MapService.prototype.normalizeCoord = function (coord) {
        return (coord + 6000) * 0.03125;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_markers_markers_service__WEBPACK_IMPORTED_MODULE_3__["MarkersService"],
            _marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_4__["MarkerTypesService"]])
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

module.exports = "<aside id=\"marker-details\" [class.open]=\"isOpen\" *ngIf=\"selectedMarker\">\r\n    <div id=\"marker-details-wrapper\" (click)=\"openDetails()\">\r\n        <button id=\"marker-details-close\" class=\"btn\" (click)=\"closeDetails()\">Close</button>\r\n        <h3>{{ selectedMarker.type.marker_type_name }}</h3>\r\n\r\n\r\n\r\n        <div>&lt;{{ selectedMarker.x }}, {{ selectedMarker.y }}, {{ selectedMarker.z }}&gt;</div>\r\n\r\n        <!--<p>{{ selectedMarker.id }}</p>-->\r\n        <!--<p>{{ selectedMarker.map_region_id }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_name }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_sub_category_id }}</p>-->\r\n        <!--<p>{{ selectedMarker.marker_type_id }}</p>-->\r\n        <div class=\"marker-meta\">\r\n            <small>\r\n                <div>Marker ID: {{ selectedMarker.id }}</div>\r\n                <div>Source: {{ selectedMarker.source }}</div>\r\n            </small>\r\n        </div>\r\n\r\n    </div>\r\n</aside>"

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
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.service */ "./resources/assets/js/app/map/map.service.ts");
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
    function MarkerDetailsComponent(mapService, markersService) {
        this.mapService = mapService;
        this.markersService = markersService;
        this.isOpen = false;
    }
    MarkerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markerSelectSubscription = this.mapService.onMarkerSelected.subscribe(function (marker) {
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
        __metadata("design:paramtypes", [_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _markers_markers_service__WEBPACK_IMPORTED_MODULE_1__["MarkersService"]])
    ], MarkerDetailsComponent);
    return MarkerDetailsComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-filter/marker-filter.component.html":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/app/marker-filter/marker-filter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"map-modifiers\">\r\n    <button id=\"layers\" class=\"btn btn-primary\" (click)=\"toggleDialog()\">\r\n        <img [src]=\"iconHref\">\r\n    </button>\r\n\r\n    <div id=\"marker-filters\" *ngIf=\"isOpen\">\r\n        <main style=\"background: white;\">\r\n            <!--<div class=\"d-flex flex-wrap justify-content-between\">-->\r\n            <div>\r\n                <div *ngFor=\"let markerLayer of markerLayers; let i = index;\" class=\"layer-selector\" [class.selected]=\"markerLayer.selected\">\r\n                    <!--<label for=\"{{ markerLayer.id }}\" class=\"d-block text-center marker-type-label\">-->\r\n                    <label for=\"{{ markerLayer.id }}\">\r\n                        <input type=\"checkbox\" id=\"{{ markerLayer.id }}\" name=\"{{ markerLayer.id }}\" (change)=\"toggleLayer(i)\"\r\n                               [checked]=\"markerLayer.selected\" class=\"\">\r\n                        <img class=\"marker-type-icon\" src=\"{{ markerLayer.icon }}\" alt=\"\">\r\n                        <span class=\"marker-type-name\">{{ markerLayer.marker_type_name }}</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </main>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./resources/assets/js/app/marker-filter/marker-filter.component.ts":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/app/marker-filter/marker-filter.component.ts ***!
  \**************************************************************************/
/*! exports provided: MarkerFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerFilterComponent", function() { return MarkerFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marker-types/marker-types.service */ "./resources/assets/js/app/marker-types/marker-types.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.service */ "./resources/assets/js/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarkerFilterComponent = /** @class */ (function () {
    function MarkerFilterComponent(markerTypesService, mapService) {
        this.markerTypesService = markerTypesService;
        this.mapService = mapService;
        this.isOpen = false;
        this.markerLayers = [];
        this.selectedLayers = [];
        this.iconHref = "images/icons/markers/markers.svg";
    }
    MarkerFilterComponent.prototype.toggleDialog = function () {
        this.isOpen = !this.isOpen;
        (this.isOpen)
            ? this.iconHref = "images/icons/markers/close.svg"
            : this.iconHref = "images/icons/markers/markers.svg";
    };
    MarkerFilterComponent.prototype.toggleLayer = function (index) {
        // console.log(this.markerLayers[index]);
        this.markerLayers[index].selected = !this.markerLayers[index].selected;
        if (this.markerLayers[index].selected) {
            this.markerTypesService.selectMarkerType(this.markerLayers[index].id);
        }
        else {
            this.markerTypesService.unselectMarkerType(this.markerLayers[index].id);
        }
    };
    MarkerFilterComponent.prototype.markSelected = function () {
        for (var markerLayer in this.markerLayers) {
            this.markerLayers[markerLayer].selected = false;
        }
    };
    MarkerFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markerTypesService.getMarkerTypes()
            .subscribe(function (markerTypes) {
            _this.markerLayers = markerTypes;
            _this.selectedLayers = _this.mapService.selectedMarkerTypes;
            _this.markSelected();
        });
    };
    MarkerFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marker-filter',
            template: __webpack_require__(/*! ./marker-filter.component.html */ "./resources/assets/js/app/marker-filter/marker-filter.component.html")
        }),
        __metadata("design:paramtypes", [_marker_types_marker_types_service__WEBPACK_IMPORTED_MODULE_1__["MarkerTypesService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], MarkerFilterComponent);
    return MarkerFilterComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-types/marker-type.ts":
/*!*************************************************************!*\
  !*** ./resources/assets/js/app/marker-types/marker-type.ts ***!
  \*************************************************************/
/*! exports provided: MarkerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerType", function() { return MarkerType; });
var MarkerType = /** @class */ (function () {
    function MarkerType(markerType) {
        this.id = markerType.id;
        this.marker_type_name = markerType.marker_type_name;
        this.marker_type_slug = markerType.marker_type_slug;
        this.icon = markerType.icon;
        this.marker_type_description = markerType.marker_type_description;
        this.selected = markerType.selected || false;
    }
    return MarkerType;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-types/marker-types.service.ts":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/app/marker-types/marker-types.service.ts ***!
  \**********************************************************************/
/*! exports provided: MarkerTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerTypesService", function() { return MarkerTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _marker_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marker-type */ "./resources/assets/js/app/marker-types/marker-type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkerTypesService = /** @class */ (function () {
    function MarkerTypesService(http) {
        this.http = http;
        this.markerTypes = [];
        this.selectedMarkerTypes = [];
        this.onSelectedMarkerTypesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    MarkerTypesService.prototype.getMarkerTypes = function () {
        var _this = this;
        return this.http.get('/marker-types')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (markerTypes) {
            for (var markerType in markerTypes) {
                if (markerTypes.hasOwnProperty(markerType)) {
                    markerTypes[markerType] = new _marker_type__WEBPACK_IMPORTED_MODULE_4__["MarkerType"](markerTypes[markerType]);
                    _this.markerTypes.push(markerTypes[markerType]);
                }
            }
            return markerTypes;
        }));
    };
    MarkerTypesService.prototype.selectMarkerType = function (id) {
        var index = this.selectedMarkerTypes.indexOf(id);
        if (index === -1) {
            this.selectedMarkerTypes.push(id);
            this.onSelectedMarkerTypesChanged.next(this.selectedMarkerTypes);
        }
    };
    MarkerTypesService.prototype.unselectMarkerType = function (id) {
        var index = this.selectedMarkerTypes.indexOf(id);
        if (index > -1) {
            this.selectedMarkerTypes.splice(index, 1);
            this.onSelectedMarkerTypesChanged.next(this.selectedMarkerTypes);
        }
    };
    MarkerTypesService.prototype.selectAllMarkerTypes = function () {
    };
    MarkerTypesService.prototype.unselectAllMarkerTypes = function () {
    };
    MarkerTypesService.prototype.setSelectedMarkerTypes = function (types) {
        this.selectedMarkerTypes = types;
        this.onSelectedMarkerTypesChanged.next(types);
    };
    MarkerTypesService.prototype.getMarkerTypesById = function (ids) {
        var markerTypes = [];
        for (var _i = 0, _a = this.markerTypes; _i < _a.length; _i++) {
            var markerType = _a[_i];
            if (ids.indexOf(markerType.id) > -1) {
                markerTypes.push(markerType);
            }
        }
        return markerTypes;
    };
    MarkerTypesService.prototype.getById = function (id) {
        for (var _i = 0, _a = this.markerTypes; _i < _a.length; _i++) {
            var markerType = _a[_i];
            if (markerType.id == id) {
                return markerType;
            }
        }
        return undefined;
    };
    MarkerTypesService.prototype.getIcon = function (id) {
        var markerType = this.getById(id);
        return markerType.icon;
    };
    MarkerTypesService.prototype.getName = function (id) {
        var markerType = this.getById(id);
        return markerType.marker_type_name;
    };
    MarkerTypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarkerTypesService);
    return MarkerTypesService;
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    }
    MarkersService.prototype.getMarkers = function (options) {
        var types = options.types.join(',');
        return this.http.get('/markers?types=' + types)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (markers) {
            return markers;
        }));
    };
    MarkersService.prototype.getMarker = function (id) {
        return this.http.get('/markers/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (marker) {
            return marker;
        }));
    };
    MarkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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