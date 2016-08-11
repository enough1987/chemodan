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
    var NewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            NewComponent = (function () {
                function NewComponent(StorageService) {
                    this.StorageService = StorageService;
                }
                NewComponent = __decorate([
                    core_1.Component({
                        selector: 'new',
                        template: "\n        <h1 class=\"new\">New app component</h1>\n        <input #inputElem />\n        <input (click)=\"StorageService.addItem(inputElem.value)\"\n        type='button' value=\"click\" />\n\n    ",
                        styleUrls: ['app/components/new/new.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof storage_service_1.StorageService !== 'undefined' && storage_service_1.StorageService) === 'function' && _a) || Object])
                ], NewComponent);
                return NewComponent;
                var _a;
            }());
            exports_1("NewComponent", NewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmV3L25ldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBRUksc0JBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7Z0JBQUUsQ0FBQztnQkFkeEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixRQUFRLEVBQUUsd01BTVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7cUJBRXRELENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDOztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL25ldy9uZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSBcImFwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25ldycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMSBjbGFzcz1cIm5ld1wiPk5ldyBhcHAgY29tcG9uZW50PC9oMT5cclxuICAgICAgICA8aW5wdXQgI2lucHV0RWxlbSAvPlxyXG4gICAgICAgIDxpbnB1dCAoY2xpY2spPVwiU3RvcmFnZVNlcnZpY2UuYWRkSXRlbShpbnB1dEVsZW0udmFsdWUpXCJcclxuICAgICAgICB0eXBlPSdidXR0b24nIHZhbHVlPVwiY2xpY2tcIiAvPlxyXG5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL2NvbXBvbmVudHMvbmV3L25ldy5jb21wb25lbnQuY3NzJ11cclxuICAgIC8vcHJvdmlkZXJzOiBbU3RvcmFnZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBTdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2Upe31cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
