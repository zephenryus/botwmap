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

/***/ "./resources/assets/js/app/BinarySearchTree.ts":
/*!*****************************************************!*\
  !*** ./resources/assets/js/app/BinarySearchTree.ts ***!
  \*****************************************************/
/*! exports provided: BinarySearchTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinarySearchTree", function() { return BinarySearchTree; });
/* harmony import */ var _BinaryTreeNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryTreeNode */ "./resources/assets/js/app/BinaryTreeNode.ts");

var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(rootNode) {
        this.rootNode = rootNode;
    }
    BinarySearchTree.prototype.insert = function (key, value) {
        if (this.rootNode == undefined) {
            this.rootNode = new _BinaryTreeNode__WEBPACK_IMPORTED_MODULE_0__["BinaryTreeNode"](key, value);
        }
        else {
            this.rootNode.insert(new _BinaryTreeNode__WEBPACK_IMPORTED_MODULE_0__["BinaryTreeNode"](key, value));
        }
    };
    BinarySearchTree.prototype.lookup = function (key) {
        if (this.rootNode.key == key) {
            return this.rootNode;
        }
        else {
            return this.rootNode.lookup(key);
        }
    };
    BinarySearchTree.prototype.toString = function () {
        return this.rootNode.toString();
    };
    return BinarySearchTree;
}());



/***/ }),

/***/ "./resources/assets/js/app/BinaryTreeNode.ts":
/*!***************************************************!*\
  !*** ./resources/assets/js/app/BinaryTreeNode.ts ***!
  \***************************************************/
/*! exports provided: BinaryTreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryTreeNode", function() { return BinaryTreeNode; });
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(key, value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    BinaryTreeNode.prototype.insert = function (node) {
        if (node.key < this.key) {
            if (this.left == null) {
                this.left = node;
            }
            else {
                this.left.insert(node);
            }
        }
        else {
            if (this.right == null) {
                this.right = node;
            }
            else {
                this.right.insert(node);
            }
        }
    };
    BinaryTreeNode.prototype.lookup = function (key) {
        if (this.key == key) {
            return this;
        }
        else {
            if (key < this.key) {
                if (this.left == null) {
                    return null;
                }
                else {
                    return this.left.lookup(key);
                }
            }
            else {
                if (this.right == null) {
                    return null;
                }
                else {
                    return this.right.lookup(key);
                }
            }
        }
    };
    BinaryTreeNode.prototype.toString = function () {
        var left = (this.left)
            ? this.left.toString()
            : 'null';
        var right = (this.right)
            ? this.right.toString()
            : 'null';
        return "{key: " + this.key + ", value: " + this.value + ", left: " + left + ", right: " + right + "}";
    };
    return BinaryTreeNode;
}());



/***/ }),

/***/ "./resources/assets/js/app/Marker.model.ts":
/*!*************************************************!*\
  !*** ./resources/assets/js/app/Marker.model.ts ***!
  \*************************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
var Marker = /** @class */ (function () {
    function Marker(id, marker_type_id, marker_name, x, y, z, marker_description, source) {
        this.id = id;
        this.marker_type_id = marker_type_id;
        this.marker_name = marker_name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.marker_description = marker_description;
        this.source = source;
    }
    return Marker;
}());



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

module.exports = "<div id=\"app\">\r\n    <!--<div id=\"menu\"></div>-->\r\n\r\n    <!--<div id=\"search\"></div>-->\r\n\r\n    <app-marker-filters\r\n        [markerCategories]=\"markerCategories\"\r\n        [markerCategoriesIndex]=\"markerCategoriesIndex\"\r\n        [selectedMarkerTypes]=\"selectedMarkerTypes\"\r\n        (selectedMarkerTypesChanged)=\"onSelectedMarkerTypesChanged($event)\"\r\n    ></app-marker-filters>\r\n\r\n    <app-marker-details [selectedMarker]=\"selectedMarker\"></app-marker-details>\r\n\r\n    <app-map\r\n        [markerTypes]=\"markerTypes\"\r\n        [markerTypesIndex]=\"markerTypesIndex\"\r\n        [selectedMarkerTypes]=\"selectedMarkerTypes\"\r\n        [selectedMarker]=\"selectedMarker\"\r\n        (markerSelected)=\"onMarkerSelected($event)\"\r\n    ></app-map>\r\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _BinarySearchTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BinarySearchTree */ "./resources/assets/js/app/BinarySearchTree.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.markerTypesIndex = new _BinarySearchTree__WEBPACK_IMPORTED_MODULE_3__["BinarySearchTree"]();
        this.markerCategoriesIndex = new _BinarySearchTree__WEBPACK_IMPORTED_MODULE_3__["BinarySearchTree"]();
        this.selectedMarkerTypes = [1401];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/marker-types')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (markerTypes) {
            _this.markerTypes = markerTypes;
            _this.generateSearchTree(_this.markerTypesIndex, _this.markerTypes);
        }))
            .subscribe();
        this.http.get('/marker-categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (markerCategories) {
            _this.markerCategories = markerCategories;
            _this.generateSearchTree(_this.markerCategoriesIndex, _this.markerCategories);
        }))
            .subscribe();
    };
    AppComponent.prototype.onMarkerSelected = function (marker) {
        this.selectedMarker = marker;
    };
    AppComponent.prototype.onSelectedMarkerTypesChanged = function (selectedMarkerTypes) {
        this.selectedMarkerTypes = Object.assign([], selectedMarkerTypes);
    };
    AppComponent.prototype.generateSearchTree = function (binaryTree, terms) {
        var midpoint = Math.ceil(terms.length / 2);
        for (var index = 0; index < midpoint; index++) {
            binaryTree.insert(terms[midpoint - index].id, midpoint - index);
            if (midpoint - index !== midpoint + index) {
                binaryTree.insert(terms[midpoint + index].id, midpoint + index);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./resources/assets/js/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./resources/assets/js/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./resources/assets/js/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./resources/assets/js/app/map/map.component.ts");
/* harmony import */ var _marker_filters_marker_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marker-filters/marker-filters.component */ "./resources/assets/js/app/marker-filters/marker-filters.component.ts");
/* harmony import */ var _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marker-details/marker-details.component */ "./resources/assets/js/app/marker-details/marker-details.component.ts");
/* harmony import */ var _markers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markers.service */ "./resources/assets/js/app/markers.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _marker_filters_marker_filters_component__WEBPACK_IMPORTED_MODULE_5__["MarkerFiltersComponent"],
                _marker_details_marker_details_component__WEBPACK_IMPORTED_MODULE_6__["MarkerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _markers_service__WEBPACK_IMPORTED_MODULE_7__["MarkersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.js */ "./node_modules/leaflet/dist/leaflet.js");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _markers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markers.service */ "./resources/assets/js/app/markers.service.ts");
/* harmony import */ var _Marker_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Marker.model */ "./resources/assets/js/app/Marker.model.ts");
/* harmony import */ var _BinarySearchTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BinarySearchTree */ "./resources/assets/js/app/BinarySearchTree.ts");
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
    function MapComponent(markersService) {
        this.markersService = markersService;
        this.previousSelectedMarkerTypes = [];
        this.markerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMapGenerated = false;
        this.mapLayers = {};
    }
    MapComponent.prototype.ngOnInit = function () {
        this.generateMap();
    };
    MapComponent.prototype.generateMap = function () {
        var _this = this;
        if (!this.isMapGenerated) {
            this.map = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
                crs: leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["CRS"].Simple,
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
            this.map.setMaxBounds(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"](this.map.unproject([-62.5, 437.5], 0), this.map.unproject([437.5, -62.5], 0)));
            leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('../hyrule/{z}/{y}/{x}.png', {
                tileSize: 375
            }).addTo(this.map);
        }
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('selectedMarkerTypes')) {
            this.selectedMarkerTypesChanged(changes.selectedMarkerTypes);
        }
    };
    MapComponent.prototype.selectedMarkerTypesChanged = function (values) {
        var _this = this;
        if (!values.firstChange) {
            var added = values.currentValue.filter(function (item) { return _this.previousSelectedMarkerTypes.indexOf(item) < 0; });
            var removed = this.previousSelectedMarkerTypes.filter(function (item) { return values.currentValue.indexOf(item) < 0; });
            if (added.length > 0) {
                this.markersService.getByType(added).subscribe(function (markers) {
                    _this.addMarkers(markers);
                });
            }
            if (removed.length > 0) {
                this.removeMarkers(removed);
            }
        }
        else {
            this.markersService.getByType(values.currentValue).subscribe(function (markers) {
                _this.addMarkers(markers);
            });
        }
        this.previousSelectedMarkerTypes = Object.assign([], this.selectedMarkerTypes);
    };
    MapComponent.prototype.addMarkers = function (markers) {
        var _this = this;
        if (markers !== null) {
            for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
                var marker = markers_1[_i];
                if (!this.mapLayers.hasOwnProperty(marker.marker_type_id.toString())) {
                    this.mapLayers[marker.marker_type_id.toString()] = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]();
                }
                var markerTypeGroup = this.mapLayers[marker.marker_type_id.toString()];
                if (this.selectedMarkerTypes.includes(marker.marker_type_id)) {
                    var markerTypeId = (this.markerTypesIndex.lookup(marker.marker_type_id)).value;
                    var markerType = this.markerTypes[markerTypeId];
                    var newMarker = leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["marker"]([
                        -this.normalizeCoord(marker.z),
                        this.normalizeCoord(marker.x)
                    ], {
                        icon: leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                            iconUrl: markerType.icon,
                            iconSize: [32, 32]
                        }),
                        title: marker.marker_name,
                        zIndexOffset: Math.floor(marker.y),
                    })
                        .on('click', function (event) {
                        _this.showMarkerDetails(event.target);
                    });
                    newMarker.markerId = marker.id;
                    newMarker.layerId = marker.marker_type_id;
                    markerTypeGroup.addLayer(newMarker);
                }
                this.map.addLayer(markerTypeGroup);
            }
        }
    };
    MapComponent.prototype.normalizeCoord = function (coord) {
        return (coord + 6000) * 0.03125;
    };
    MapComponent.prototype.showMarkerDetails = function (target) {
        var _this = this;
        this.markersService.getById(target.markerId).subscribe(function (marker) {
            _this.selectedMarker = marker;
            _this.markerSelected.emit(marker);
            _this.map.panTo([
                -_this.normalizeCoord(marker.z),
                _this.normalizeCoord(marker.x)
            ]);
        });
    };
    MapComponent.prototype.removeMarkers = function (removed) {
        for (var _i = 0, removed_1 = removed; _i < removed_1.length; _i++) {
            var layerId = removed_1[_i];
            if (this.map.hasLayer(this.mapLayers[layerId.toString()])) {
                this.mapLayers[layerId.toString()].clearLayers();
                this.map.removeLayer(this.mapLayers[layerId.toString()]);
                delete this.mapLayers[layerId.toString()];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "markerTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _BinarySearchTree__WEBPACK_IMPORTED_MODULE_4__["BinarySearchTree"])
    ], MapComponent.prototype, "markerTypesIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "selectedMarkerTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Marker_model__WEBPACK_IMPORTED_MODULE_3__["Marker"])
    ], MapComponent.prototype, "selectedMarker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "markerSelected", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./resources/assets/js/app/map/map.component.html")
        }),
        __metadata("design:paramtypes", [_markers_service__WEBPACK_IMPORTED_MODULE_2__["MarkersService"]])
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

module.exports = "<aside id=\"marker-details\" *ngIf=\"selectedMarker\">\r\n    <div id=\"marker-details-close-wrapper\">\r\n        <button class=\"btn btn-secondary\" id=\"marker-details-close\" (click)=\"closeDialog()\">\r\n            <img src=\"/images/icons/markers/close.svg\" alt=\"\">\r\n        </button>\r\n    </div>\r\n\r\n    <div id=\"marker-details-wrapper\">\r\n        <h3>{{ selectedMarker.marker_name }}</h3>\r\n\r\n        <p>{{ selectedMarker.marker_description }}</p>\r\n\r\n        <div class=\"marker-meta\">\r\n            <small>\r\n                <div>&lt;{{ selectedMarker.x }}, {{ selectedMarker.y }}, {{ selectedMarker.z }}&gt;</div>\r\n                <div>Marker ID: {{ selectedMarker.id }}</div>\r\n                <div>Source: {{ selectedMarker.source }}</div>\r\n            </small>\r\n        </div>\r\n    </div>\r\n</aside>"

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
/* harmony import */ var _Marker_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Marker.model */ "./resources/assets/js/app/Marker.model.ts");
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
    function MarkerDetailsComponent() {
        this.selectedMarker = null;
    }
    MarkerDetailsComponent.prototype.closeDialog = function () {
        this.selectedMarker = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Marker_model__WEBPACK_IMPORTED_MODULE_1__["Marker"])
    ], MarkerDetailsComponent.prototype, "selectedMarker", void 0);
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

module.exports = "<div id=\"marker-filters\" [ngClass]=\"{'is-open': isOpen}\">\r\n    <div id=\"markers-filter-wrapper\">\r\n        <div class=\"container-fluid\" *ngIf=\"isOpen\">\r\n            <main>\r\n                <div class=\"custom-control custom-checkbox\" *ngFor=\"let markerCategory of markerCategories\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"marker-type-{{ markerCategory.id }}\"\r\n                           name=\"marker-type-{{ markerCategory.id }}\"\r\n                           (change)=\"toggleType($event)\" [value]=\"markerCategory.id\" [checked]=\"markerCategory.selected\">\r\n                    <label class=\"custom-control-label\" for=\"marker-type-{{ markerCategory.id }}\">{{ markerCategory.marker_category_name }}</label>\r\n                </div>\r\n            </main>\r\n        </div>\r\n\r\n        <div id=\"marker-filter-toggle\">\r\n            <button class=\"btn btn-primary\" (click)=\"toggleDialog()\">\r\n                <img src=\"/images/icons/markers/markers.svg\" *ngIf=\"!isOpen\" alt=\"\">\r\n                <img src=\"/images/icons/markers/close.svg\" *ngIf=\"isOpen\" alt=\"\">\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _BinarySearchTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BinarySearchTree */ "./resources/assets/js/app/BinarySearchTree.ts");
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
        this.isOpen = false;
    }
    MarkerFiltersComponent.prototype.toggleType = function (event) {
        var index = (this.markerCategoriesIndex.lookup(parseInt(event.target.value))).value;
        this.markerCategories[index].selected = !this.markerCategories[index].selected;
        var selectedTypes = this.selectedMarkerTypes;
        for (var _i = 0, _a = this.markerCategories[index].marker_types; _i < _a.length; _i++) {
            var markerType = _a[_i];
            if (this.markerCategories[index].selected) {
                if (!selectedTypes.includes(markerType.id)) {
                    selectedTypes.push(markerType.id);
                }
            }
            else {
                if (selectedTypes.includes(markerType.id)) {
                    selectedTypes.splice(selectedTypes.indexOf(markerType.id), 1);
                }
            }
        }
        this.selectedMarkerTypesChanged.emit(selectedTypes);
    };
    MarkerFiltersComponent.prototype.toggleDialog = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MarkerFiltersComponent.prototype, "markerCategories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _BinarySearchTree__WEBPACK_IMPORTED_MODULE_1__["BinarySearchTree"])
    ], MarkerFiltersComponent.prototype, "markerCategoriesIndex", void 0);
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

/***/ "./resources/assets/js/app/markers.service.ts":
/*!****************************************************!*\
  !*** ./resources/assets/js/app/markers.service.ts ***!
  \****************************************************/
/*! exports provided: MarkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkersService", function() { return MarkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    MarkersService.prototype.getByType = function (types) {
        var typeString = types.join(',');
        return this.http.get('/markers?type=' + typeString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (markers) {
            return markers;
        }));
    };
    MarkersService.prototype.getById = function (id) {
        return this.http.get('/markers/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (marker) {
            return marker;
        }));
    };
    MarkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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