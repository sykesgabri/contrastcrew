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

function mobileAlert(x) {
  if (x.matches) { // If media query matches
    alert("You appear to be on mobile, we have a mobile optimized site at 'm.contrastcrew.co.uk'.");
  } else {
   null;
  }
}

var x = window.matchMedia("(max-width: 700px)")
mobileAlert(x) // Call listener function at run time
x.addListener(mobileAlert) // Attach listener function on state changes
