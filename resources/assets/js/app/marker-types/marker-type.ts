export class MarkerType {
    id: number;
    marker_type_name: string;
    marker_type_slug: string;
    icon: string;
    marker_type_description: string;
    selected: boolean;

    constructor(markerType: {
        id: number,
        marker_type_name: string,
        marker_type_slug: string,
        icon: string,
        marker_type_description: string,
        selected?: boolean
    }) {
        this.id = markerType.id;
        this.marker_type_name = markerType.marker_type_name;
        this.marker_type_slug = markerType.marker_type_slug;
        this.icon = markerType.icon;
        this.marker_type_description = markerType.marker_type_description;
        this.selected = markerType.selected || false;
    }
}