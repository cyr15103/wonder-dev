particlesJS("particle-div", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "images/bubble.png",
        "width": 200,
        "height": 200
      }
    },
    "opacity": {
      "value": 0.4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 0,
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
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 150,
        "size": 55,
        "duration": 3,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 50,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
});
let canvas = window.pJSDom[0].pJS;

//color choices array
var colors= ['images/bubble.png', 'images/bubble-blue.png', 'images/bubble-grey.png', 'images/bubble-pink.png', 'images/bubble-green.png', 'images/bubble-yellow.png', 'images/bubble-purple.png'];

//returns a random value
Array.prototype.getRandom= function(cut){
  var i= Math.floor(Math.random()*this.length);
  if(cut && i in this){
      return this.splice(i, 1)[0];
  }
  return this[i];
}   
window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.charCode === 99) {
canvas.particles.shape.image.src = colors.getRandom();
canvas.fn.particlesRefresh();   
	}
}
/*window.addEventListener("keydown", moveSomething, false);
function moveSomething(e) {
  if (e.keyCode === 38) {
      if (canvas.particles.number.value === 100 /* && canvas.particles.size.value === 10*/ //) {
       // canvas.particles.number.value = 250;
        //canvas.particles.size.value = 7.5; 
     // }  
    //  else if (canvas.particles.number.value === 250 /* && canvas.particles.size.value === 7.5 */) {
      //    canvas.particles.number.value = 500;
         // canvas.particles.size.value = 5;
      //  }
   //   else if (canvas.particles.number.value === 500 /* && canvas.particles.size.value === 5*/ ) {
       //   canvas.particles.number.value = 1000;
          //canvas.particles.size.value = 2.5;
    //  }canvas.fn.particlesRefresh(); 
 // }
 // else if(e.keyCode === 40){
   //   if (canvas.particles.number.value === 1000 /* && canvas.particles.size.value === 2.5 */) {
   //     canvas.particles.number.value = 500;
        //canvas.particles.size.value = 5;
    //  } else if (canvas.particles.number.value === 500 /* && canvas.particles.size.value === 5 */ ){
    //    canvas.particles.number.value = 250;
       //canvas.particles.size.value = 7.5;
     // } else if (canvas.particles.number.value === 250 /*&& canvas.particles.size.value === 7.5*/ ) {
     //   canvas.particles.number.value = 100;
        //canvas.particles.size.value = 10;
   //   }canvas.fn.particlesRefresh(); 
 // }
// Assign a new value for particle number
//}  
         
