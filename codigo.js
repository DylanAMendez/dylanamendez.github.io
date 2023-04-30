particlesJS(
	{
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#4d4d4d"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}
);

 // --SCROLLREVEAL-- 

 window.sr = ScrollReveal();

     sr.reveal('.showcase', {
     	 duration: 2000,
     	 origin: 'bottom',
     	 distance: '-1px'
     });

     sr.reveal('.content', {
     	duration: 2900,
     	origin: 'right',
     	distance: '-800px'
     });

    //  SOCIAL 
  // const floating_btn = document.querySelector('.floating-btn');
  // const close_btn = document.querySelector('.close-btn');
  // const social_panel_container = document.querySelector('.social-panel-container');

  // floating_btn.addEventListener('click', ()=>{
  //   social_panel_container.classList.toggle('visible')
  // });

  // close_btn.addEventListener('click', () => {
  //   social_panel_container.classList.remove('visible')
  // });

  // Sticky 

  window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("fixed", window.scrollY > 550);
});

window.addEventListener("scroll", function(){
    var ul = document.querySelector("ul");
    ul.classList.toggle("fixeddd2", window.scrollY > 550);
});

