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
    var NgIfPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgIfPipe = (function () {
                function NgIfPipe() {
                }
                NgIfPipe.prototype.transform = function (value, args) {
                    //console.log( value, args );
                    var arr = [];
                    if (typeof value == "object") {
                        for (var p in value) {
                            if (value[p].products && value[p].products.length) {
                                arr.push(value[p]);
                                console.log(value[p]);
                            }
                        }
                    }
                    console.log(arr);
                    return arr;
                };
                NgIfPipe = __decorate([
                    core_1.Pipe({ name: 'ngIf' }), 
                    __metadata('design:paramtypes', [])
                ], NgIfPipe);
                return NgIfPipe;
            }());
            exports_1("NgIfPipe", NgIfPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL25nSWYucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQWZDLDRCQUFTLEdBQVQsVUFBVyxLQUFLLEVBQUUsSUFBSTtvQkFFcEIsNkJBQTZCO29CQUM3QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ2IsRUFBRSxDQUFBLENBQUUsT0FBTyxLQUFLLElBQUksUUFBUyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFDLElBQUksS0FBTSxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsRUFBRSxDQUFBLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7NEJBQzFCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7b0JBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFoQkg7b0JBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzs0QkFBQTtnQkFpQnZCLGVBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELCtCQWdCQyxDQUFBIiwiZmlsZSI6InBpcGVzL25nSWYucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQFBpcGUoeyBuYW1lOiAnbmdJZicgfSlcclxuZXhwb3J0IGNsYXNzIE5nSWZQaXBlIHtcclxuICB0cmFuc2Zvcm0gKHZhbHVlLCBhcmdzKSB7XHJcbiAgIFxyXG4gICAgLy9jb25zb2xlLmxvZyggdmFsdWUsIGFyZ3MgKTtcclxuICAgIHZhciBhcnIgPSBbXTtcclxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiApIHtcclxuICAgICAgZm9yICggdmFyIHAgaW4gdmFsdWUgKSB7XHJcbiAgICAgICAgaWYoIHZhbHVlW3BdLnByb2R1Y3RzICYmIHZhbHVlW3BdLnByb2R1Y3RzLmxlbmd0aCApIHtcclxuICAgICAgICAgIGFyci5wdXNoKCB2YWx1ZVtwXSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coIHZhbHVlW3BdICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyggYXJyICk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
