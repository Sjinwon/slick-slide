$('.custom-slider').slick({
	slide: 'div', /* 꼭 div가 아니어도 괜찮음. html 구조에 따라서 */
	adaptiveHeight: false,
	slidesToShow: 4, /* 평상시에 몇개 보일 건지 */
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	enterPadding: 0,
	centerMode: false,
	draggable: true,
	responsive: [{
			breakpoint: 1200, /* 화면사이즈 */
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                }
            ]
});


$(window).scroll(function () {
	//wScroll변수를 만들어 현재브라우저의 스크롤 탑값을 구한다.
	var wScroll = $(this).scrollTop();

	//Goods Animation
	if (wScroll > 300) {
		$(".goods .left_box, .goods .right_box").each(function (eq) {
			var icons = $(this);
			setTimeout(function () {
				icons.addClass("move");
			}, eq * 100);
		});
	}
	if (wScroll <= 0) {
		$('.goods .left_box, .goods .right_box').removeClass('move');
	}

}); 
