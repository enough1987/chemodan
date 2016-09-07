System.register(['@angular/core', "app/services/storage.service", "app/pipes/derp.pipe"], function(exports_1, context_1) {
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
    var core_1, storage_service_1, derp_pipe_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            },
            function (derp_pipe_1_1) {
                derp_pipe_1 = derp_pipe_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(storageService) {
                    var _this = this;
                    this.storageService = storageService;
                    this.data = [];
                    this.showed_items = [];
                    this.detail_item = [];
                    this.detail_idx = 1;
                    this.show_detail_item = false;
                    this.pageYOffset = 20;
                    this.detail_item_images = [];
                    this.detail_item_image_main = '../img/category-1.png';
                    this.detail_item_image_idx = 0;
                    this.active_idx = 0;
                    this.buyer = {};
                    this.cart = [];
                    storageService.getFormServer()
                        .subscribe(function (res) {
                        _this.data = res;
                        _this.showed_items = _this.data.products[0];
                        console.log('this.data ', _this.data);
                    });
                    this.cart = JSON.parse(window.localStorage.getItem("cart")) ?
                        JSON.parse(window.localStorage.getItem("cart")) : [];
                    this.buyer = JSON.parse(window.localStorage.getItem("buyer")) ?
                        JSON.parse(window.localStorage.getItem("buyer")) : [];
                }
                HeaderComponent.prototype.console = function (log) {
                    console.log(log);
                };
                HeaderComponent.prototype.show_cart_func = function () {
                    console.log(" showing cart ");
                    this.show_cart_modal = true;
                };
                HeaderComponent.prototype.close_cart_func = function () {
                    console.log(" close cart ");
                    this.show_cart_modal = false;
                };
                HeaderComponent.prototype.delete_cart_item_func = function (id) {
                    for (var i in this.cart) {
                        if (this.cart[i].id == id) {
                            this.cart.splice(i, 1);
                            window.localStorage.setItem('cart', JSON.stringify(this.cart));
                        }
                    }
                };
                HeaderComponent.prototype.change_amount_price = function (item, addition) {
                    item.amount ? '' : item.amount = 1;
                    //console.log('amount ', item.amount);
                    if (addition) {
                        item.amount++;
                    }
                    else {
                        item.amount != 1 ? item.amount-- : '';
                    }
                };
                HeaderComponent.prototype.booking = function () {
                    var _this = this;
                    if (this.check_buyer()) {
                        this.phone_is_needed = true;
                        return false;
                    }
                    this.storageService.bookingServer(this.cart, this.buyer)
                        .subscribe(function (res) {
                        _this.booking_in_use = res;
                        console.log('this.booking_in_use ', _this.booking_in_use);
                        _this.phone_is_needed = false;
                        _this.save_buyer();
                        _this.close_detail();
                        _this.close_cart_func();
                        _this.anchor_down('third_down_scroll');
                        _this.show_modal('Заказ оформлен, мы вам перезвоним в ближайшее время');
                    });
                };
                HeaderComponent.prototype.check_buyer = function () {
                    if (!this.buyer || !this.buyer.phone) {
                        return true;
                    }
                    if (!/^[0-9]{5,20}$/.test(this.buyer.phone)) {
                        return true;
                    }
                    console.log(' t t t ');
                };
                HeaderComponent.prototype.add_to_cart = function (detail_item, buyer) {
                    if (detail_item) {
                        if (!this.check_detail_item_copy(detail_item)) {
                            this.cart.push(detail_item);
                            window.localStorage.setItem('cart', JSON.stringify(this.cart));
                        }
                    }
                    this.save_buyer();
                    this.close_detail();
                    console.log('cart', this.cart);
                    this.anchor_up();
                    this.show_cart_func();
                };
                HeaderComponent.prototype.check_detail_item_copy = function (item) {
                    for (var i in this.cart) {
                        if (this.cart[i].id == item.id) {
                            console.log('item was added');
                            return true;
                        }
                    }
                };
                HeaderComponent.prototype.save_buyer = function () {
                    if (this.buyer && this.buyer.phone) {
                        var arr = {};
                        arr['name'] = this.buyer.name || '';
                        arr['phone'] = this.buyer.phone;
                        arr['email'] = this.buyer.email || '';
                        window.localStorage.setItem('buyer', JSON.stringify(arr));
                        //console.log( 'JSON.stringify(arr)', JSON.stringify(arr) );
                        //console.log( 'arr', arr );
                        return true;
                    }
                    return false;
                };
                HeaderComponent.prototype.show_hide_ckallback_funk = function () {
                    this.show_callback = !this.show_callback;
                };
                HeaderComponent.prototype.want_call = function () {
                    var _this = this;
                    if (!this.save_buyer()) {
                        this.phone_is_needed = true;
                    }
                    else {
                        this.show_hide_ckallback_funk();
                        this.storageService.bookingServer(this.cart, this.buyer)
                            .subscribe(function (res) {
                            _this.booking_in_use = res;
                            console.log('this.booking_in_use ', _this.booking_in_use);
                            _this.phone_is_needed = false;
                            //this.close_detail();
                            //this.close_cart_func();
                            //this.anchor_down('third_down_scroll');
                            _this.show_modal('Мы вам перезвоним в ближайшее время');
                        });
                    }
                };
                HeaderComponent.prototype.change_products = function (item, idx) {
                    console.log('showed_items ', item);
                    this.showed_items = item;
                    this.active_idx = idx;
                };
                HeaderComponent.prototype.up_go_products = function () {
                    //console.log( this.data, this.active_idx );
                    if (!this.active_idx) {
                        this.active_idx = 1;
                        this.showed_items = this.data.products[this.active_idx];
                        return;
                    }
                    if (this.active_idx < 4) {
                        this.active_idx++;
                        this.showed_items = this.data.products[this.active_idx];
                        console.log(this.data.products, this.active_idx);
                    }
                    else {
                        this.active_idx = 0;
                        this.showed_items = this.data.products[this.active_idx];
                    }
                };
                HeaderComponent.prototype.down_go_products = function () {
                    console.log(this.data, this.active_idx);
                    if (!this.active_idx) {
                        this.active_idx = 4;
                        this.showed_items = this.data.products[this.active_idx];
                        return;
                    }
                    if (this.active_idx > 0) {
                        this.active_idx--;
                        this.showed_items = this.data.products[this.active_idx];
                        console.log(this.data.products, this.active_idx);
                    }
                    else {
                        this.active_idx = 4;
                        this.showed_items = this.data.products[this.active_idx];
                    }
                };
                HeaderComponent.prototype.show_detail = function (item, idx) {
                    console.log('detail items ', item);
                    this.detail_item = item;
                    this.detail_idx = idx;
                    this.start_detail_image();
                    this.show_detail_item = true;
                    this.pageYOffset = pageYOffset;
                };
                HeaderComponent.prototype.close_detail = function () {
                    this.show_detail_item = false;
                };
                HeaderComponent.prototype.previous_detail = function () {
                    if (this.detail_idx != 0) {
                        this.detail_idx--;
                        this.detail_item = this.showed_items.products[this.detail_idx];
                        this.start_detail_image();
                    }
                };
                HeaderComponent.prototype.next_detail = function () {
                    if (this.detail_idx != this.showed_items.products.length - 1) {
                        this.detail_idx++;
                        this.detail_item = this.showed_items.products[this.detail_idx];
                        this.start_detail_image();
                    }
                };
                HeaderComponent.prototype.start_detail_image = function () {
                    this.detail_item_images = this.detail_item.master.images;
                    this.detail_item_image_main = this.detail_item_images[0]['product_url'];
                    this.detail_item_image_idx = 0;
                };
                HeaderComponent.prototype.move_details_img = function (move) {
                    this.detail_item_image_idx = this.detail_item_image_idx + move;
                    this.detail_item_image_idx == -1 ? this.detail_item_image_idx = this.detail_item_images.length - 1 : '';
                    this.detail_item_image_idx == this.detail_item_images.length || this.detail_item_image_idx == 3 ? this.detail_item_image_idx = 0 : '';
                    this.detail_item_image_main = this.detail_item_images[this.detail_item_image_idx]['product_url'];
                };
                HeaderComponent.prototype.click_small_details_img = function (idx) {
                    this.detail_item_image_idx = idx;
                    this.detail_item_image_main = this.detail_item_images[this.detail_item_image_idx]['product_url'];
                };
                HeaderComponent.prototype.anchor_up = function () {
                    var t;
                    var up = function () {
                        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
                        if (top > 0) {
                            window.scrollBy(0, -50);
                            t = setTimeout(up, 25);
                        }
                        else
                            clearTimeout(t);
                        return false;
                    };
                    up();
                };
                HeaderComponent.prototype.anchor_down = function (scroll_to_id) {
                    var objDiv = document.getElementById(scroll_to_id);
                    var t = objDiv.offsetTop;
                    var inter;
                    //console.log( ' t ', t );
                    var down = function () {
                        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
                        //console.log( ' top ', top );
                        if (top < t) {
                            window.scrollBy(0, +50);
                            inter = setTimeout(down, 25);
                        }
                        else
                            clearTimeout(inter);
                        return false;
                    };
                    down();
                };
                /*
                  anchor_down(scroll_to_id) {
                        document.getElementById(scroll_to_id).scrollIntoView({block: "end", behavior: "smooth"});
                  }
                */
                HeaderComponent.prototype.show_modal = function (msg) {
                    this.show_modal_end = true;
                    this.modal_end_text = msg;
                    window.my_this = this;
                    window.setTimeout(function () {
                        window.my_this.show_modal_end = false;
                        //console.log( 'end', window.my_this );
                    }, 2000);
                };
                HeaderComponent.prototype.set_global_js = function () {
                    var src = 'app/global.js';
                    var script = document.createElement('script');
                    script.src = src;
                    var head = document.getElementsByTagName('head')[0];
                    head.appendChild(script);
                };
                ;
                HeaderComponent.prototype.ngAfterViewInit = function () {
                    this.set_global_js();
                    //console.log( 'ngAfterViewInit ' );
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-component',
                        templateUrl: 'app/components/header/header.html',
                        directives: [],
                        providers: [storage_service_1.StorageService],
                        pipes: [derp_pipe_1.DerpPipe]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof storage_service_1.StorageService !== 'undefined' && storage_service_1.StorageService) === 'function' && _a) || Object])
                ], HeaderComponent);
                return HeaderComponent;
                var _a;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFlRSx5QkFBbUIsY0FBOEI7b0JBZm5ELGlCQWlTQztvQkFsUm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFiMUMsU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixpQkFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2YscUJBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO29CQUN4QiwyQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQztvQkFDakQsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixlQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7b0JBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFJYixjQUFjLENBQUMsYUFBYSxFQUFFO3lCQUM3QixTQUFTLENBQUUsVUFBQSxHQUFHO3dCQUNYLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUNoQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9B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QyxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7O2dCQUVELHlDQUFlLEdBQWY7b0JBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixvQ0FBb0M7Z0JBQ3RDLENBQUM7Z0JBeFNIO29CQUFDLGdCQUFTLENBQUM7d0JBRVQsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsS0FBSyxFQUFFLENBQUMsb0JBQVEsQ0FBQztxQkFDbEIsQ0FBQzs7bUNBQUE7Z0JBbVNGLHNCQUFDOztZQUFELENBalNBLEFBaVNDLElBQUE7WUFqU0QsNkNBaVNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSBcImFwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEZXJwUGlwZX0gZnJvbSBcImFwcC9waXBlcy9kZXJwLnBpcGVcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW10sXHJcbiAgcHJvdmlkZXJzOiBbU3RvcmFnZVNlcnZpY2VdLFxyXG4gIHBpcGVzOiBbRGVycFBpcGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIGRhdGEgPSBbXTtcclxuICBwdWJsaWMgc2hvd2VkX2l0ZW1zID0gW107XHJcbiAgcHVibGljIGRldGFpbF9pdGVtID0gW107XHJcbiAgcHVibGljIGRldGFpbF9pZHggPSAxO1xyXG4gIHB1YmxpYyBzaG93X2RldGFpbF9pdGVtID0gZmFsc2U7XHJcbiAgcHVibGljIHBhZ2VZT2Zmc2V0ID0gMjA7XHJcbiAgcHVibGljIGRldGFpbF9pdGVtX2ltYWdlcyA9IFtdO1xyXG4gIHB1YmxpYyBkZXRhaWxfaXRlbV9pbWFnZV9tYWluID0gJy4uL2ltZy9jYXRlZ29yeS0xLnBuZyc7XHJcbiAgcHVibGljIGRldGFpbF9pdGVtX2ltYWdlX2lkeCA9IDA7XHJcbiAgcHVibGljIGFjdGl2ZV9pZHggPSAwO1xyXG4gIHB1YmxpYyBidXllciA9IHt9O1xyXG4gIHB1YmxpYyBjYXJ0ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VTZXJ2aWNlLmdldEZvcm1TZXJ2ZXIoKVxyXG4gICAgICAuc3Vic2NyaWJlKCByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xyXG4gICAgICAgICAgdGhpcy5zaG93ZWRfaXRlbXMgPSB0aGlzLmRhdGEucHJvZHVjdHNbMF07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyggJ3RoaXMuZGF0YSAnLCB0aGlzLmRhdGEgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNhcnQgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpID9cclxuICAgICAgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKSA6IFtdO1xyXG4gICAgICB0aGlzLmJ1eWVyID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJidXllclwiKSkgP1xyXG4gICAgICBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJ1eWVyXCIpKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZShsb2cpe1xyXG4gICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgfVxyXG4gIHNob3dfY2FydF9mdW5jKCl7XHJcbiAgICBjb25zb2xlLmxvZyggXCIgc2hvd2luZyBjYXJ0IFwiICk7XHJcbiAgICB0aGlzLnNob3dfY2FydF9tb2RhbCA9IHRydWU7XHJcbiAgfVxyXG4gIGNsb3NlX2NhcnRfZnVuYygpe1xyXG4gICAgY29uc29sZS5sb2coIFwiIGNsb3NlIGNhcnQgXCIgKTtcclxuICAgIHRoaXMuc2hvd19jYXJ0X21vZGFsID0gZmFsc2U7XHJcbiAgfVxyXG4gIGRlbGV0ZV9jYXJ0X2l0ZW1fZnVuYyhpZCl7XHJcbiAgICBmb3IoIGxldCBpIGluIHRoaXMuY2FydCApe1xyXG4gICAgICBpZiggdGhpcy5jYXJ0W2ldLmlkID09IGlkICkge1xyXG4gICAgICAgIHRoaXMuY2FydC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VfYW1vdW50X3ByaWNlKGl0ZW0sIGFkZGl0aW9uKXtcclxuICAgIGl0ZW0uYW1vdW50ID8gJycgOiBpdGVtLmFtb3VudCA9IDEgO1xyXG4gICAgLy9jb25zb2xlLmxvZygnYW1vdW50ICcsIGl0ZW0uYW1vdW50KTtcclxuICAgIGlmICggYWRkaXRpb24gKSB7XHJcbiAgICAgIGl0ZW0uYW1vdW50Kys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmFtb3VudCAhPSAxID8gaXRlbS5hbW91bnQtLSA6ICcnIDtcclxuICAgIH1cclxuICB9XHJcbiAgYm9va2luZygpe1xyXG4gICAgaWYodGhpcy5jaGVja19idXllcigpKXtcclxuICAgICAgdGhpcy5waG9uZV9pc19uZWVkZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmJvb2tpbmdTZXJ2ZXIodGhpcy5jYXJ0LCB0aGlzLmJ1eWVyKVxyXG4gICAgLnN1YnNjcmliZSggcmVzID0+IHtcclxuICAgICAgICB0aGlzLmJvb2tpbmdfaW5fdXNlID0gcmVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAndGhpcy5ib29raW5nX2luX3VzZSAnLCB0aGlzLmJvb2tpbmdfaW5fdXNlICk7XHJcbiAgICAgICAgdGhpcy5waG9uZV9pc19uZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmVfYnV5ZXIoKTtcclxuICAgICAgICB0aGlzLmNsb3NlX2RldGFpbCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VfY2FydF9mdW5jKCk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JfZG93bigndGhpcmRfZG93bl9zY3JvbGwnKTtcclxuICAgICAgICB0aGlzLnNob3dfbW9kYWwoJ9CX0LDQutCw0Lcg0L7RhNC+0YDQvNC70LXQvSwg0LzRiyDQstCw0Lwg0L/QtdGA0LXQt9Cy0L7QvdC40Lwg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8nKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2hlY2tfYnV5ZXIoKXtcclxuICAgIGlmICggIXRoaXMuYnV5ZXIgfHwgIXRoaXMuYnV5ZXIucGhvbmUgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCAhIC9eWzAtOV17NSwyMH0kLy50ZXN0KHRoaXMuYnV5ZXIucGhvbmUpICkgeyBcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyggJyB0IHQgdCAnKTtcclxuXHJcbiAgfVxyXG5cclxuICBhZGRfdG9fY2FydChkZXRhaWxfaXRlbSwgYnV5ZXIpe1xyXG4gICAgIGlmKCBkZXRhaWxfaXRlbSApIHtcclxuICAgICAgIGlmKCAhdGhpcy5jaGVja19kZXRhaWxfaXRlbV9jb3B5KGRldGFpbF9pdGVtKSApe1xyXG4gICAgICAgICB0aGlzLmNhcnQucHVzaCggZGV0YWlsX2l0ZW0gKTtcclxuICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkgKTtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgdGhpcy5zYXZlX2J1eWVyKCk7XHJcbiAgICAgdGhpcy5jbG9zZV9kZXRhaWwoKTtcclxuICAgICBjb25zb2xlLmxvZyggJ2NhcnQnLCB0aGlzLmNhcnQgKTtcclxuICAgICB0aGlzLmFuY2hvcl91cCgpO1xyXG4gICAgIHRoaXMuc2hvd19jYXJ0X2Z1bmMoKTtcclxuICB9XHJcbiAgY2hlY2tfZGV0YWlsX2l0ZW1fY29weShpdGVtKXtcclxuICAgIGZvciggbGV0IGkgaW4gdGhpcy5jYXJ0ICkge1xyXG4gICAgICBpZiAoIHRoaXMuY2FydFtpXS5pZCA9PSBpdGVtLmlkICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIHdhcyBhZGRlZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNhdmVfYnV5ZXIoKXtcclxuICAgIGlmKCB0aGlzLmJ1eWVyICYmIHRoaXMuYnV5ZXIucGhvbmUgKSB7XHJcbiAgICAgIGxldCBhcnIgPSB7fTtcclxuICAgICAgYXJyWyduYW1lJ10gPSB0aGlzLmJ1eWVyLm5hbWUgfHwgJyc7XHJcbiAgICAgIGFyclsncGhvbmUnXSA9IHRoaXMuYnV5ZXIucGhvbmU7XHJcbiAgICAgIGFyclsnZW1haWwnXSA9IHRoaXMuYnV5ZXIuZW1haWwgfHwgJyc7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ2J1eWVyJywgSlNPTi5zdHJpbmdpZnkoYXJyKSApO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCAnSlNPTi5zdHJpbmdpZnkoYXJyKScsIEpTT04uc3RyaW5naWZ5KGFycikgKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyggJ2FycicsIGFyciApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2hvd19oaWRlX2NrYWxsYmFja19mdW5rKCl7XHJcbiAgICB0aGlzLnNob3dfY2FsbGJhY2sgPSAhdGhpcy5zaG93X2NhbGxiYWNrO1xyXG4gIH1cclxuICB3YW50X2NhbGwoKXtcclxuICAgIGlmICggIXRoaXMuc2F2ZV9idXllcigpICkge1xyXG4gICAgICB0aGlzLnBob25lX2lzX25lZWRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dfaGlkZV9ja2FsbGJhY2tfZnVuaygpO1xyXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmJvb2tpbmdTZXJ2ZXIodGhpcy5jYXJ0LCB0aGlzLmJ1eWVyKVxyXG4gICAgICAuc3Vic2NyaWJlKCByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ib29raW5nX2luX3VzZSA9IHJlcztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCAndGhpcy5ib29raW5nX2luX3VzZSAnLCB0aGlzLmJvb2tpbmdfaW5fdXNlICk7XHJcbiAgICAgICAgICB0aGlzLnBob25lX2lzX25lZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgLy90aGlzLmNsb3NlX2RldGFpbCgpO1xyXG4gICAgICAgICAgLy90aGlzLmNsb3NlX2NhcnRfZnVuYygpO1xyXG4gICAgICAgICAgLy90aGlzLmFuY2hvcl9kb3duKCd0aGlyZF9kb3duX3Njcm9sbCcpO1xyXG4gICAgICAgICAgdGhpcy5zaG93X21vZGFsKCfQnNGLINCy0LDQvCDQv9C10YDQtdC30LLQvtC90LjQvCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjycpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hhbmdlX3Byb2R1Y3RzKGl0ZW0sIGlkeCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAnc2hvd2VkX2l0ZW1zICcsIGl0ZW0pO1xyXG4gICAgICB0aGlzLnNob3dlZF9pdGVtcyA9IGl0ZW07XHJcbiAgICAgIHRoaXMuYWN0aXZlX2lkeCA9IGlkeDtcclxuICB9XHJcbiBcclxuICB1cF9nb19wcm9kdWN0cygpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCB0aGlzLmRhdGEsIHRoaXMuYWN0aXZlX2lkeCApO1xyXG4gICAgICBpZiAoICF0aGlzLmFjdGl2ZV9pZHggKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVfaWR4ID0gMTtcclxuICAgICAgICB0aGlzLnNob3dlZF9pdGVtcyA9IHRoaXMuZGF0YS5wcm9kdWN0c1t0aGlzLmFjdGl2ZV9pZHhdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoICB0aGlzLmFjdGl2ZV9pZHggPCA0ICkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlX2lkeCsrO1xyXG4gICAgICAgIHRoaXMuc2hvd2VkX2l0ZW1zID0gdGhpcy5kYXRhLnByb2R1Y3RzW3RoaXMuYWN0aXZlX2lkeF07XHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZGF0YS5wcm9kdWN0cywgIHRoaXMuYWN0aXZlX2lkeCApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlX2lkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93ZWRfaXRlbXMgPSB0aGlzLmRhdGEucHJvZHVjdHNbdGhpcy5hY3RpdmVfaWR4XTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfVxyXG4gXHJcbiAgZG93bl9nb19wcm9kdWN0cygpe1xyXG4gICAgICBjb25zb2xlLmxvZyggdGhpcy5kYXRhLCB0aGlzLmFjdGl2ZV9pZHggKTtcclxuICAgICAgaWYgKCAhdGhpcy5hY3RpdmVfaWR4ICkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlX2lkeCA9IDQ7XHJcbiAgICAgICAgdGhpcy5zaG93ZWRfaXRlbXMgPSB0aGlzLmRhdGEucHJvZHVjdHNbdGhpcy5hY3RpdmVfaWR4XTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCB0aGlzLmFjdGl2ZV9pZHggPiAwICkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlX2lkeC0tO1xyXG4gICAgICAgIHRoaXMuc2hvd2VkX2l0ZW1zID0gdGhpcy5kYXRhLnByb2R1Y3RzW3RoaXMuYWN0aXZlX2lkeF07XHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZGF0YS5wcm9kdWN0cywgIHRoaXMuYWN0aXZlX2lkeCApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlX2lkeCA9IDQ7XHJcbiAgICAgICAgdGhpcy5zaG93ZWRfaXRlbXMgPSB0aGlzLmRhdGEucHJvZHVjdHNbdGhpcy5hY3RpdmVfaWR4XTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSBcclxuXHJcbiAgc2hvd19kZXRhaWwoaXRlbSwgaWR4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAnZGV0YWlsIGl0ZW1zICcsIGl0ZW0pO1xyXG4gICAgICB0aGlzLmRldGFpbF9pdGVtID0gaXRlbTtcclxuICAgICAgdGhpcy5kZXRhaWxfaWR4ID0gaWR4O1xyXG4gICAgICB0aGlzLnN0YXJ0X2RldGFpbF9pbWFnZSAoKTtcclxuICAgICAgdGhpcy5zaG93X2RldGFpbF9pdGVtID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYWdlWU9mZnNldCA9IHBhZ2VZT2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgY2xvc2VfZGV0YWlsKCkge1xyXG4gICAgICB0aGlzLnNob3dfZGV0YWlsX2l0ZW0gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzX2RldGFpbCgpIHtcclxuICAgICAgaWYoIHRoaXMuZGV0YWlsX2lkeCAhPSAwICkge1xyXG4gICAgICAgICAgdGhpcy5kZXRhaWxfaWR4LS07XHJcbiAgICAgICAgICB0aGlzLmRldGFpbF9pdGVtID0gdGhpcy5zaG93ZWRfaXRlbXMucHJvZHVjdHNbdGhpcy5kZXRhaWxfaWR4XTtcclxuICAgICAgICAgIHRoaXMuc3RhcnRfZGV0YWlsX2ltYWdlKCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIG5leHRfZGV0YWlsKCkge1xyXG4gICAgICBpZiggdGhpcy5kZXRhaWxfaWR4ICE9IHRoaXMuc2hvd2VkX2l0ZW1zLnByb2R1Y3RzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICB0aGlzLmRldGFpbF9pZHgrKztcclxuICAgICAgICAgIHRoaXMuZGV0YWlsX2l0ZW0gPSB0aGlzLnNob3dlZF9pdGVtcy5wcm9kdWN0c1t0aGlzLmRldGFpbF9pZHhdO1xyXG4gICAgICAgICAgdGhpcy5zdGFydF9kZXRhaWxfaW1hZ2UoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRfZGV0YWlsX2ltYWdlICgpIHtcclxuICAgICAgdGhpcy5kZXRhaWxfaXRlbV9pbWFnZXMgPSB0aGlzLmRldGFpbF9pdGVtLm1hc3Rlci5pbWFnZXM7XHJcbiAgICAgIHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VfbWFpbiA9IHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VzWzBdWydwcm9kdWN0X3VybCddO1xyXG4gICAgICB0aGlzLmRldGFpbF9pdGVtX2ltYWdlX2lkeCA9IDA7XHJcbiAgfVxyXG5cclxuICBtb3ZlX2RldGFpbHNfaW1nKCBtb3ZlICkge1xyXG4gICAgICB0aGlzLmRldGFpbF9pdGVtX2ltYWdlX2lkeCA9IHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VfaWR4ICsgbW92ZTtcclxuICAgICAgdGhpcy5kZXRhaWxfaXRlbV9pbWFnZV9pZHggPT0gLTEgPyB0aGlzLmRldGFpbF9pdGVtX2ltYWdlX2lkeCA9IHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VzLmxlbmd0aC0xIDogJycgO1xyXG4gICAgICB0aGlzLmRldGFpbF9pdGVtX2ltYWdlX2lkeCA9PSB0aGlzLmRldGFpbF9pdGVtX2ltYWdlcy5sZW5ndGggfHwgdGhpcy5kZXRhaWxfaXRlbV9pbWFnZV9pZHggPT0gMyA/IHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VfaWR4ID0gMCA6ICcnIDtcclxuICAgICAgdGhpcy5kZXRhaWxfaXRlbV9pbWFnZV9tYWluID0gdGhpcy5kZXRhaWxfaXRlbV9pbWFnZXNbdGhpcy5kZXRhaWxfaXRlbV9pbWFnZV9pZHhdWydwcm9kdWN0X3VybCddIDtcclxuICB9XHJcblxyXG4gIGNsaWNrX3NtYWxsX2RldGFpbHNfaW1nKCBpZHggKSB7XHJcbiAgICAgIHRoaXMuZGV0YWlsX2l0ZW1faW1hZ2VfaWR4ID0gaWR4O1xyXG4gICAgICB0aGlzLmRldGFpbF9pdGVtX2ltYWdlX21haW4gPSB0aGlzLmRldGFpbF9pdGVtX2ltYWdlc1t0aGlzLmRldGFpbF9pdGVtX2ltYWdlX2lkeF1bJ3Byb2R1Y3RfdXJsJ107XHJcbiAgfVxyXG5cclxuICBhbmNob3JfdXAoKSB7XHJcbiAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgdmFyIHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XHJcbiAgICAgICAgICAgIGlmKHRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLC01MCk7XHJcbiAgICAgICAgICAgICAgICB0ID0gc2V0VGltZW91dCh1cCwyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBjbGVhclRpbWVvdXQodCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXAoKTtcclxuICB9XHJcblxyXG5cclxuICBhbmNob3JfZG93bihzY3JvbGxfdG9faWQpIHtcclxuICAgICAgICB2YXIgb2JqRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Nyb2xsX3RvX2lkKTtcclxuICAgICAgICB2YXIgdCA9IG9iakRpdi5vZmZzZXRUb3BcclxuICAgICAgICB2YXIgaW50ZXI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyggJyB0ICcsIHQgKTtcclxuICAgICAgICB2YXIgZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRvcCA9IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCAnIHRvcCAnLCB0b3AgKTtcclxuICAgICAgICAgICAgaWYodG9wIDwgdCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsKzUwKTtcclxuICAgICAgICAgICAgICAgIGludGVyID0gc2V0VGltZW91dChkb3duLDI1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGNsZWFyVGltZW91dChpbnRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG93bigpO1xyXG4gIH1cclxuLypcclxuICBhbmNob3JfZG93bihzY3JvbGxfdG9faWQpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxfdG9faWQpLnNjcm9sbEludG9WaWV3KHtibG9jazogXCJlbmRcIiwgYmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICB9XHJcbiovXHJcbiAgc2hvd19tb2RhbChtc2cpe1xyXG4gICAgdGhpcy5zaG93X21vZGFsX2VuZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vZGFsX2VuZF90ZXh0ID0gbXNnO1xyXG4gICAgd2luZG93Lm15X3RoaXMgPSB0aGlzO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgd2luZG93Lm15X3RoaXMuc2hvd19tb2RhbF9lbmQgPSBmYWxzZTtcclxuICAgICAgLy9jb25zb2xlLmxvZyggJ2VuZCcsIHdpbmRvdy5teV90aGlzICk7XHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgc2V0X2dsb2JhbF9qcygpe1xyXG4gICAgdmFyIHNyYyA9ICdhcHAvZ2xvYmFsLmpzJztcclxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5zcmMgPSBzcmM7XHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgfTtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zZXRfZ2xvYmFsX2pzKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCAnbmdBZnRlclZpZXdJbml0ICcgKTtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
