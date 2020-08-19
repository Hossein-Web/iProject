const header = $('#header');

$(window).on('load', () => {
	WebFont.load({
		google: {
			families: ["Roboto:100,300,400,700"]
		}
	});
	setTimeout(function () {
		$(window).scroll(function () {
			let scrolled = $(window).scrollTop();
			if (scrolled > 350) {
				header.addClass('scrolled');
			} else {
				header.removeClass('scrolled');
			}
		});
	}, 2000);
	AOS.init();
});

// 'your position' section sliders
var categories_title_list = new Swiper('.categories_title_list', {
	spaceBetween: 5,
	slidesPerView: 1,
	loop: true,
	autoHeight: true,
	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		576: {
		  slidesPerView: 2,
		  spaceBetween: 10
	},
		1200: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		1918: {
		  slidesPerView: 7,
		  spaceBetween: 10
		}
	  }
  });

var categories_description_list = new Swiper('.categories_description_list', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5,
	slidesPerView: 1,
	thumbs: {
	  swiper: categories_title_list,
		multipleActiveThumbs: false
	},
	breakpoints: {
		576: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		992: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		1918: {
		  slidesPerView: 4,
		  spaceBetween: 10
		}
	  }
  });

// faq section
  var coll = document.getElementsByClassName("faq__collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var content = this.nextElementSibling;
	  if (content.style.maxHeight){
		content.style.maxHeight = null;
	  } else {
		content.style.maxHeight = content.scrollHeight + "px" ;
	  } 
	});
  }
  
  // 'blog' section swiper slider
  var blog__posts = new Swiper('.blog__posts', {
	spaceBetween: 32,
	slidesPerView: 1,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	breakpoints: {
		576: {
		  slidesPerView: 2,
		  spaceBetween: 32
		},
		992: {
		  slidesPerView: 3,
		  spaceBetween: 32
		},
		1918: {
		  slidesPerView: 4,
		  spaceBetween: 32
		}
	  }
  });