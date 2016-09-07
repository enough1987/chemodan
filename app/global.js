setTimeout(function () {
    ;
    (function () {
        var l_arrow = document.getElementById('g-goods-l-arrow');
        var r_arrow = document.getElementById('g-goods-r-arrow');
        var goods = document.getElementById('b-goods');
        var event_func = function (event) {
            var start_point = goods.offsetTop + 25;
            var end_point = goods.offsetTop + goods.clientHeight - 200;
            var mouse_y = event.pageY;
            var result = mouse_y - 80;
            if (start_point > mouse_y)
                result = start_point;
            if (end_point < mouse_y)
                result = end_point;
            l_arrow.style.top = result;
            r_arrow.style.top = result;
            //console.log( l_arrow.style.top , ' - ', start_point  , end_point , mouse_y );		
        };
        goods.addEventListener("mousemove", event_func, false);
        goods.addEventListener("mousewheel", event_func, false);
    })();
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
    })();
}, 1000);

//# sourceMappingURL=data:application/json;base64,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RUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0EsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDO0FBR0wsQ0FBQyxFQUFFLElBQUksQ0FBRSxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG47KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHJcblx0dmFyIGxfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZy1nb29kcy1sLWFycm93Jyk7XHJcblx0dmFyIHJfYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZy1nb29kcy1yLWFycm93Jyk7XHJcblx0dmFyIGdvb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZ29vZHMnKTtcclxuXHJcblx0dmFyIGV2ZW50X2Z1bmMgPSBmdW5jdGlvbihldmVudCl7XHJcblxyXG4gICAgXHR2YXIgc3RhcnRfcG9pbnQgPSAgZ29vZHMub2Zmc2V0VG9wICsgMjU7ICAgXHJcblx0XHR2YXIgZW5kX3BvaW50ID0gZ29vZHMub2Zmc2V0VG9wICsgZ29vZHMuY2xpZW50SGVpZ2h0IC0gMjAwOyBcclxuXHRcdHZhciBtb3VzZV95ID0gZXZlbnQucGFnZVk7IFxyXG5cclxuXHRcdHZhciByZXN1bHQgPSBtb3VzZV95IC0gODA7XHJcblx0XHRpZiAoIHN0YXJ0X3BvaW50ID4gbW91c2VfeSApIHJlc3VsdCA9IHN0YXJ0X3BvaW50O1xyXG5cdFx0aWYgKCBlbmRfcG9pbnQgPCBtb3VzZV95ICkgcmVzdWx0ID0gZW5kX3BvaW50O1xyXG5cclxuXHRcdGxfYXJyb3cuc3R5bGUudG9wID0gcmVzdWx0O1xyXG5cdFx0cl9hcnJvdy5zdHlsZS50b3AgPSByZXN1bHQ7XHJcbiAgICBcdC8vY29uc29sZS5sb2coIGxfYXJyb3cuc3R5bGUudG9wICwgJyAtICcsIHN0YXJ0X3BvaW50ICAsIGVuZF9wb2ludCAsIG1vdXNlX3kgKTtcdFx0XHJcblx0fVxyXG5cclxuXHRnb29kcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50X2Z1bmMsIGZhbHNlKTtcclxuXHRnb29kcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBldmVudF9mdW5jLCBmYWxzZSk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbjsoZnVuY3Rpb24oKXtcclxudHJ5e1xyXG5cdHZhciBzcGVlZCA9IDUwMDAwO1xyXG5cdHZhciBpbWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1tYWluLWhlYWRlci1zbGlkZXJfX2ltZycpO1xyXG5cdHZhciBoZWFkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1tYWluLWhlYWRlci1vZmZlcl9wJyk7XHJcblx0dmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWFpbi1oZWFkZXItYnRuLXdyYXBfX2lucHV0Jyk7XHJcblx0dmFyIG5vdyA9IDA7XHJcblx0dmFyIGxlbiA9IDM7XHJcblxyXG5mdW5jdGlvbiBzbGlkZXIoc2V0dGluZ3MpIHtcclxuXHR2YXIgc3BlZWQgPSBzZXR0aW5ncy5zcGVlZCB8fCA1MDAwO1xyXG5cdHZhciBpdGVtcyA9IHNldHRpbmdzLml0ZW1zO1xyXG5cdHZhciBub3cgPSBzZXR0aW5ncy5ub3cgfHwgMDtcclxuXHR2YXIgbGVuID0gc2V0dGluZ3MubGVuIHx8IDM7XHJcblxyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVuIDsgaSsrKXtcclxuXHJcblx0XHRcdGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRpbWdzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRoZWFkZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLXNsaWRlXCIpO1xyXG5cdFx0XHRidG5baV0uY2xhc3NMaXN0LmFkZChcImctc2xpZGVcIik7XHJcblxyXG5cdFx0fTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxlbiA7IGkrKyl7XHJcblxyXG5cdFx0XHRcdGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRpbWdzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRoZWFkZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJnLWRpc3BsYXktbm9uZVwiKTtcclxuXHRcdFx0XHRidG5baV0uY2xhc3NMaXN0LmFkZChcImctZGlzcGxheS1ub25lXCIpO1xyXG5cclxuXHRcdFx0fTtcclxuXHRcdFx0aWYobm93ID09IGxlbi0xKSB7XHJcblx0XHRcdFx0bm93ID0gMFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5vdysrO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aXRlbXNbbm93XS5jbGFzc0xpc3QucmVtb3ZlKFwiZy1kaXNwbGF5LW5vbmVcIik7XHJcblx0XHRcdGl0ZW1zW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRpbWdzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctZGlzcGxheS1ub25lXCIpO1xyXG5cdFx0XHRpbWdzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRoZWFkZXJzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctZGlzcGxheS1ub25lXCIpO1xyXG5cdFx0XHRoZWFkZXJzW25vd10uY2xhc3NMaXN0LnJlbW92ZShcImctc2xpZGVcIik7XHJcblxyXG5cdFx0XHRidG5bbm93XS5jbGFzc0xpc3QucmVtb3ZlKFwiZy1kaXNwbGF5LW5vbmVcIik7XHJcblx0XHRcdGJ0bltub3ddLmNsYXNzTGlzdC5yZW1vdmUoXCJnLXNsaWRlXCIpO1xyXG5cclxuXHRcdH0sIDUwMClcclxuXHR9LCBzcGVlZCk7XHJcbn1cclxuXHJcbnNsaWRlcih7XHJcblx0aXRlbXM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWFpbi1oZWFkZXJfX2l0ZW0nKVxyXG59KTtcclxuXHJcbn0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSl9O1xyXG59KSgpO1xyXG5cclxuXHJcbjsoZnVuY3Rpb24oKXtcclxuXHRmdW5jdGlvbiBpbml0TWFwKCkge1xyXG5cdCAgdmFyIG15TGF0TG5nID0ge2xhdDogNTUuNzU2Mzg5NjcsIGxuZzogMzcuNjIzMjgxNDh9O1xyXG5cclxuXHQgIC8vIENyZWF0ZSBhIG1hcCBvYmplY3QgYW5kIHNwZWNpZnkgdGhlIERPTSBlbGVtZW50IGZvciBkaXNwbGF5LlxyXG5cdCAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcblx0ICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcblx0ICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuXHQgICAgem9vbTogNFxyXG5cdCAgfSk7XHJcblxyXG5cdCAgLy8gQ3JlYXRlIGEgbWFya2VyIGFuZCBzZXQgaXRzIHBvc2l0aW9uLlxyXG5cdCAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdCAgICBtYXA6IG1hcCxcclxuXHQgICAgcG9zaXRpb246IG15TGF0TG5nLFxyXG5cdCAgICB0aXRsZTogJ9Cf0YDQuNCy0LXRgidcclxuXHQgIH0pO1xyXG5cdH1cclxuICBpbml0TWFwKCk7XHJcbn0pKCk7XHJcblxyXG5cclxufSwgMTAwMCApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
