import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { MarkerCategory } from "../MarkerCategory.model";
import { BinarySearchTree } from "../BinarySearchTree";

@Component({
    selector: 'app-marker-filters',
    templateUrl: './marker-filters.component.html'
})
export class MarkerFiltersComponent implements OnChanges {
    @Input() markerCategories: MarkerCategory[];
    @Input() markerCategoriesIndex: BinarySearchTree;
    private markerCategoryTreeMade = false;
    public markerCategoryTree: MarkerCategory[];

    @Input() private selectedMarkerTypes: number[];

    @Output() selectedMarkerTypesChanged = new EventEmitter<number[]>();

    public korokLocation = {
        types: [3],
        selected: false
    };
    public divineBeasts = {
        types: [6],
        selected: false
    };
    public shrines = {
        types: [4],
        selected: false
    };
    public stables = {
        types: [8],
        selected: false
    };
    public towers = {
        types: [10],
        selected: false
    };

    public isOpen = true;

    mainChanged(categories) {
        console.log(categories);
        // this.selectedMarkerTypesChanged.emit(category.id);
    }

    toggleType(category) {
        category.selected = !category.selected;
        // const index = (this.markerCategoriesIndex.lookup(parseInt(event.target.value))).value;
        // this.markerCategories[index].selected = !this.markerCategories[index].selected;
        // const selectedTypes = this.selectedMarkerTypes;
        //
        // for (let markerType of this.markerCategories[index].marker_types) {
        //     if (this.markerCategories[index].selected) {
        //         if (!selectedTypes.includes(markerType.id)) {
        //             selectedTypes.push(markerType.id);
        //         }
        //     } else {
        //         if (selectedTypes.includes(markerType.id)) {
        //             selectedTypes.splice(selectedTypes.indexOf(markerType.id), 1);
        //         }
        //     }
        // }

        if (category.selected) {
            console.log(category.types);
            this.selectedMarkerTypesChanged.emit(category.types);
        }
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
    }

    makeCategoryTree() {
        if (this.markerCategories == undefined) {
            return;
        }

        this.markerCategoryTree = this.getChildCategories(null);

        console.log(this.markerCategoryTree);

        this.markerCategoryTreeMade = true;
    }

    ngOnChanges() {
        if (!this.markerCategoryTreeMade) {
            this.makeCategoryTree();
        }
    }

    private getChildCategories(parentId: number) {
        const children = [];

        for (let markerCategory of this.markerCategories) {
            if (markerCategory.parent_category_id == parentId) {
                children.push({
                    category: markerCategory,
                    children: this.getChildCategories(markerCategory.id)
                })
            }
        }

        return children;
    }
}