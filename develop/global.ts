setTimeout(function(){


/*
;(function(){
try{

document.getElementById('dslider-left').onclick = function () {
	 movetoimg (-1) ;
};

document.getElementById('dslider-right').onclick = function () {
	 movetoimg (+1) ;
};

var smallimgs = document.getElementsByClassName('b-details-img-small__one');
Array.prototype.forEach.call(smallimgs, function(item, i, smallimgs){
	item.onclick = clicksmallimg;
});

function clicksmallimg (){
	console.log( this.getAttribute('data-dslide-img') );
	smallimgsnotactive ();
	this.classList.add("b-details-img-small__one-active");
	setimg (
		this.getAttribute('src'),
		this.getAttribute('data-dslide-img')
	);
};

function smallimgsnotactive (){
	Array.prototype.forEach.call(smallimgs, function(item, i, smallimgs){
		item.classList.remove("b-details-img-small__one-active");
	});
};

function setimg (src, data) {
	document.getElementById('dslider-img').setAttribute('src', src);
	document.getElementById('dslider-img').setAttribute('data-dslide-img', data);
}

function movetoimg (move) {
	var simg = document.getElementById('dslider-img').getAttribute('data-dslide-img');
	var next = +simg + move;
	var smallimgs = document.getElementsByClassName('b-details-img-small__one');
	if( next == smallimgs.length ) {
		next = 0;
	}
	if( next == -1 ) {
		next = smallimgs.length -1;
	}
	console.log( next );
	console.log( smallimgs );
	setimg (
		smallimgs[next].getAttribute('src'),
		next
	);
}
} catch (e) { console.log(e)};
})();
*/


/*
;(function(){
try{

var more = document.getElementsByClassName('b-goods-more');
Array.prototype.forEach.call(more, function(item){
	item.onclick = detail;
});
function detail(){

document.getElementById('b-detail-bgc').classList.add("b-detail-bgc");
document.getElementById('b-detail-item').classList.add("b-detail-item");

document.getElementById('b-detail-item').style.top = 20 + pageYOffset + "px";


}

document.getElementById('b-detail__close-popup').onclick = function(){
	document.getElementById('b-detail-bgc').classList.remove("b-detail-bgc");
	document.getElementById('b-detail-item').classList.remove("b-detail-item");
};

} catch (e) { console.log(e)};
})();
*/


// scrole to top
/*
window.up = (function(){
try{
var t;
return function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout(up,50);
  } else clearTimeout(t);
  return false;
}
} catch (e) { console.log(e)};
})();
*/

/*
;(function(){
try{
	// SHOW CART

	document.getElementById('cart-click-show').onclick = function () {

		console.log( " showing cart " );

		var c = document.getElementById('cart-click-show');
		c.classList.remove('g-show');
		c.classList.add('g-hide');

		var h = document.getElementById('cart-click-hide');
		h.classList.remove('g-hide');
		h.classList.add('g-show');

		document.getElementById('b-header-cart').classList.remove('g-pos-relative');

		var b = document.getElementById('wrapper-cart-for-opacity');
		b.classList.add('wrapper-cart-for-opacity');


		console.log( h );
	}


	// HIDE CART

	document.getElementById('b-header-cart__close-popup').onclick = function () {

		console.log( " hiding cart " );

		var c = document.getElementById('cart-click-show');
		c.classList.add('g-show');
		c.classList.remove('g-hide');

		var h = document.getElementById('cart-click-hide');
		h.classList.add('g-hide');
		h.classList.remove('g-show');

		var b = document.getElementById('wrapper-cart-for-opacity');
		b.classList.remove('wrapper-cart-for-opacity');

		document.getElementById('b-header-cart').classList.add('g-pos-relative');


		console.log( h );

	}

	// DELETE ITEM

	var c_items = document.getElementsByClassName('b-header-cart__delete-item');
	for (var i = 0; i < c_items.length; i++) {
	  var ind = i;
	  ;(function(i){
		c_items[i].onclick = function(){
			var index = this.getAttribute('data-index');
			var item = document.getElementById('wrapper-delete-item-'+index);
			item.remove();
			console.log(' item ' + index + ' is removed');
		};
	  })(ind);
	}

} catch (e) { console.log(e)};
})();
*/

;(function(){
try{
	var speed = 50000;
	var imgs = document.getElementsByClassName('b-main-header-slider__img');
	var headers = document.getElementsByClassName('b-main-header-offer_p');
	var btn = document.getElementsByClassName('b-main-header-btn-wrap__input');
	var now = 0;
	var len = 3;

function slider(settings) {
	var speed = settings.speed || 5000;
	var items = settings.items;
	var now = settings.now || 0;
	var len = settings.len || 3;

	setInterval(function(){
		for(var i = 0; i < len ; i++){

			items[i].classList.add("g-slide");
			imgs[i].classList.add("g-slide");
			headers[i].classList.add("g-slide");
			btn[i].classList.add("g-slide");

		};
		setTimeout(function(){
			for(var i = 0; i < len ; i++){

				items[i].classList.add("g-display-none");
				imgs[i].classList.add("g-display-none");
				headers[i].classList.add("g-display-none");
				btn[i].classList.add("g-display-none");

			};
			if(now == len-1) {
				now = 0
			} else {
				now++;
			};

			items[now].classList.remove("g-display-none");
			items[now].classList.remove("g-slide");

			imgs[now].classList.remove("g-display-none");
			imgs[now].classList.remove("g-slide");

			headers[now].classList.remove("g-display-none");
			headers[now].classList.remove("g-slide");

			btn[now].classList.remove("g-display-none");
			btn[now].classList.remove("g-slide");

		}, 500)
	}, speed);
}

slider({
	items: document.getElementsByClassName('b-main-header__item')
});

} catch (e) { console.log(e)};
})();


/*
;(function(){
try{
	var categories = document.querySelectorAll('.b-category');
	var arrow = document.querySelectorAll('.b-category-arrow');

	Array.prototype.forEach.call(categories, function(item){
		item.onclick = function () {
			var targ = this.getAttribute('targ');
			setnewtarget(targ);
		};
	});
	function setnewtarget (targ) {
		Array.prototype.forEach.call(arrow, function(item){
			item.classList.remove("b-category-arrow__active");
		});
		arrow[targ].classList.add("b-category-arrow__active");
	}

} catch (e) { console.log(e)};
})();
*/


;(function(){

	function initMap() {
	  var myLatLng = {lat: 55.75638967, lng: 37.62328148};

	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: myLatLng,
	    scrollwheel: false,
	    zoom: 4
	  });

	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng,
	    title: 'Привет'
	  });
	}
  initMap();

/*
google.maps.event.addDomListener(window, 'init_google', init_google);
var map;
function init_google() {
		var mapOptions = {
				center: new google.maps.LatLng(61.322997,83.107909),
				zoom: 3,
				zoomControl: false,
				disableDoubleClickZoom: false,
				mapTypeControl: true,
				mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				},
				scaleControl: true,
				scrollwheel: false,
				panControl: true,
				streetViewControl: true,
				draggable : true,
				overviewMapControl: true,
				overviewMapControlOptions: {
						opened: false,
				},
				mapTypeId: google.maps.MapTypeId.ROADMAP,
		}
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var locations = [
['Ханты Мансийск', 'undefined', 'undefined', 'undefined', 'undefined', 61.00909189999999, 69.03745959999992, 'https://mapbuildr.com/assets/img/markers/default.png']
		];
		for (i = 0; i < locations.length; i++) {
				if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
				if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
				if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			 if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
			 if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
				marker = new google.maps.Marker({
						icon: markericon,
						position: new google.maps.LatLng(locations[i][5], locations[i][6]),
						map: map,
						title: locations[i][0],
						desc: description,
						tel: telephone,
						email: email,
						web: web
				});
link = '';     }
}
*/

})();

/*
;(function(){

	var arrows = document.querySelectorAll('.b-advantages__item-arr');
	var go = true;
	var el = 1;
	setInterval(function(){
		el == 1 ? go = true : '' ;
		el == 7 ? go = false : '' ;
		var num = go ? ++el : --el ;
		Array.prototype.forEach.call(arrows, function (item) {
		    item.classList.remove(
					"b-advantages__item-arr1", "b-advantages__item-arr2",
					"b-advantages__item-arr3", "b-advantages__item-arr4",
					"b-advantages__item-arr5", "b-advantages__item-arr6",
					"b-advantages__item-arr7"
				);
				item.classList.add( 'b-advantages__item-arr'+num ) ;

		});
	}, 250 );

})();
*/

}, 1000 );
