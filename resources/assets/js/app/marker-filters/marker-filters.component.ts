import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-marker-filters',
    templateUrl: './marker-filters.component.html'
})
export class MarkerFiltersComponent {
    @Input() private selectedMarkerTypes: number[];

    @Output() selectedMarkerTypesChanged = new EventEmitter<number[]>();



    markerCategories: {id: number, selected: boolean}[] = [
        {id: 100, selected: true},
        {id: 498, selected: true},
        {id: 932, selected: true},
        {id: 2013, selected: true}
    ];

    toggleType(event) {
        const id = parseInt(event.target.value);
        const selectedTypes = [];

        for (let markerCategory of this.markerCategories) {
            if (markerCategory.id === id) {
                markerCategory.selected = !markerCategory.selected;
            }

            if (markerCategory.selected) {
                selectedTypes.push(markerCategory.id);
            }
        }

        this.selectedMarkerTypesChanged.emit(selectedTypes);
    }
}