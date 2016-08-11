///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

// NO ERROR 
import {enableProdMode} from "@angular/core";
enableProdMode();

//import {AppRouterProviders} from 'app/routes';

import {StorageService} from "app/services/storage.service";

//import {StartPointComponent} from "app/components/global/start-point.component";
//import {AppComponent} from "app/components/app/app.component";
import {HeaderComponent} from 'app/components/header/header.component';

/*
bootstrap(StartPointComponent, [
  HTTP_PROVIDERS,
  AppRouterProviders,
  StorageService
]).
*/
bootstrap(HeaderComponent, [
  HTTP_PROVIDERS,
  StorageService
]).
catch(err => console.error(err))
