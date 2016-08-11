import {Component} from '@angular/core';

import {StorageService} from "app/services/storage.service";

//import {DisplayItemComponent} from "app/components/display/display-item/display-item.component";

@Component({
    selector: 'display',
    template: `
    <h1> Go yanky : </h1>
 <!--    <p>{{ StorageService | json }}</p>  -->
        <ul>
            <li *ngFor="let item of StorageService.data">
               <!--<display-item [item]="item"></display-item>-->
               {{ item }}
            </li>
        </ul>
    `
    //styleUrls: ['app/components/new/new.component.css'],
    //providers: [StorageService]
    //directives: [DisplayItemComponent]
})
export class DisplayComponent {

    constructor(public StorageService: StorageService){
      console.log( this.StorageService );
    }

}
