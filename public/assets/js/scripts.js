$(document).ready(function(){
	/*============================================
	 Page Preloader
	 ==============================================*/

	$(window).load(function(){
		$('#page-loader').fadeOut(500);
	});

	/*============================================
	 Navigation Functions
	 ==============================================*/
	if ($(window).scrollTop()< 10){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()< 10){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');
		}
	});

	$('a.scrollto').click(function(e){
		e.preventDefault();
		var target =$(this).attr('href');
		$('html, body').stop().animate({scrollTop: $(target).offset().top}, 1700, 'easeInOutExpo',
			function(){window.location.hash =target;});

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	/*============================================
	 Tabs
	 ==============================================*/

	$('.toggle-tabs').click(function(e){
		e.preventDefault()

		if($(this).is('.active')){return;}
		$(this).tab('show');

		$(this).siblings('.toggle-tabs').removeClass('active');
		$(this).addClass('active');
	})

	$('.toggle-tabs').on('shown.bs.tab', function (e) {
		$('.tab-content').addClass('fadeOut');

		setTimeout(function(){
			$('.tab-content').removeClass('fadeOut');
		},200)
	})

	/*============================================
	 Filter Projects
	 ==============================================*/

	$('.project-count').each(function(){

		var filter = $(this).parent('.btn').attr('data-filter');
		$(this).text($('.project-item'+filter).length);

	});

	$('#filter-works .btn').click(function(e){
		e.preventDefault();

		$('#filter-works .btn').removeClass('active');
		$(this).addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').addClass('filtered');
		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
		});

		$('#projects-container').addClass('anim-out');

		setTimeout(function(){
			$('.project-item').show();
			$('.project-item.filtered').hide();
			$('#projects-container').removeClass('anim-out');
		},450);

		scrollSpyRefresh();
		waypointsRefresh();
	});


	/*============================================
	 Placeholder Detection
	 ==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}

	/*============================================
	 Waypoints Animations
	 ==============================================*/
	$(window).load(function(){

		$('.scrollimation').waypoint(function(){
			$(this).addClass('in');
		},{offset:'95%'});

	});

	/*============================================
	 Refresh scrollSpy function
	 ==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}

	/*============================================
	 Refresh waypoints function
	 ==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}

	/*============================================
	 MAC MOCK-UP SCROLLER #1
	 ==============================================*/
	$(".handle").draggable({
		axis: "x",
		containment: "parent",
		drag: function() {
			var position = $(this).position();
			var positionExtra = position.left + 6;
			$(".coverImage").width(positionExtra + "px");
		}
	});


	/*============================================
	 MAC MOCK-UP SCROLLER #2
	 ==============================================*/
	$(".handle2").draggable({
		axis: "x",
		containment: "parent",
		drag: function() {
			var position = $(this).position();
			var positionExtra = position.left + 6;
			$(".coverImage2").width(positionExtra + "px");
		}
	});

});


/*============================================
 IPHONE SKILLS
 ==============================================*/
var c_h = $("#screen").height();
$("a:not(.title)").click(function(){
	var $label = $(this).find("span");
	var $p_li = $(this).parent();
	var $p_ul = $(this).parent().parent();
	var $pp_ul = $p_ul.parent().parent();
	var $pp_li = $(this).parent().parent().parent();
	var p_ul_top = $p_ul.position().top;
	var p_li_top= $p_li.position().top;
	if($(this).hasClass("title")) {
		$(this).removeClass("title");
		$label.animate({ marginLeft : 40 },600,"linear");
		$p_li.animate({ height: 50 }, 600,"linear");
		$pp_li.animate({ height: c_h }, 600,"linear");
		$p_ul.delay(150).animate({ top: 0, height: c_h-50 }, 450,"linear");
		$pp_ul.animate({ top : "+=50px" }, 150, "linear");
		$p_ul.removeClass("noscroll");
	} else {

		if($(this).parent().find("ul").length<=0) return false;
		$p_ul.animate({ top : -p_li_top, height : c_h+p_li_top },450, "linear").addClass("noscroll");
		$pp_ul.delay(450).animate({ top : "-=50px", height : c_h+p_ul_top }, 150, "linear");
		$pp_li.animate({ height : c_h+p_ul_top },600,"linear");
		$p_li.animate({ height : c_h },600,"linear");

		$label.animate({ marginLeft : ($(this).width()-$label.width())/2 },600,"linear");

		$(this).addClass("title");
	}

});




// Cards
