import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'start-point',
    directives: [ROUTER_DIRECTIVES],
    template: `
      <router-outlet></router-outlet>
    `
})

export class StartPointComponent {}
