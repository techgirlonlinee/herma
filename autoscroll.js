// var scroll = setInterval(function(){ 
// 	window.scrollBy(50, 10000);
// 	}, 10000);

// function scrollDown() { 
//    scroll = setInterval(function(){ 
//    	window.scrollBy(50, 1000); 
//    	console.log('start');
//    }, 1500);
// }

// scrollDown()

// function stop_scroll_down() {
//    clearInterval(scroll);
//    console.log('stop');
// }




function scroll(speed) {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function(
    	) {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}

speed = 12000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);


// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// topFunction()



