import {Component} from '@angular/core';


import {HeaderComponent} from 'app/components/header/header.component';


@Component({
    selector: 'my-app',
    template: `
      <header-component></header-component>
    `,
    directives: [HeaderComponent]
})

export class AppComponent {

}
