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

module.exports = "<div id=\"app\">\r\n    <!--<div id=\"menu\"></div>-->\r\n\r\n    <!--<div id=\"search\"></div>-->\r\n\r\n    <app-marker-filters\r\n        [selectedMarkerTypes]=\"selectedMarkerTypes\"\r\n        (selectedMarkerTypesChanged)=\"onSelectedMarkerTypesChanged($event)\"\r\n    ></app-marker-filters>\r\n\r\n    <!--<app-marker-details></app-marker-details>-->\r\n\r\n    <app-map\r\n        [selectedMarkerTypes]=\"selectedMarkerTypes\"\r\n        [selectedMarker]=\"selectedMarker\"\r\n        (markerSelected)=\"onMarkerSelected($event)\"\r\n    ></app-map>\r\n</div>"

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
        this.selectedMarkerTypes = [100, 498, 932, 2013];
    }
    AppComponent.prototype.onMarkerSelected = function (event) {
        console.log(event);
    };
    AppComponent.prototype.onSelectedMarkerTypesChanged = function (selectedMarkerTypes) {
        this.selectedMarkerTypes = selectedMarkerTypes;
    };
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./resources/assets/js/app/map/map.component.ts");
/* harmony import */ var _marker_filters_marker_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marker-filters/marker-filters.component */ "./resources/assets/js/app/marker-filters/marker-filters.component.ts");
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
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _marker_filters_marker_filters_component__WEBPACK_IMPORTED_MODULE_5__["MarkerFiltersComponent"],
                _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_6__["MarkerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./resources/assets/js/app/map/map.component.html":
/*!********************************************************!*\
  !*** ./resources/assets/js/app/map/map.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>"

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
/* harmony import */ var _marker_marker_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marker/marker.model */ "./resources/assets/js/app/marker/marker.model.ts");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.js */ "./node_modules/leaflet/dist/leaflet.js");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__);
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
    function MapComponent() {
        // @Output() markerSelected: any;
        this.isMapGenerated = false;
        this.mapLayers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.generateMap();
    };
    MapComponent.prototype.generateMap = function () {
        var _this = this;
        if (!this.isMapGenerated) {
            this.map = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
                crs: leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__["CRS"].Simple,
                continuousWorld: false,
                noWrap: true,
                minZoom: 0,
                maxZoom: 6,
                maxBoundsViscosity: 0.75,
                zoomControl: false
            })
                .on('load', function () {
                _this.isMapGenerated = true;
            })
                .setView([-245.7, 156.25])
                .setZoom(4);
            this.map.setMaxBounds(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"](this.map.unproject([-62.5, 437.5], 0), this.map.unproject([437.5, -62.5], 0)));
            leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes.hasOwnProperty('selectedMarkerTypes')) {
            this.selectedMarkersChanged(changes.selectedMarkerTypes);
        }
    };
    MapComponent.prototype.selectedMarkersChanged = function (values) {
        if (!values.firstChange) {
            var added = values.currentValue.filter(function (item) { return values.previousValue.indexOf(item) < 0; });
            var removed = values.previousValue.filter(function (item) { return values.currentValue.indexOf(item) < 0; });
            console.log(added, removed);
        }
        else {
            console.log(values.currentValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "selectedMarkerTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _marker_marker_model__WEBPACK_IMPORTED_MODULE_1__["Marker"])
    ], MapComponent.prototype, "selectedMarker", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./resources/assets/js/app/map/map.component.html")
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-details/marker-details.component.html":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/app/marker-details/marker-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>marker details working!</p>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MarkerDetailsComponent = /** @class */ (function () {
    function MarkerDetailsComponent() {
    }
    MarkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marker-details',
            template: __webpack_require__(/*! ./marker-details.component.html */ "./resources/assets/js/app/marker-details/marker-details.component.html")
        })
    ], MarkerDetailsComponent);
    return MarkerDetailsComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker-filters/marker-filters.component.html":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/app/marker-filters/marker-filters.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"marker-filters\">\r\n    <div class=\"custom-control custom-checkbox\" *ngFor=\"let markerCategory of markerCategories\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"marker-type-{{ markerCategory.id }}\" name=\"marker-type-{{ markerCategory.id }}\" (change)=\"toggleType($event)\" [value]=\"markerCategory.id\" [checked]=\"markerCategory.selected\">\r\n        <label class=\"custom-control-label\" for=\"marker-type-{{ markerCategory.id }}\">{{ markerCategory.id }}</label>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./resources/assets/js/app/marker-filters/marker-filters.component.ts":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/app/marker-filters/marker-filters.component.ts ***!
  \****************************************************************************/
/*! exports provided: MarkerFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerFiltersComponent", function() { return MarkerFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarkerFiltersComponent = /** @class */ (function () {
    function MarkerFiltersComponent() {
        this.selectedMarkerTypesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markerCategories = [
            { id: 100, selected: true },
            { id: 498, selected: true },
            { id: 932, selected: true },
            { id: 2013, selected: true }
        ];
    }
    MarkerFiltersComponent.prototype.toggleType = function (event) {
        var id = parseInt(event.target.value);
        var selectedTypes = [];
        for (var _i = 0, _a = this.markerCategories; _i < _a.length; _i++) {
            var markerCategory = _a[_i];
            if (markerCategory.id === id) {
                markerCategory.selected = !markerCategory.selected;
            }
            if (markerCategory.selected) {
                selectedTypes.push(markerCategory.id);
            }
        }
        this.selectedMarkerTypesChanged.emit(selectedTypes);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MarkerFiltersComponent.prototype, "selectedMarkerTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MarkerFiltersComponent.prototype, "selectedMarkerTypesChanged", void 0);
    MarkerFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marker-filters',
            template: __webpack_require__(/*! ./marker-filters.component.html */ "./resources/assets/js/app/marker-filters/marker-filters.component.html")
        })
    ], MarkerFiltersComponent);
    return MarkerFiltersComponent;
}());



/***/ }),

/***/ "./resources/assets/js/app/marker/marker.model.ts":
/*!********************************************************!*\
  !*** ./resources/assets/js/app/marker/marker.model.ts ***!
  \********************************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
var Marker = /** @class */ (function () {
    function Marker(id, markerTypeId, markerName, x, y, z, markerDescription, source) {
    }
    return Marker;
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