export class Marker {
    constructor(
        public id: number,
        public marker_type_id: number,
        public marker_name: string,
        public x: number,
        public y: number,
        public z: number,
        public marker_description?: string,
        public source?: string
    ) {}
}