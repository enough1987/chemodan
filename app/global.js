setTimeout(function () {
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
    ;
    (function () {
        try {
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
                setInterval(function () {
                    for (var i = 0; i < len; i++) {
                        items[i].classList.add("g-slide");
                        imgs[i].classList.add("g-slide");
                        headers[i].classList.add("g-slide");
                        btn[i].classList.add("g-slide");
                    }
                    ;
                    setTimeout(function () {
                        for (var i = 0; i < len; i++) {
                            items[i].classList.add("g-display-none");
                            imgs[i].classList.add("g-display-none");
                            headers[i].classList.add("g-display-none");
                            btn[i].classList.add("g-display-none");
                        }
                        ;
                        if (now == len - 1) {
                            now = 0;
                        }
                        else {
                            now++;
                        }
                        ;
                        items[now].classList.remove("g-display-none");
                        items[now].classList.remove("g-slide");
                        imgs[now].classList.remove("g-display-none");
                        imgs[now].classList.remove("g-slide");
                        headers[now].classList.remove("g-display-none");
                        headers[now].classList.remove("g-slide");
                        btn[now].classList.remove("g-display-none");
                        btn[now].classList.remove("g-slide");
                    }, 500);
                }, speed);
            }
            slider({
                items: document.getElementsByClassName('b-main-header__item')
            });
        }
        catch (e) {
            console.log(e);
        }
        ;
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
    ;
    (function () {
        function initMap() {
            var myLatLng = { lat: 55.75638967, lng: 37.62328148 };
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
    ;
    (function () {
        var arrows = document.querySelectorAll('.b-advantages__item-arr');
        var go = true;
        var el = 1;
        setInterval(function () {
            el == 1 ? go = true : '';
            el == 7 ? go = false : '';
            var num = go ? ++el : --el;
            Array.prototype.forEach.call(arrows, function (item) {
                item.classList.remove("b-advantages__item-arr1", "b-advantages__item-arr2", "b-advantages__item-arr3", "b-advantages__item-arr4", "b-advantages__item-arr5", "b-advantages__item-arr6", "b-advantages__item-arr7");
                item.classList.add('b-advantages__item-arr' + num);
            });
        }, 250);
    })();
}, 1000);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLENBQUM7SUFHWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BeURFO0lBR0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF5QkU7SUFHRixnQkFBZ0I7SUFDaEI7Ozs7Ozs7Ozs7Ozs7O01BY0U7SUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFvRUU7SUFFRixDQUFDO0lBQUEsQ0FBQztRQUNGLElBQUcsQ0FBQztZQUNILElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN4RSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2RSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUMzRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFYixnQkFBZ0IsUUFBUTtnQkFDdkIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQ25DLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzNCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFFNUIsV0FBVyxDQUFDO29CQUNYLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFHLENBQUMs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Q0FDdEIseUJBQXlCLEVBQUUseUJBQXlCLEVBQ3BELHlCQUF5QixFQUFFLHlCQUF5QixFQUNwRCx5QkFBeUIsRUFBRSx5QkFBeUIsRUFDcEQseUJBQXlCLENBQ3pCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsd0JBQXdCLEdBQUMsR0FBRyxDQUFFLENBQUU7WUFFdEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUM7SUFFVixDQUFDLENBQUMsRUFBRSxDQUFDO0FBR0wsQ0FBQyxFQUFFLElBQUksQ0FBRSxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4vKlxyXG47KGZ1bmN0aW9uKCl7XHJcbnRyeXtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkc2xpZGVyLWxlZnQnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdCBtb3ZldG9pbWcgKC0xKSA7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHNsaWRlci1yaWdodCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0IG1vdmV0b2ltZyAoKzEpIDtcclxufTtcclxuXHJcbnZhciBzbWFsbGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiLWRldGFpbHMtaW1nLXNtYWxsX19vbmUnKTtcclxuQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzbWFsbGltZ3MsIGZ1bmN0aW9uKGl0ZW0sIGksIHNtYWxsaW1ncyl7XHJcblx0aXRlbS5vbmNsaWNrID0gY2xpY2tzbWFsbGltZztcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjbGlja3NtYWxsaW1nICgpe1xyXG5cdGNvbnNvbGUubG9nKCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kc2xpZGUtaW1nJykgKTtcclxuXHRzbWFsbGltZ3Nub3RhY3RpdmUgKCk7XHJcblx0dGhpcy5jbGFzc0xpc3QuYWRkKFwiYi1kZXRhaWxzLWltZy1zbWFsbF9fb25lLWFjdGl2ZVwiKTtcclxuXHRzZXRpbWcgKFxyXG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxyXG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHNsaWRlLWltZycpXHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNtYWxsaW1nc25vdGFjdGl2ZSAoKXtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNtYWxsaW1ncywgZnVuY3Rpb24oaXRlbSwgaSwgc21hbGxpbWdzKXtcclxuXHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImItZGV0YWlscy1pbWctc21hbGxfX29uZS1hY3RpdmVcIik7XHJcblx0fSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXRpbWcgKHNyYywgZGF0YSkge1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkc2xpZGVyLWltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHNsaWRlci1pbWcnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZHNsaWRlLWltZycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZldG9pbWcgKG1vdmUpIHtcclxuXHR2YXIgc2ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkc2xpZGVyLWltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1kc2xpZGUtaW1nJyk7XHJcblx0dmFyIG5leHQgPSArc2ltZyArIG1vdmU7XHJcblx0dmFyIHNtYWxsaW1ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItZGV0YWlscy1pbWctc21hbGxfX29uZScpO1xyXG5cdGlmKCBuZXh0ID09IHNtYWxsaW1ncy5sZW5ndGggKSB7XHJcblx0XHRuZXh0ID0gMDtcclxuXHR9XHJcblx0aWYoIG5leHQgPT0gLTEgKSB7XHJcblx0XHRuZXh0ID0gc21hbGxpbWdzLmxlbmd0aCAtMTtcclxuXHR9XHJcblx0Y29uc29sZS5sb2coIG5leHQgKTtcclxuXHRjb25zb2xlLmxvZyggc21hbGxpbWdzICk7XHJcblx0c2V0aW1nIChcclxuXHRcdHNtYWxsaW1nc1tuZXh0XS5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxyXG5cdFx0bmV4dFxyXG5cdCk7XHJcbn1cclxufSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKX07XHJcbn0pKCk7XHJcbiovXHJcblxyXG5cclxuLypcclxuOyhmdW5jdGlvbigpe1xyXG50cnl7XHJcblxyXG52YXIgbW9yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItZ29vZHMtbW9yZScpO1xyXG5BcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG1vcmUsIGZ1bmN0aW9uKGl0ZW0pe1xyXG5cdGl0ZW0ub25jbGljayA9IGRldGFpbDtcclxufSk7XHJcbmZ1bmN0aW9uIGRldGFpbCgpe1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZGV0YWlsLWJnYycpLmNsYXNzTGlzdC5hZGQoXCJiLWRldGFpbC1iZ2NcIik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWRldGFpbC1pdGVtJykuY2xhc3NMaXN0LmFkZChcImItZGV0YWlsLWl0ZW1cIik7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1kZXRhaWwtaXRlbScpLnN0eWxlLnRvcCA9IDIwICsgcGFnZVlPZmZzZXQgKyBcInB4XCI7XHJcblxyXG5cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZGV0YWlsX19jbG9zZS1wb3B1cCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWRldGFpbC1iZ2MnKS5jbGFzc0xpc3QucmVtb3ZlKFwiYi1kZXRhaWwtYmdjXCIpO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWRldGFpbC1pdGVtJykuY2xhc3NMaXN0LnJlbW92ZShcImItZGV0YWlsLWl0ZW1cIik7XHJcbn07XHJcblxyXG59IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpfTtcclxufSkoKTtcclxuKi9cclxuXHJcblxyXG4vLyBzY3JvbGUgdG8gdG9wXHJcbi8qXHJcbndpbmRvdy51cCA9IChmdW5jdGlvbigpe1xyXG50cnl7XHJcbnZhciB0O1xyXG5yZXR1cm4gZnVuY3Rpb24gdXAoKSB7XHJcbiAgdmFyIHRvcCA9IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gIGlmKHRvcCA+IDApIHtcclxuICAgIHdpbmRvdy5zY3JvbGxCeSgwLC0xMDApO1xyXG4gICAgdCA9IHNldFRpbWVvdXQodXAsNTApO1xyXG4gIH0gZWxzZSBjbGVhclRpbWVvdXQodCk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbn0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSl9O1xyXG59KSgpO1xyXG4qL1xyXG5cclxuLypcclxuOyhmdW5jdGlvbigpe1xyXG50cnl7XHJcblx0Ly8gU0hPVyBDQVJUXHJcblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWNsaWNrLXNob3cnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCBcIiBzaG93aW5nIGNhcnQgXCIgKTtcclxuXHJcblx0XHR2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWNsaWNrLXNob3cnKTtcclxuXHRcdGMuY2xhc3NMaXN0LnJlbW92ZSgnZy1zaG93Jyk7XHJcblx0XHRjLmNsYXNzTGlzdC5hZGQoJ2ctaGlkZScpO1xyXG5cclxuXHRcdHZhciBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtY2xpY2staGlkZScpO1xyXG5cdFx0aC5jbGFzc0xpc3QucmVtb3ZlKCdnLWhpZGUnKTtcclxuXHRcdGguY2xhc3NMaXN0LmFkZCgnZy1zaG93Jyk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItaGVhZGVyLWNhcnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdnLXBvcy1yZWxhdGl2ZScpO1xyXG5cclxuXHRcdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXItY2FydC1mb3Itb3BhY2l0eScpO1xyXG5cdFx0Yi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWNhcnQtZm9yLW9wYWNpdHknKTtcclxuXHJcblxyXG5cdFx0Y29uc29sZS5sb2coIGggKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBISURFIENBUlRcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItaGVhZGVyLWNhcnRfX2Nsb3NlLXBvcHVwJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyggXCIgaGlkaW5nIGNhcnQgXCIgKTtcclxuXHJcblx0XHR2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWNsaWNrLXNob3cnKTtcclxuXHRcdGMuY2xhc3NMaXN0LmFkZCgnZy1zaG93Jyk7XHJcblx0XHRjLmNsYXNzTGlzdC5yZW1vdmUoJ2ctaGlkZScpO1xyXG5cclxuXHRcdHZhciBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtY2xpY2staGlkZScpO1xyXG5cdFx0aC5jbGFzc0xpc3QuYWRkKCdnLWhpZGUnKTtcclxuXHRcdGguY2xhc3NMaXN0LnJlbW92ZSgnZy1zaG93Jyk7XHJcblxyXG5cdFx0dmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlci1jYXJ0LWZvci1vcGFjaXR5Jyk7XHJcblx0XHRiLmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXBwZXItY2FydC1mb3Itb3BhY2l0eScpO1xyXG5cclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWhlYWRlci1jYXJ0JykuY2xhc3NMaXN0LmFkZCgnZy1wb3MtcmVsYXRpdmUnKTtcclxuXHJcblxyXG5cdFx0Y29uc29sZS5sb2coIGggKTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBERUxFVEUgSVRFTVxyXG5cclxuXHR2YXIgY19pdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItaGVhZGVyLWNhcnRfX2RlbGV0ZS1pdGVtJyk7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICB2YXIgaW5kID0gaTtcclxuXHQgIDsoZnVuY3Rpb24oaSl7XHJcblx0XHRjX2l0ZW1zW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgaW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG5cdFx0XHR2YXIgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyLWRlbGV0ZS1pdGVtLScraW5kZXgpO1xyXG5cdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnIGl0ZW0gJyArIGluZGV4ICsgJyBpcyByZW1vdmVkJyk7XHJcblx0XHR9O1xyXG5cdCAgfSkoaW5kKTtcclxuXHR9XHJcblxyXG59IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpfTtcclxufSkoKTtcclxuKi9cclxuXHJcbjsoZnVuY3Rpb24oKXtcclxudHJ5e1xyXG5cdHZhciBzcGVlZCA9IDUwMDAwO1xyXG5cdHZhciBpbWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1tYWluLWhlYWRlci1zbGlkZXJfX2ltZycpO1xyXG5cdHZhciBoZWFkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1tYWluLWhlYWRlci1vZmZlcl9wJyk7XHJcblx0dmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWFpbi1oZWFkZXItYnRuLXdyYXBfX2lucHV0Jyk7XHJcblx0dmFyIG5vdyA9IDA7XHJcblx0dmFyIGxlbiA9IDM7XHJcblxyXG5mdW5jdGlvbiBzbGlkZXIoc2V0dGluZ3MpIHtcclxuXHR2YXIgc3BlZWQgPSBzZXR0aW5ncy5zcGVlZCB8fCA1MDAwO1xyXG5cdHZhciBpdGVtcyA9IHNldHRpbmdzLml0ZW1zO1xyXG5cdHZhciBub3cgPSBzZXR0aW5ncy5ub3cgfHwgMDtcclxuXHR2YXIgbGVuID0gc2V0dGluZ3MubGVuIHx8IDM7XHJcblxyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVuIDsgaSsrKXtcclxuXHJcblx0XHRcdGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRpbWdzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRoZWFkZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRidG5baV0uY2xhc3NMaXN0LmFkZChcImctc2xpZGVcIik7XHJcblxyXG5cdFx0fTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxlbiA7IGkrKyl7XHJcblxyXG5cdFx0XHRcdGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRpbWdzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRoZWFkZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRidG5baV0uY2xhc3NMaXN0LmFkZChcImctZGlzcGxheS1ub25lXCIpO1xyXG5cclxuXHRcdFx0fTtcclxuXHRcdFx0aWYobm93ID09IGxlbi0xKSB7XHJcblx0XHRcdFx0bm93ID0gMFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5vdysrO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aXRlbXNbbm93XS5jbGFzc0xpc3QucmVtb3ZlKFwiZy1kaXNwbGF5LW5vbmVcIik7XHJcblx0XHRcdGl0ZW1zW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRpbWdzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctZGlzcGxheS1ub25lXCIpO1xyXG5cdFx0XHRpbWdzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRoZWFkZXJzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctZGlzcGxheS1ub25lXCIpO1xyXG5cdFx0XHRoZWFkZXJzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRidG5bbm93XS5jbGFzc0xpc3QucmVtb3ZlKFwiZy1kaXNwbGF5LW5vbmVcIik7XHJcblx0XHRcdGJ0bltub3ddLmNsYXNzTGlzdC5yZW1vdmUoXCJnLXNsaWRlXCIpO1xyXG5cclxuXHRcdH0sIDUwMClcclxuXHR9LCBzcGVlZCk7XHJcbn1cclxuXHJcbnNsaWRlcih7XHJcblx0aXRlbXM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWFpbi1oZWFkZXJfX2l0ZW0nKVxyXG59KTtcclxuXHJcbn0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSl9O1xyXG59KSgpO1xyXG5cclxuXHJcbi8qXHJcbjsoZnVuY3Rpb24oKXtcclxudHJ5e1xyXG5cdHZhciBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItY2F0ZWdvcnknKTtcclxuXHR2YXIgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1jYXRlZ29yeS1hcnJvdycpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNhdGVnb3JpZXMsIGZ1bmN0aW9uKGl0ZW0pe1xyXG5cdFx0aXRlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgdGFyZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YXJnJyk7XHJcblx0XHRcdHNldG5ld3RhcmdldCh0YXJnKTtcclxuXHRcdH07XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gc2V0bmV3dGFyZ2V0ICh0YXJnKSB7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFycm93LCBmdW5jdGlvbihpdGVtKXtcclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYi1jYXRlZ29yeS1hcnJvd19fYWN0aXZlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRhcnJvd1t0YXJnXS5jbGFzc0xpc3QuYWRkKFwiYi1jYXRlZ29yeS1hcnJvd19fYWN0aXZlXCIpO1xyXG5cdH1cclxuXHJcbn0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSl9O1xyXG59KSgpO1xyXG4qL1xyXG5cclxuXHJcbjsoZnVuY3Rpb24oKXtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHQgIHZhciBteUxhdExuZyA9IHtsYXQ6IDU1Ljc1NjM4OTY3LCBsbmc6IDM3LjYyMzI4MTQ4fTtcclxuXHJcblx0ICAvLyBDcmVhdGUgYSBtYXAgb2JqZWN0IGFuZCBzcGVjaWZ5IHRoZSBET00gZWxlbWVudCBmb3IgZGlzcGxheS5cclxuXHQgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG5cdCAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG5cdCAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcblx0ICAgIHpvb206IDRcclxuXHQgIH0pO1xyXG5cclxuXHQgIC8vIENyZWF0ZSBhIG1hcmtlciBhbmQgc2V0IGl0cyBwb3NpdGlvbi5cclxuXHQgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHQgICAgbWFwOiBtYXAsXHJcblx0ICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuXHQgICAgdGl0bGU6ICfQn9GA0LjQstC10YInXHJcblx0ICB9KTtcclxuXHR9XHJcbiAgaW5pdE1hcCgpO1xyXG5cclxuLypcclxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnaW5pdF9nb29nbGUnLCBpbml0X2dvb2dsZSk7XHJcbnZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRfZ29vZ2xlKCkge1xyXG5cdFx0dmFyIG1hcE9wdGlvbnMgPSB7XHJcblx0XHRcdFx0Y2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDYxLjMyMjk5Nyw4My4xMDc5MDkpLFxyXG5cdFx0XHRcdHpvb206IDMsXHJcblx0XHRcdFx0em9vbUNvbnRyb2w6IGZhbHNlLFxyXG5cdFx0XHRcdGRpc2FibGVEb3VibGVDbGlja1pvb206IGZhbHNlLFxyXG5cdFx0XHRcdG1hcFR5cGVDb250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRzdHlsZTogZ29vZ2xlLm1hcHMuTWFwVHlwZUNvbnRyb2xTdHlsZS5IT1JJWk9OVEFMX0JBUixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjYWxlQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRzY3JvbGx3aGVlbDogZmFsc2UsXHJcblx0XHRcdFx0cGFuQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRkcmFnZ2FibGUgOiB0cnVlLFxyXG5cdFx0XHRcdG92ZXJ2aWV3TWFwQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdG9wZW5lZDogZmFsc2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG5cdFx0fVxyXG5cdFx0dmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcblx0XHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuXHRcdHZhciBsb2NhdGlvbnMgPSBbXHJcblsn0KXQsNC90YLRiyDQnNCw0L3RgdC40LnRgdC6JywgJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnLCAndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcsIDYxLjAwOTA5MTg5OTk5OTk5LCA2OS4wMzc0NTk1OTk5OTk5MiwgJ2h0dHBzOi8vbWFwYnVpbGRyLmNvbS9hc3NldHMvaW1nL21hcmtlcnMvZGVmYXVsdC5wbmcnXVxyXG5cdFx0XTtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAobG9jYXRpb25zW2ldWzFdID09J3VuZGVmaW5lZCcpeyBkZXNjcmlwdGlvbiA9Jyc7fSBlbHNlIHsgZGVzY3JpcHRpb24gPSBsb2NhdGlvbnNbaV1bMV07fVxyXG5cdFx0XHRcdGlmIChsb2NhdGlvbnNbaV1bMl0gPT0ndW5kZWZpbmVkJyl7IHRlbGVwaG9uZSA9Jyc7fSBlbHNlIHsgdGVsZXBob25lID0gbG9jYXRpb25zW2ldWzJdO31cclxuXHRcdFx0XHRpZiAobG9jYXRpb25zW2ldWzNdID09J3VuZGVmaW5lZCcpeyBlbWFpbCA9Jyc7fSBlbHNlIHsgZW1haWwgPSBsb2NhdGlvbnNbaV1bM107fVxyXG5cdFx0XHQgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSd1bmRlZmluZWQnKXsgd2ViID0nJzt9IGVsc2UgeyB3ZWIgPSBsb2NhdGlvbnNbaV1bNF07fVxyXG5cdFx0XHQgaWYgKGxvY2F0aW9uc1tpXVs3XSA9PSd1bmRlZmluZWQnKXsgbWFya2VyaWNvbiA9Jyc7fSBlbHNlIHsgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTt9XHJcblx0XHRcdFx0bWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRcdFx0XHRcdGljb246IG1hcmtlcmljb24sXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVs1XSwgbG9jYXRpb25zW2ldWzZdKSxcclxuXHRcdFx0XHRcdFx0bWFwOiBtYXAsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBsb2NhdGlvbnNbaV1bMF0sXHJcblx0XHRcdFx0XHRcdGRlc2M6IGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0XHR0ZWw6IHRlbGVwaG9uZSxcclxuXHRcdFx0XHRcdFx0ZW1haWw6IGVtYWlsLFxyXG5cdFx0XHRcdFx0XHR3ZWI6IHdlYlxyXG5cdFx0XHRcdH0pO1xyXG5saW5rID0gJyc7ICAgICB9XHJcbn1cclxuKi9cclxuXHJcbn0pKCk7XHJcblxyXG47KGZ1bmN0aW9uKCl7XHJcblxyXG5cdHZhciBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1hZHZhbnRhZ2VzX19pdGVtLWFycicpO1xyXG5cdHZhciBnbyA9IHRydWU7XHJcblx0dmFyIGVsID0gMTtcclxuXHRzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0ZWwgPT0gMSA/IGdvID0gdHJ1ZSA6ICcnIDtcclxuXHRcdGVsID09IDcgPyBnbyA9IGZhbHNlIDogJycgO1xyXG5cdFx0dmFyIG51bSA9IGdvID8gKytlbCA6IC0tZWwgO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcnJvd3MsIGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHQgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFxyXG5cdFx0XHRcdFx0XCJiLWFkdmFudGFnZXNfX2l0ZW0tYXJyMVwiLCBcImItYWR2YW50YWdlc19faXRlbS1hcnIyXCIsXHJcblx0XHRcdFx0XHRcImItYWR2YW50YWdlc19faXRlbS1hcnIzXCIsIFwiYi1hZHZhbnRhZ2VzX19pdGVtLWFycjRcIixcclxuXHRcdFx0XHRcdFwiYi1hZHZhbnRhZ2VzX19pdGVtLWFycjVcIiwgXCJiLWFkdmFudGFnZXNfX2l0ZW0tYXJyNlwiLFxyXG5cdFx0XHRcdFx0XCJiLWFkdmFudGFnZXNfX2l0ZW0tYXJyN1wiXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoICdiLWFkdmFudGFnZXNfX2l0ZW0tYXJyJytudW0gKSA7XHJcblxyXG5cdFx0fSk7XHJcblx0fSwgMjUwICk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbn0sIDEwMDAgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
