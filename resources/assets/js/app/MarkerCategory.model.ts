import { MarkerType } from "./MarkerType.model";

export class MarkerCategory {
    constructor(
        public id: number,
        public parent_category_id: number,
        public marker_category_name: string,
        public marker_types: MarkerType[] = [],
        public selected: boolean = false
    ) {}
}