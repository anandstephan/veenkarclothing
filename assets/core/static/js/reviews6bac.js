var reviewsContainer = document.querySelector(".reviews-grid");
var allReviews = document.querySelectorAll(".reviews-block");
var cityCaption = document.querySelector(".reviews-intro h2");
var pins = Array.prototype.slice.call(document.querySelectorAll("#reviews .city-pin"));
var pinsLength = pins.length;
var activePinIndex = 0;

//Set max height of the page for proper stacking
function setReviewsPageHeight() {
  var reviewsHeight = 0;
  var maxHeight;
  if (allReviews) {
    for (var i = 0; i < allReviews.length; i++) {
      var review = allReviews[i];
      var reviewHeight = review.offsetHeight;
      reviewsHeight = reviewsHeight + reviewHeight;
    }
    if (window.innerWidth < 768) {
      maxHeight = reviewsHeight + 600;
    } else if (window.innerWidth < 1024){
      maxHeight = reviewsHeight/2 + 600;
    } else {
      maxHeight = reviewsHeight/3 + 300;
    }
    reviewsContainer.style.height = maxHeight + 'px';
  }
}

//Reviews Intro Animation
var nextCity = function() {
  setInterval(function(){
    var activePin = document.querySelector('#reviews .city-pin.active');
    if( pins.indexOf(activePin) == pins.length-1 ){
      activePinIndex = 0;
    } else {
      activePinIndex++;
    }
    activePin.classList.remove('active');
    var cityName = document.querySelectorAll("#reviews .city-pin")[activePinIndex].id;
    cityCaption.className="";
    cityCaption.classList.add(cityName);
    document.querySelectorAll("#reviews .city-pin")[activePinIndex].classList.add('active');
  }, 2000);
}

window.addEventListener('DOMContentLoaded', function () { //OnLoad Events
  setReviewsPageHeight();
  nextCity();
});

window.addEventListener('resize', function () { //Resize Events
  setReviewsPageHeight();
});