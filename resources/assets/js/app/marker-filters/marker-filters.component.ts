import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MarkerCategory } from "../MarkerCategory.model";
import { BinarySearchTree } from "../BinarySearchTree";

@Component({
    selector: 'app-marker-filters',
    templateUrl: './marker-filters.component.html'
})
export class MarkerFiltersComponent {
    @Input() markerCategories: MarkerCategory[];
    @Input() markerCategoriesIndex: BinarySearchTree;

    @Input() private selectedMarkerTypes: number[];

    @Output() selectedMarkerTypesChanged = new EventEmitter<number[]>();

    public isOpen = false;

    toggleType(event) {
        const index = (this.markerCategoriesIndex.lookup(parseInt(event.target.value))).value;
        this.markerCategories[index].selected = !this.markerCategories[index].selected;
        const selectedTypes = this.selectedMarkerTypes;

        for (let markerType of this.markerCategories[index].marker_types) {
            if (this.markerCategories[index].selected) {
                if (!selectedTypes.includes(markerType.id)) {
                    selectedTypes.push(markerType.id);
                }
            } else {
                if (selectedTypes.includes(markerType.id)) {
                    selectedTypes.splice(selectedTypes.indexOf(markerType.id), 1);
                }
            }
        }

        this.selectedMarkerTypesChanged.emit(selectedTypes);
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
    }
}