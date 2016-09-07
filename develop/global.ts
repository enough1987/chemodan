setTimeout(function(){


;(function(){

    
	var l_arrow = document.getElementById('g-goods-l-arrow');
	var r_arrow = document.getElementById('g-goods-r-arrow');
	var goods = document.getElementById('b-goods');

	var event_func = function(event){

    	var start_point =  goods.offsetTop + 25;   
		var end_point = goods.offsetTop + goods.clientHeight - 200; 
		var mouse_y = event.pageY; 

		var result = mouse_y - 80;
		if ( start_point > mouse_y ) result = start_point;
		if ( end_point < mouse_y ) result = end_point;

		l_arrow.style.top = result;
		r_arrow.style.top = result;
    	//console.log( l_arrow.style.top , ' - ', start_point  , end_point , mouse_y );		
	}

	goods.addEventListener("mousemove", event_func, false);
	goods.addEventListener("mousewheel", event_func, false);

})();


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
})();


}, 1000 );
