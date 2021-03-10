// Note to Gabe: DON'T BREAK SHIT!

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("topButt").style.display = "block";
    }else{
      document.getElementById("topButt").style.display = "none";
    }
}

function topButt(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

if (mob = null){
    var mob = "no"
}

function mobileAlert(x) {
  if (wide.matches) { // If media query matches
    if (mob = "yes") {
        null
    } else {
      var mob = "yes"
      alert("You appear to be on mobile, we have a mobile optimized site at 'm.contrastcrew.co.uk'.");
  }
  } else {
   null;
  }
}

var wide = window.matchMedia("(max-width: 700px)")
mobileAlert(wide) // Call listener function at run time
wide.addListener(mobileAlert) // Attach listener function on state changes
