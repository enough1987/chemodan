import { Component } from '@angular/core';

import {StorageService} from "app/services/storage.service";
import {DerpPipe} from "app/pipes/derp.pipe";


@Component({

  selector: 'header-component',
  templateUrl: 'app/components/header/header.html',
  directives: [],
  providers: [StorageService],
  pipes: [DerpPipe]
})

export class HeaderComponent {

  public data = [];
  public showed_items = [];
  public detail_item = [];
  public detail_idx = 1;
  public show_detail_item = false;
  public pageYOffset = 20;
  public detail_item_images = [];
  public detail_item_image_main = '../img/category-1.png';
  public detail_item_image_idx = 0;
  public active_idx = 0;
  public buyer = {};
  public cart = [];

  constructor(public storageService: StorageService) {

      storageService.getFormServer()
      .subscribe( res => {
          this.data = res;
          this.showed_items = this.data.products[0];
          console.log( 'this.data ', this.data );
      });

      this.cart = JSON.parse(window.localStorage.getItem("cart")) ?
      JSON.parse(window.localStorage.getItem("cart")) : [];
      this.buyer = JSON.parse(window.localStorage.getItem("buyer")) ?
      JSON.parse(window.localStorage.getItem("buyer")) : [];
  }

  console(log){
     console.log(log);
  }
  show_cart_func(){
    console.log( " showing cart " );
    this.show_cart_modal = true;
  }
  close_cart_func(){
    console.log( " close cart " );
    this.show_cart_modal = false;
  }
  delete_cart_item_func(id){
    for( let i in this.cart ){
      if( this.cart[i].id == id ) {
        this.cart.splice(i, 1);
        window.localStorage.setItem( 'cart', JSON.stringify(this.cart) );
      }
    }
  }
  change_amount_price(item, addition){
    item.amount ? '' : item.amount = 1 ;
    //console.log('amount ', item.amount);
    if ( addition ) {
      item.amount++;
    } else {
      item.amount != 1 ? item.amount-- : '' ;
    }
  }
  booking(){
    if(this.check_buyer()){
      this.phone_is_needed = true;
      return false;
    }
    this.storageService.bookingServer(this.cart, this.buyer)
    .subscribe( res => {
        this.booking_in_use = res;
        console.log( 'this.booking_in_use ', this.booking_in_use );
        this.phone_is_needed = false;
        this.save_buyer();
        this.close_detail();
        this.close_cart_func();
        this.anchor_down('third_down_scroll');
        this.show_modal('Заказ оформлен, мы вам перезвоним в ближайшее время');

    });
  }
  check_buyer(){
    if ( !this.buyer || !this.buyer.phone ) {
      return true;
    }
    if ( ! /^[0-9]{5,20}$/.test(this.buyer.phone) ) { 
      return true;
    }
    console.log( ' t t t ');

  }

  add_to_cart(detail_item, buyer){
     if( detail_item ) {
       if( !this.check_detail_item_copy(detail_item) ){
         this.cart.push( detail_item );
         window.localStorage.setItem( 'cart', JSON.stringify(this.cart) );
       }
     }
     this.save_buyer();
     this.close_detail();
     console.log( 'cart', this.cart );
     this.anchor_up();
     this.show_cart_func();
  }
  check_detail_item_copy(item){
    for( let i in this.cart ) {
      if ( this.cart[i].id == item.id ) {
        console.log('item was added');
        return true;
      }
    }
  }
  save_buyer(){
    if( this.buyer && this.buyer.phone ) {
      let arr = {};
      arr['name'] = this.buyer.name || '';
      arr['phone'] = this.buyer.phone;
      arr['email'] = this.buyer.email || '';
      window.localStorage.setItem( 'buyer', JSON.stringify(arr) );
      //console.log( 'JSON.stringify(arr)', JSON.stringify(arr) );
      //console.log( 'arr', arr );
      return true;
    }
    return false;
  }
  show_hide_ckallback_funk(){
    this.show_callback = !this.show_callback;
  }
  want_call(){
    if ( !this.save_buyer() ) {
      this.phone_is_needed = true;
    } else {
      this.show_hide_ckallback_funk();
      this.storageService.bookingServer(this.cart, this.buyer)
      .subscribe( res => {
          this.booking_in_use = res;
          console.log( 'this.booking_in_use ', this.booking_in_use );
          this.phone_is_needed = false;
          //this.close_detail();
          //this.close_cart_func();
          //this.anchor_down('third_down_scroll');
          this.show_modal('Мы вам перезвоним в ближайшее время');

      });
    }
  }


  change_products(item, idx){
      console.log( 'showed_items ', item);
      this.showed_items = item;
      this.active_idx = idx;
  }
 
  up_go_products(){
      //console.log( this.data, this.active_idx );
      if ( !this.active_idx ) {
        this.active_idx = 1;
        this.showed_items = this.data.products[this.active_idx];
        return;
      }
      if (  this.active_idx < 4 ) {
        this.active_idx++;
        this.showed_items = this.data.products[this.active_idx];
        console.log( this.data.products,  this.active_idx );
      } else {
        this.active_idx = 0;
        this.showed_items = this.data.products[this.active_idx];        
      }
  }
 
  down_go_products(){
      console.log( this.data, this.active_idx );
      if ( !this.active_idx ) {
        this.active_idx = 4;
        this.showed_items = this.data.products[this.active_idx];
        return;
      }
      if ( this.active_idx > 0 ) {
        this.active_idx--;
        this.showed_items = this.data.products[this.active_idx];
        console.log( this.data.products,  this.active_idx );
      } else {
        this.active_idx = 4;
        this.showed_items = this.data.products[this.active_idx];        
      }
  } 

  show_detail(item, idx) {
      console.log( 'detail items ', item);
      this.detail_item = item;
      this.detail_idx = idx;
      this.start_detail_image ();
      this.show_detail_item = true;
      this.pageYOffset = pageYOffset;
  }

  close_detail() {
      this.show_detail_item = false;
  }

  previous_detail() {
      if( this.detail_idx != 0 ) {
          this.detail_idx--;
          this.detail_item = this.showed_items.products[this.detail_idx];
          this.start_detail_image();
      }
  }

  next_detail() {
      if( this.detail_idx != this.showed_items.products.length-1) {
          this.detail_idx++;
          this.detail_item = this.showed_items.products[this.detail_idx];
          this.start_detail_image();
      }
  }

  start_detail_image () {
      this.detail_item_images = this.detail_item.master.images;
      this.detail_item_image_main = this.detail_item_images[0]['product_url'];
      this.detail_item_image_idx = 0;
  }

  move_details_img( move ) {
      this.detail_item_image_idx = this.detail_item_image_idx + move;
      this.detail_item_image_idx == -1 ? this.detail_item_image_idx = this.detail_item_images.length-1 : '' ;
      this.detail_item_image_idx == this.detail_item_images.length || this.detail_item_image_idx == 3 ? this.detail_item_image_idx = 0 : '' ;
      this.detail_item_image_main = this.detail_item_images[this.detail_item_image_idx]['product_url'] ;
  }

  click_small_details_img( idx ) {
      this.detail_item_image_idx = idx;
      this.detail_item_image_main = this.detail_item_images[this.detail_item_image_idx]['product_url'];
  }

  anchor_up() {
        var t;
        var up = function () {
            var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
            if(top > 0) {
                window.scrollBy(0,-50);
                t = setTimeout(up,25);
            } else clearTimeout(t);
            return false;
        }
        up();
  }


  anchor_down(scroll_to_id) {
        var objDiv = document.getElementById(scroll_to_id);
        var t = objDiv.offsetTop
        var inter;
        //console.log( ' t ', t );
        var down = function () {
            var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
            //console.log( ' top ', top );
            if(top < t) {
                window.scrollBy(0,+50);
                inter = setTimeout(down,25);
            } else clearTimeout(inter);
            return false;
        }
        down();
  }
/*
  anchor_down(scroll_to_id) {
        document.getElementById(scroll_to_id).scrollIntoView({block: "end", behavior: "smooth"});
  }
*/
  show_modal(msg){
    this.show_modal_end = true;
    this.modal_end_text = msg;
    window.my_this = this;
    window.setTimeout(function(){
      window.my_this.show_modal_end = false;
      //console.log( 'end', window.my_this );
    }, 2000)
  }

  set_global_js(){
    var src = 'app/global.js';
    var script = document.createElement('script');
    script.src = src;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  };

  ngAfterViewInit() {
    this.set_global_js();
    //console.log( 'ngAfterViewInit ' );
  }

}
