import {Component} from '@angular/core';

import {StorageService} from "app/services/storage.service"

@Component({
    selector: 'new',
    template: `
        <h1 class="new">New app component</h1>
        <input #inputElem />
        <input (click)="StorageService.addItem(inputElem.value)"
        type='button' value="click" />

    `,
    styleUrls: ['app/components/new/new.component.css']
    //providers: [StorageService]
})
export class NewComponent {

    constructor(public StorageService: StorageService){}

}
