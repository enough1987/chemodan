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
    var DerpPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
              # Description:
            
              Repackages an array subset as a new array.
            
              **Reasoning:**
            
              Angular2's change checker freaks out when you ngFor an array that's a subset
                of a larger data structure.
            
              # Usage:
              ``
              <div *ng-for="#value of arrayOfObjects | derp"> </div>
              ``
            */
            DerpPipe = (function () {
                function DerpPipe() {
                }
                DerpPipe.prototype.transform = function (value, args) {
                    var arr = [];
                    if (typeof value == "object") {
                        for (var p in value) {
                            arr.push(value[p]);
                        }
                    }
                    return arr;
                };
                DerpPipe = __decorate([
                    core_1.Pipe({ name: 'derp' }), 
                    __metadata('design:paramtypes', [])
                ], DerpPipe);
                return DerpPipe;
            }());
            exports_1("DerpPipe", DerpPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2RlcnAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBOzs7Ozs7Ozs7Ozs7OztjQWNFO1lBRUY7Z0JBQUE7Z0JBV0EsQ0FBQztnQkFWQyw0QkFBUyxHQUFULFVBQVcsS0FBSyxFQUFFLElBQUk7b0JBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztvQkFDYixFQUFFLENBQUEsQ0FBRSxPQUFPLEtBQUssSUFBSSxRQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsSUFBSSxLQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixHQUFHLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO3dCQUN2QixDQUFDO29CQUNILENBQUM7b0JBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQVhIO29CQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7NEJBQUE7Z0JBWXZCLGVBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELCtCQVdDLENBQUEiLCJmaWxlIjoicGlwZXMvZGVycC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qXHJcbiAgIyBEZXNjcmlwdGlvbjpcclxuXHJcbiAgUmVwYWNrYWdlcyBhbiBhcnJheSBzdWJzZXQgYXMgYSBuZXcgYXJyYXkuXHJcblxyXG4gICoqUmVhc29uaW5nOioqXHJcblxyXG4gIEFuZ3VsYXIyJ3MgY2hhbmdlIGNoZWNrZXIgZnJlYWtzIG91dCB3aGVuIHlvdSBuZ0ZvciBhbiBhcnJheSB0aGF0J3MgYSBzdWJzZXRcclxuICAgIG9mIGEgbGFyZ2VyIGRhdGEgc3RydWN0dXJlLlxyXG5cclxuICAjIFVzYWdlOlxyXG4gIGBgXHJcbiAgPGRpdiAqbmctZm9yPVwiI3ZhbHVlIG9mIGFycmF5T2ZPYmplY3RzIHwgZGVycFwiPiA8L2Rpdj5cclxuICBgYFxyXG4qL1xyXG5AUGlwZSh7IG5hbWU6ICdkZXJwJyB9KVxyXG5leHBvcnQgY2xhc3MgRGVycFBpcGUge1xyXG4gIHRyYW5zZm9ybSAodmFsdWUsIGFyZ3MpIHtcclxuICAgIHZhciBhcnIgPSBbXTtcclxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiApIHtcclxuICAgICAgZm9yICggdmFyIHAgaW4gdmFsdWUgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goIHZhbHVlW3BdICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
