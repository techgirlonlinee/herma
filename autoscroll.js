function scrollY(speed) {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function(
    	) {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}

speed = 12000;

scrollY(speed)
setInterval(function(){scrollY(speed)}, speed * 2);


function scrollX(speed) {
    $('html, body').animate({ scrollLeft: $(document).width() - $(window).width() }, speed, function(
    	) {
        $(this).animate({ scrollLeft: 0 }, speed);
    });
}

speed = 1500;
scrollX(speed)
// setInterval(function(){scrollX(speed)}, speed * 2);

















// function scroll(speed) {
// 	const body = document.querySelector("body")
// 	body.



// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// topFunction()



