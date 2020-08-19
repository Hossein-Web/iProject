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

  //portfolio swiper
var swiper = new Swiper('.portfolio__wrapper > .swiper-container ', {
	slidesPerView: 1,
	spaceBetween: 35,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
		768: {
		  slidesPerView: 4,
		  spaceBetween: 35
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 35
		  },
		  320: {
			slidesPerView: 2,
			spaceBetween: 35
		  },		
	  }
  });

//customers swiper
   var swiper = new Swiper('.customers__wrapper > .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 35,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		768: {
		  slidesPerView: 4,
		  spaceBetween: 13
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 13
		  },
		  320: {
			slidesPerView: 2,
			spaceBetween: 13
		  },		
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

    // 'podcast' section audio player
	var progress_percent = 0;
	var formatTime = function (time) {
		return [
			Math.floor((time % 3600) / 60), // minutes
			('00' + Math.floor(time % 60)).slice(-2) // seconds
		].join(':');
	};
	
	const circle = document.querySelector('.progress-ring__circle');
	const radius = circle.r.baseVal.value;
	var circumference = radius * 2 * Math.PI;
	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = `${circumference}`;
	function setProgress(percent) {
		const offset = circumference - percent / 100 * circumference;
		circle.style.strokeDashoffset = offset;
	  }
	
	  var wavesurfer = WaveSurfer.create({
		container: '#waveform',
		mediaType: 'audio',
		waveColor: '#f0f1f7',
		barWidth: 3,
		cursorColor: 'transparent',
		progressColor: '#ff4342',
		barGap: 4,
		responsive: true,
		height: 66
	});
	wavesurfer.load('./assets/audio/test.mp3');
	
	wavesurfer.on('ready', function () {
		$( '.duration' ).html( formatTime( wavesurfer.getDuration() ) );
		$( '.podcast_button' ).on( 'click', function(){
			if( $( this ).hasClass( 'paused' ) ) {
				$(this).removeClass( 'paused' );
				$(this).addClass( 'playing' );
				wavesurfer.play();
			}else{
				$(this).removeClass( 'playing' );
				$(this).addClass( 'paused' );
				wavesurfer.pause();
			}
		} );
	});
	
	
	wavesurfer.on( 'audioprocess', function() {
		progress_percent = wavesurfer.getCurrentTime()*100/wavesurfer.getDuration();
		$( '.current_time' ).html( formatTime( wavesurfer.getCurrentTime() ) );
		setProgress( progress_percent );
		console.log( progress_percent );
	} );
	