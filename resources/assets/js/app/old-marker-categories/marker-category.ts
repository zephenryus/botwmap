export class MarkerCategory {
    id: number;
    name: string;
    children: MarkerCategory[];
    types: number[];
    selected: boolean;

    constructor(markerCategory: {
        id: number;
        name: string;
        children: MarkerCategory[];
        types: number[];
        selected?: boolean
    }) {
        this.id = markerCategory.id;
        this.name = markerCategory.name;
        this.children = markerCategory.children;
        this.types = markerCategory.types;
        this.selected = markerCategory.selected || false;
    }
}