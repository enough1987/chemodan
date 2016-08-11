import { provideRouter, RouterConfig } from '@angular/router';

import {StorageService} from "app/services/storage.service";


import {AppComponent} from "app/components/app/app.component";
import {TestComponent} from "app/components/test/test.component";
import {TestTwoComponent} from "app/components/test-two/test-two.component";

const routes: RouterConfig = [
  { path: '', name: 'start', component: AppComponent, useAsDefault: true },
  { path: 'test', component: TestComponent },
  { path: 'test-two', component: TestTwoComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];
