System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoadScriptDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoadScriptDirective = (function () {
                function LoadScriptDirective(el) {
                    this.el = el.nativeElement;
                    console.log(this.el);
                    console.log(this.src);
                }
                __decorate([
                    core_1.Input('loadScriptDirective'), 
                    __metadata('design:type', String)
                ], LoadScriptDirective.prototype, "src", void 0);
                LoadScriptDirective = __decorate([
                    core_1.Directive({ selector: '[loadScriptDirective]' }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], LoadScriptDirective);
                return LoadScriptDirective;
            }());
            exports_1("LoadScriptDirective", LoadScriptDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbG9hZC1zY3JpcHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBTUksNkJBQVksRUFBYztvQkFFeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLENBQUM7Z0JBVEQ7b0JBQUMsWUFBSyxDQUFDLHFCQUFxQixDQUFDOztnRUFBQTtnQkFMakM7b0JBQUMsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxDQUFDOzt1Q0FBQTtnQkFnQmpELDBCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6ImRpcmVjdGl2ZXMvbG9hZC1zY3JpcHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvYWRTY3JpcHREaXJlY3RpdmVdJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9hZFNjcmlwdERpcmVjdGl2ZSB7XHJcbiAgICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdsb2FkU2NyaXB0RGlyZWN0aXZlJylzcmM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xyXG5cclxuICAgICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zcmMpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
