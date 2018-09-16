import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-marker-type',
    templateUrl: './marker-type.component.html'
})
export class MarkerTypeComponent {
    @Input() markerTypes: object[];
}