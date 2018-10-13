import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MarkerCategory } from "../../MarkerCategory.model";

@Component({
    selector: 'app-marker-filter',
    templateUrl: './marker-filter.component.html'
})
export class MarkerFilterComponent {
    @Input() markerCategories: {category: MarkerCategory, children: MarkerCategory[]}[];
    @Output() categorySelected = new EventEmitter<any>();

    toggleType(selectedCategory: {category: MarkerCategory, children: MarkerCategory[]}) {
        console.log(selectedCategory);
    }

    toggleChildren(categories, isSelected = true) {
        console.log(categories);

        const returnCategories = [];

        for (let category of categories) {
            category.category.selected = isSelected;
            returnCategories.push(category.category);

            if (category.children.length > 0) {
                let categoryChildren = this.toggleChildren(category.children);
                for (let categoryChild of categoryChildren) {
                    returnCategories.push(categoryChild.category);
                }
            }
        }

        return returnCategories;
    }

    onCategorySelected(selectedCategory) {
        this.toggleType(selectedCategory);
    }
}