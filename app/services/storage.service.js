System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var StorageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            StorageService = (function () {
                function StorageService(http) {
                    this.http = http;
                    this.data = [];
                }
                StorageService.prototype.getFormServer = function () {
                    return this.http.get('http://mixchemodan.ru/api/landing?token=guest')
                        .map(function (res) {
                        var data = res.json();
                        //console.log('getFormServer() got from http://mixchemodan.ru/api/landing?token=guest - ', data);
                        return data || {};
                    })
                        .catch(function (error) { console.error(error); });
                };
                StorageService.prototype.bookingServer = function (cart, buyer) {
                    var body = "cart=" + JSON.stringify(cart) + "&buyer=" + JSON.stringify(buyer);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://mixchemodan.ru/api/cart?token=guest', body, {
                        headers: headers
                    })
                        .map(function (res) {
                        var data = res.json();
                        //console.log('bookingServer() got from http://mixchemodan.ru/api/cart?token=guest - ', data);
                        return data || {};
                    })
                        .catch(function (error) { console.error(error); });
                };
                StorageService.prototype.callbackServer = function (buyer) {
                    var body = "buyer=" + JSON.stringify(buyer);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://mixchemodan.ru/api/cart?token=guest', body, {
                        headers: headers
                    })
                        .map(function (res) {
                        var data = res.json();
                        //console.log('bookingServer() got from http://mixchemodan.ru/api/cart?token=guest - ', data);
                        return data || {};
                    })
                        .catch(function (error) { console.error(error); });
                };
                StorageService.prototype.addItem = function (item) {
                    this.data = this.data.concat([item]);
                };
                StorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StorageService);
                return StorageService;
            }());
            exports_1("StorageService", StorageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUUsd0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGdkIsU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFFZ0IsQ0FBQztnQkFFbEMsc0NBQWEsR0FBYjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUM7eUJBQzlELEdBQUcsQ0FBQyxVQUFBLEdBQUc7d0JBQ04sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QixpR0FBaUc7d0JBRWpHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO29CQUNyQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFDRCxzQ0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7b0JBQ3ZCLElBQUksSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5RSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQ2hFLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQzt5QkFDRyxHQUFHLENBQUMsVUFBQSxHQUFHO3dCQUNOLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEIsOEZBQThGO3dCQUM5RixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztvQkFDckIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsdUNBQWMsR0FBZCxVQUFlLEtBQUs7b0JBQ2xCLElBQUksSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQ2hFLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQzt5QkFDRyxHQUFHLENBQUMsVUFBQSxHQUFHO3dCQUNOLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEIsOEZBQThGO3dCQUM5RixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztvQkFDckIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsZ0NBQU8sR0FBUCxVQUFRLElBQUk7b0JBQ1YsSUFBSSxDQUFDLElBQUksR0FBTyxJQUFJLENBQUMsSUFBSSxTQUFFLElBQUksRUFBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQWpESDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFvRGIscUJBQUM7WUFBRCxDQW5EQSxBQW1EQyxJQUFBO1lBbkRELDJDQW1EQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBkYXRhID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgZ2V0Rm9ybVNlcnZlcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvbGFuZGluZz90b2tlbj1ndWVzdCcpXHJcbiAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0Rm9ybVNlcnZlcigpIGdvdCBmcm9tIGh0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvbGFuZGluZz90b2tlbj1ndWVzdCAtICcsIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgeyB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpIH0pO1xyXG4gIH1cclxuICBib29raW5nU2VydmVyKGNhcnQsIGJ1eWVyKXtcclxuICAgIHZhciBib2R5ID0gXCJjYXJ0PVwiICsgSlNPTi5zdHJpbmdpZnkoY2FydCkgKyBcIiZidXllcj1cIiArIEpTT04uc3RyaW5naWZ5KGJ1eWVyKTtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvY2FydD90b2tlbj1ndWVzdCcsXHJcbiAgICAgIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYm9va2luZ1NlcnZlcigpIGdvdCBmcm9tIGh0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvY2FydD90b2tlbj1ndWVzdCAtICcsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCB7IH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5lcnJvcihlcnJvcikgfSk7XHJcbiAgfVxyXG4gIGNhbGxiYWNrU2VydmVyKGJ1eWVyKXtcclxuICAgIHZhciBib2R5ID0gXCJidXllcj1cIiArIEpTT04uc3RyaW5naWZ5KGJ1eWVyKTtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvY2FydD90b2tlbj1ndWVzdCcsXHJcbiAgICAgIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYm9va2luZ1NlcnZlcigpIGdvdCBmcm9tIGh0dHA6Ly9taXhjaGVtb2Rhbi5ydS9hcGkvY2FydD90b2tlbj1ndWVzdCAtICcsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCB7IH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5lcnJvcihlcnJvcikgfSk7XHJcbiAgfVxyXG4gIGFkZEl0ZW0oaXRlbSl7XHJcbiAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhLCBpdGVtXTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
