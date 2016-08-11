System.register(['@angular/core', "app/services/storage.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, storage_service_1;
    var DisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            //import {DisplayItemComponent} from "app/components/display/display-item/display-item.component";
            DisplayComponent = (function () {
                function DisplayComponent(StorageService) {
                    this.StorageService = StorageService;
                    console.log(this.StorageService);
                }
                DisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'display',
                        template: "\n    <h1> Go yanky : </h1>\n <!--    <p>{{ StorageService | json }}</p>  -->\n        <ul>\n            <li *ngFor=\"let item of StorageService.data\">\n               <!--<display-item [item]=\"item\"></display-item>-->\n               {{ item }}\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof storage_service_1.StorageService !== 'undefined' && storage_service_1.StorageService) === 'function' && _a) || Object])
                ], DisplayComponent);
                return DisplayComponent;
                var _a;
            }());
            exports_1("DisplayComponent", DisplayComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLGtHQUFrRztZQWtCbEc7Z0JBRUksMEJBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsa1NBU1Q7cUJBSUosQ0FBQzs7b0NBQUE7Z0JBT0YsdUJBQUM7O1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCwrQ0FNQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gXCJhcHAvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG4vL2ltcG9ydCB7RGlzcGxheUl0ZW1Db21wb25lbnR9IGZyb20gXCJhcHAvY29tcG9uZW50cy9kaXNwbGF5L2Rpc3BsYXktaXRlbS9kaXNwbGF5LWl0ZW0uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGlzcGxheScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPiBHbyB5YW5reSA6IDwvaDE+XHJcbiA8IS0tICAgIDxwPnt7IFN0b3JhZ2VTZXJ2aWNlIHwganNvbiB9fTwvcD4gIC0tPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIFN0b3JhZ2VTZXJ2aWNlLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgPCEtLTxkaXNwbGF5LWl0ZW0gW2l0ZW1dPVwiaXRlbVwiPjwvZGlzcGxheS1pdGVtPi0tPlxyXG4gICAgICAgICAgICAgICB7eyBpdGVtIH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIGBcclxuICAgIC8vc3R5bGVVcmxzOiBbJ2FwcC9jb21wb25lbnRzL25ldy9uZXcuY29tcG9uZW50LmNzcyddLFxyXG4gICAgLy9wcm92aWRlcnM6IFtTdG9yYWdlU2VydmljZV1cclxuICAgIC8vZGlyZWN0aXZlczogW0Rpc3BsYXlJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlzcGxheUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIFN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCB0aGlzLlN0b3JhZ2VTZXJ2aWNlICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
