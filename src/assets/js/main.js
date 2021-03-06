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

// 'web_design_sec' go bottom function
$( '.web_design_sec__go_bottom' ).on( 'click', function(e) {
	e.preventDefault();
	var dest = $( '.design_effect' );
	$('html, body').animate({scrollTop: dest.offset().top}, '300');
} );

//web_design_sec swiper
var web_design_sec_swiper = new Swiper('.web_design_sec_slider >.swiper-container ', {
	autoplay: {
		delay: 3000,
	},
	effect: 'fade',
	loop: true
});

// 'your position' section sliders
var categories_title_list = new Swiper('.categories_title_list', {
	spaceBetween: 5,
	slidesPerView: 2.5,
	loop: true,
	autoHeight: true,
	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		400: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 5,
		},
		1500: {
			slidesPerView: 6,
			spaceBetween: 10
		  },
		1918: {
		  slidesPerView: 9,
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
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 3,
		},
		1700: {
		slidesPerView: 3.5,
		},
		1918: {
		  slidesPerView: 3.5,
		}
	  }
  });

  //portfolio swiper
var portfolio_swiper = new Swiper('.portfolio__wrapper > .swiper-container ', {
	slidesPerView: 1.5,
	spaceBetween: 35,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 35
		  },
		768: {
		  slidesPerView: 3,
		  spaceBetween: 35
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 35
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
  var blog__posts = new Swiper('.blog__wrapper > .swiper-container', {
	spaceBetween: 32,
	slidesPerView: 1,
	loop: true,
	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	breakpoints: {
		576: {
			slidesPerView: 1.5,
			spaceBetween: 32
		  },
		  768: {
			slidesPerView: 2.5,
			spaceBetween: 32
		  },
		992: {
		  slidesPerView: 3,
		  spaceBetween: 32
		}
	  }
  });

//customers swiper
var customers_swiper = new Swiper('.customers__wrapper > .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 35,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		768: {
		  slidesPerView: 6,
		  spaceBetween: 13
		},
		576: {
			slidesPerView: 4,
			spaceBetween: 13
		  },
		  320: {
			slidesPerView: 3,
			spaceBetween: 13
		  },		
	  }
  });

   //videos swiper
   var videos_swiper = new Swiper('.videos__wrapper > .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 34,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		768: {
		  slidesPerView: 3,
		  spaceBetween: 34
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 34
		  },		
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
	
	//   var audio_url = '';
	//   var xhr = new XMLHttpRequest();
	//   xhr.open('GET','http://localhost:3000/assets/audio/test.mp3', true);
	//   xhr.responseType = 'arraybuffer';
	//   var blob_url;
	//   xhr.onload = function(e) {
	//   var responseArray = new Uint8Array(this.response).buffer; 
	// 	responseArray = responseArray.slice(2);
	// 	   var blob = new Blob([responseArray]);
	// 	   var URLObject = window.webkitURL || window.URL;
	// 	   blob_url =       URLObject.createObjectURL(blob);
	// 	//    audio_url = blob_url;
	// 	   console.log( this.response );
	// 	   wavesurferInit(blob_url);

	//   };
	//   xhr.send();
	  
	//   function wavesurferInit(blob_url) {
	// 	  var wavesurfer = WaveSurfer.create({
	// 										container: '#waveform',
	// 										mediaType: 'audio',
	// 										waveColor: '#f0f1f7',
	// 										barWidth: 3,
	// 										cursorColor: 'transparent',
	// 										backend: 'MediaElement',
	// 										progressColor: '#ff4342',
	// 										barGap: 4,
	// 										responsive: true,
	// 										height: 66
	// 									});
	// 	  wavesurfer.loadBlob(blob_url);
	// 	  wavesurfer.on('ready', function () {
	// 		$( '.duration' ).html( formatTime( wavesurfer.getDuration() ) );
	// 		$( '.podcast_button' ).on( 'click', function(){
	// 			var icon_element = $( this ).find('span');
	// 			if( icon_element.hasClass('icon-play') ) {
	// 				icon_element.removeClass( 'icon-play' );
	// 				icon_element.addClass( 'icon-pause' );
	// 				wavesurfer.play();
	// 			}else{
	// 				icon_element.removeClass( 'icon-pause' );
	// 				icon_element.addClass( 'icon-play' );
	// 				wavesurfer.pause();
	// 			}
	// 		} );
	// 	});
	// 	wavesurfer.on( 'audioprocess', function() {
	// 		progress_percent = wavesurfer.getCurrentTime()*100/wavesurfer.getDuration();
	// 		$( '.current_time' ).html( formatTime( wavesurfer.getCurrentTime() ) );
	// 		setProgress( progress_percent );
	// 	} );
	//   }


	  var wavesurfer = WaveSurfer.create({
		container: '#waveform',
		mediaType: 'audio',
		waveColor: '#f0f1f7',
		barWidth: 3,
		cursorColor: 'transparent',
		backend: 'MediaElement',
		progressColor: '#ff4342',
		barGap: 4,
		responsive: true,
		height: 66
	});

	wavesurfer.load( '/assets/audio/test.mp3' );
	
	wavesurfer.on('ready', function () {
		$( '.duration' ).html( formatTime( wavesurfer.getDuration() ) );
		$( '.podcast_button' ).on( 'click', function(){
			var icon_element = $( this ).find('span');
			if( icon_element.hasClass('icon-play') ) {
				icon_element.removeClass( 'icon-play' );
				icon_element.addClass( 'icon-pause' );
				wavesurfer.play();
			}else{
				icon_element.removeClass( 'icon-pause' );
				icon_element.addClass( 'icon-play' );
				wavesurfer.pause();
			}
		} );
	});
	
	
	wavesurfer.on( 'audioprocess', function() {
		progress_percent = wavesurfer.getCurrentTime()*100/wavesurfer.getDuration();
		$( '.current_time' ).html( formatTime( wavesurfer.getCurrentTime() ) );
		setProgress( progress_percent );
	} );
	