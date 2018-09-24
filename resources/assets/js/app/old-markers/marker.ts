import { MarkerType } from "../old-marker-types/marker-type";

export class Marker {
    id: number;
    marker_name: string;
    map_region_id: number;
    x: number;
    y: number;
    z: number;
    source: string;
    marker_type_id: number;
    type: MarkerType;
    marker_category_id: number;
    marker_sub_category_id: number;

    constructor (marker: {
        id: number,
        marker_name: string,
        map_region_id: number,
        x: number,
        y: number,
        z: number,
        source: string,
        marker_type_id: number,
        type: MarkerType,
        marker_category_id: number,
        marker_sub_category_id: number
    }) {
        this.id = marker.id;
        this.marker_name = marker.marker_name;
        this.map_region_id = marker.map_region_id;
        this.x = marker.x;
        this.y = marker.y;
        this.z = marker.z;
        this.source = marker.source;
        this.marker_type_id = marker.marker_type_id;
        this.type = marker.type;
        this.marker_category_id = marker.marker_category_id;
        this.marker_sub_category_id = marker.marker_sub_category_id;
    }
}