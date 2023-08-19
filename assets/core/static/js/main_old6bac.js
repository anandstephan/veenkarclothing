"use strict";
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function isValidEmail(address) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(address);
}

function check_product_stock(){
  var out_of_stock = $("body").data("oos")
//  if(out_of_stock == "True"){
//    showPopup('#subscribe');
//  }
}

// --------------------------------------------------------
// Defer Image loading
// --------------------------------------------------------

var deferImages = function (el, eltype) {
  var images = $(el);
  if ( eltype = 'img' ){
    for(var i = 0; i < images.length; i++) {
      if( images[i].getAttribute('data-src') ) {
        images[i].setAttribute('src', images[i].getAttribute('data-src') );
      }
    }
  }
  if ( eltype = 'background-image' ){
    images.removeClass('deferImage');
  }
}

// --------------------------------------------------------
// Layout stuff
// --------------------------------------------------------
// Fix the form autufocus bug on iOS
var fixAutofocus = function () {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('body, html').addClass('fixautofocus');
  };
};

var unfixAutofocus = function () {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    if( $('body').hasClass('fixautofocus') ){
      $('body, html').removeClass('fixautofocus');
    };
  };
};

//get value from cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



var fixBodyScroll = function () {
    $('body, html').addClass('no-scroll');
    if ($(document).height() > $(window).height()) {
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
        $('html').addClass('noscroll').css('top',-scrollTop);
    }
};

var unfixBodyScroll = function () {
    if( $('body').hasClass('no-scroll') ){
      $('body, html').removeClass('no-scroll');
      var scrollTop = parseInt($('html').css('top'));
      $('html').removeClass('noscroll');
      $('html,body').scrollTop(-scrollTop);
    }
};
function applyClassIfElementinView(el,classname){ /*Todo @Sid need to post this to JS*/
  if(isElementInViewport(el))
  {
    $(el).removeClass(classname);
  }
  else{
      $(el).addClass(classname);
  }
}
function isElementInViewport(el){ /*Todo @Sid need to post this to JS*/
  var isInViewport = false
  var elementTop = 0
  if ($(el).offset()) {
    if ($('body').hasClass("polo-home") ) {
      elementTop = $(el).offset().top - 100;
    } else {
      elementTop = $(el).offset().top;
    }
  }
  if ($('body').hasClass("polo-home") ) {
    var elementBottom = elementTop + $(el).outerHeight() + 100;
  } else {
    var elementBottom = elementTop + $(el).outerHeight();
  }
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  if (elementBottom > viewportTop && elementTop < viewportBottom)
      isInViewport = true
  return isInViewport
}

function isElementFullyInViewport(el){
  var isInViewport = false
  var elementTop = 0
  if ($(el).offset()) {
    if ($('body').hasClass("polo-home") ) {
      elementTop = $(el).offset().top - 100;
    } else {
      elementTop = $(el).offset().top;
    }
  }
  if ($('body').hasClass("polo-home") ) {
    var elementBottom = elementTop + $(el).outerHeight() + 100;
  } else {
    var elementBottom = elementTop + $(el).outerHeight();
  }
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  if ((viewportTop < elementTop) && (elementBottom < viewportBottom))
      isInViewport = true
  return isInViewport
}

// Unit

function initParallax() {
  if (typeof Rellax === 'function' && document.querySelector(".parallax")) {
    var parallax = new Rellax('.parallax',{
      breakpoints: [480, 768, 1440]
    });
  }
}

// Home hero
function setHomeHero() {
  // var menTaglines = ["<span>L</span><span>e</span><span>t</span><span>'</span><span>s</span> <span>P</span><span>l</span><span>a</span><span>y</span>"]

  //This sets the product Blocks
  var products = {
    men_india: [
      //This is the Hero
      {
        class: "freddie-oatmeal-hero",
        tagLine: "Comfy AF",
        prodLine: "Hammo by March",
        url: "/men/oatmeal"
      },
      //Everything beyond this is extra product blocks
      {
        //Product 1
        class: "freddie-oatmeal-hero",
        tagLine: "Comfy AF",
        prodLine: "Hammo by March",
        url: "/hammo/men/oatmeal"
      },
      {
        //Product 2
        class: "midnight-navy-hero-tee",
        tagLine: "2020 Edition",
        prodLine: "Midnight Navy",
        url: "/men/navy"
      }
    ],
    women_india: [
      //This is the Hero
      {
        class: "half-price",
        tagLine: "<span class='half-price-full-tee'></span>",
        prodLine: "Half Price. Full Tee",
        url: "/shop"
      },
      //Everything beyond this is extra product blocks
      {
        //Product 1
        class: "midnight-navy-hero-tee",
        tagLine: "2020 Edition",
        prodLine: "Midnight Navy",
        url: "/women/navy"
      },
      {
        //Product 2
        class: "freddie-oatmeal-hero",
        tagLine: "Comfy AF",
        prodLine: "Hammo by March",
        url: "/hammo/men/oatmeal"
      }
    ],
    men_uk: [
      //This is the Hero
      {
        class: "code-blue-hero",
        tagLine: "Time Out in March",
        prodLine: "March Tee",
        url: "/men/blue"
      },
      //Everything beyond this is extra product blocks
      {
        //Product 1
        class: "freddie-oatmeal-hero",
        tagLine: "Comfy AF",
        prodLine: "Hammo by March",
        url: "/hammo/men/oatmeal"
      },
      {
        //Product 2
        class: "lint-roller-hero",
        tagLine: "Goodbye Lint",
        prodLine: "Lintroller by March",
        url: "/lintroller"
      }
    ],
  }


  function renderHomeProducts(style){
    if (products == undefined || products == null  || !products.hasOwnProperty(style)){
        return;
    }
    for ( i = 0; i < products[style].length; i++) {
      var containerClass = 'product-block',
          content = '.card'

      if (i == 0) {
        containerClass = 'hero'
        content = '.content'
      }

      var container = $('body.home').find('.' + containerClass).eq(i-1)

      container.removeClass().addClass(products[style][i].class + ' ' + containerClass)
      container.find('h2').html(products[style][i].tagLine)
      container.find('.block-link').html(products[style][i].prodLine)
      container.find(content).attr('href', products[style][i].url)
    }
  }

  if ( $('body').hasClass('home uk')){
    if (typeof(current_style) == 'undefined'  || current_style == '') {
      renderHomeProducts('men_'+ seller_country);
    } else {
      renderHomeProducts(current_style + '_' + seller_country);
    }
  }
}

// Animate 'let's play'
// var randomCount = 0;
// function randomizeTitle() {
//   var maxDistance = .4;
//   var maxAngle = 20;
//
//   $(".hero .content h2").find("span").each(function(index){
//     var element = $(this)
//     if (randomCount < 20) {
//         element.css('transform','rotate(0deg) translateX(0) translateY(0)')
//     } else {
//       var randomDistanceX = (Math.random() * maxDistance * 2) - maxDistance;
//       var randomDistanceY = (Math.random() * maxDistance * 2) - maxDistance;
//       var randomAngle = (Math.random() * maxAngle * 2) - maxAngle;
//       element.css('transform','rotate('+ randomAngle +'deg) translateX('+ randomDistanceX +'em) translateY('+ randomDistanceY +'em)')
//     }
//   })
//   randomCount++;
//   if (randomCount > 26) { randomCount = 0}
// }

// Jiggle Rewards Icon
var rewardsJiggle = function () {
  if( $(window).scrollTop() < 72 ) {
    $('a#credits').addClass('jiggle');
  }
  else{
    $('a#credits').removeClass('jiggle');
  }
}

// Common Dropdown stuff
var dropdownButton = $('.dropdown-button');
// Show Dropdown
var showDropdown = function (el) {
  el.addClass('show');

  if ( el.hasClass('size-picker') ){
    $('.add-product').addClass('open');
  } else {
     $('.dropdown').addClass('open');
  }
}

// Hide Dropdown
var hideDropdown = function (el) {
  el.removeClass('show');

  if ( el.hasClass('size-picker') ){
    $('.add-product').removeClass('open');
  } else {
     $('.dropdown').removeClass('open');
  }
}

// Navigation

var productCategory;
var productOverlay;
var productCategoryLink;

var toggleMobileOverlay = function () { //Mobile Navigation
  if ( $(window).width() < 640 ){
    if ( $('header nav.main').hasClass('in-sight') ) {
      $('header nav.main').removeClass('in-sight');
      $('header nav.mobile a').removeClass('collapse');
      $('body').removeClass('no-scroll');
      reverseHomeHeader();
    }
    else {
      $('header nav.main').addClass('in-sight');
      $('header nav.mobile a').addClass('collapse');
      $('body').addClass('no-scroll');
      $('header').removeClass('inverse');
    }
  }
}

var toggleProductOverlay = function (product_category) { //Desktop Navigation
  productOverlay = $('header .navigation-overlay#'+ product_category +'Products');
  productCategoryLink = $('header nav a.has-dropdown[data-category="' + product_category +'"]');

  if ( productOverlay.hasClass('out-of-sight') ){
    $('header .navigation-overlay').addClass('out-of-sight');
    $('header nav a.has-dropdown').removeClass('selected');
    productOverlay.removeClass('out-of-sight');
    productCategoryLink.addClass('selected');
    $('header').removeClass('inverse');
  }
  else {
    if ( $(window).width() > 640 ) {
      productOverlay.addClass('out-of-sight');
      productCategoryLink.removeClass('selected');
      reverseHomeHeader();
    }
  }
}

var resetProductOverlay = function () { //Reset Navigation
  if ( $(window).width() > 640 ) {
    $('header .navigation-overlay').addClass('out-of-sight');
    $('header nav a.has-dropdown').removeClass('selected');
  }
  else {
    $('header nav.main').removeClass('in-sight');
    $('header nav.mobile a').removeClass('collapse');
    $('body').removeClass('no-scroll');
    reverseHomeHeader();
  }
}

// Header Stuff

var seamlessHeader = function () {  // Go seamless and reverse
  $('header').addClass('inverse');
};

var regularHeader = function () { // Go white
  $('header').removeClass('inverse');
};

var reverseHomeHeader = function () {

  if( $('body').hasClass('home') ||
     $('body').hasClass('startups') ||
     $('body').hasClass('v2') ||
     $('body').is('#specials') ||
     $('body').is('#hammo') ||
     $('body').is('#unitPQ') ) {
     seamlessHeader();
  }
  else if ( $('body').hasClass('shop') && $(window).width() > 640 ){
    seamlessHeader();
  }
}

var stickyTicker = function () {
  if ( $(window).scrollTop() > 100) {
    $('.sticky-ticker').removeClass('temporary-hide')
  } else {
    $('.sticky-ticker').addClass('temporary-hide')
  }
}


/* -------------

Main Navigation

------------- */

var navBlock = $('header nav.hover-dropdown');

//check if mobile or desktop device
function checkMQ() {
  if ( navBlock.length > 0 ) {
     return window.getComputedStyle(document.querySelector('.hover-dropdown'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
  }
}

// Sticky Colour Block
var stickColourPicker = function () {
  if ( $('body.shop').length && $('.header-picker').length ){
    var posY = $('.shop .shop-spacer').offset().top - $('.header-picker').outerHeight(true);
    if ( $(window).scrollTop() <= posY ) {
      $('.header-picker').css({'position': 'fixed', 'top': '0' });
    }
    else {
      $('.header-picker').css({'position': 'absolute', 'top': posY });
    }
  }
  else {
  }
}

// Sticky Bars - Size Picker and Feature Nav
var stickyHammo = function () {
    if ( $('body').is('#hammo') && !$('body').hasClass('hammo-uk') ) {

    var wrapperHeight = $('.get-hammo').outerHeight();
    var posY = $('.get-hammo').offset().top;

    $('.hammo-conclude-wrapper').height(wrapperHeight);

    if ( $(window).scrollTop() >= posY ) {
      $('.hammo-conclude-wrapper').css({ 'position': 'absolute', 'top': posY })
    }
    else {
      $('.hammo-conclude-wrapper').css({ 'position': 'fixed', 'top': '0' })
    }
  }
}

var lintrollerTech = function () { //Todo @Sid to post this to hero shop
      var scrollTop = $(window).scrollTop();
      var specsWrapper = $('.tech-specs-placeholder');
      var graphicWrapper = $('.tech-specs-graphic-wrapper');
      var posYStart = specsWrapper.offset().top - $(window).height()/2 + graphicWrapper.outerHeight()/2;
      var posYMid = specsWrapper.offset().top + specsWrapper.outerHeight()/2  - graphicWrapper.outerHeight();
      var posYEnd = specsWrapper.offset().top + specsWrapper.outerHeight() - $(window).height()/2 - graphicWrapper.outerHeight()/2;
      var scrollOffset = 0;

      var roller = $('.roller');
      var rollerSheet = $('.roller-sheet');
      var bluePrint = $('.blue-print');
      var ballMechanics = $('.ball-mechanics');
      var outerSpecsText = $('.specifications .outer');
      var innerSpecsText = $('.specifications .inner');

      if ( scrollTop > posYStart && scrollTop < posYEnd) {
        if ( scrollTop < posYMid) {
          ballMechanics.hide();
          bluePrint.show();
          rollerSheet.removeClass('slide-out');
          outerSpecsText.removeClass('out-of-sight');
          innerSpecsText.addClass('out-of-sight');
        }
        if ( scrollTop > posYMid) {
          ballMechanics.show();
          bluePrint.hide();
          rollerSheet.addClass('slide-out');
          outerSpecsText.addClass('out-of-sight');
          innerSpecsText.removeClass('out-of-sight');
        }
      }
      else {
        bluePrint.hide();
      }

}

var appendflyingThumb = function (url, event) {
  if (url == undefined || url == null || url == '')
    return;
  var initialXPos = $(window).width() - event.pageX - 20;
  var initialYPos = event.pageY - $(window).scrollTop() - 20;
  var flyingThumb = '<div class="flying-thumb-outer"><img src = "'+ url +'"/></div>';
  var flyingThumbWrapper = $('.flying-thumb-wrapper');
  var cartPosition = $('p.count').position();
  if (cartPosition.top > 1000)
    cartPosition.top = 0;
  $(flyingThumb).appendTo(flyingThumbWrapper).css({
      x: -initialXPos,
      opacity: 1
  }).transition({
      x: cartPosition.left,
      opacity: 0,
      duration: 500,
      easing: 'in',
      complete: function() { $(this).remove(); }
  });
  $('.flying-thumb-outer img').css({
      y: initialYPos,
      rotate: '180deg'
  }).transition({
      y: cartPosition.top,
      rotate: '0deg',
      duration: 500,
      easing: 'cubic-bezier(0.25,0.1,0.5,1)'
  });
}

var setOneUpPos = function () {
  if ( $('body').hasClass('shop') ){
    var yPos;
    var xPos;
    if (typeof($('.add-product .button-wrapper').offset().top != 'undefined' )){
        yPos = $('.add-product .button-wrapper').offset().top  - $(window).scrollTop();
    }
    if (typeof($(window).width() - $('.add-product .button-wrapper').offset().left != 'undefined' )){
        xPos = $(window).width() - $('.add-product .button-wrapper').offset().left - ( parseFloat($("body").css("font-size")) * 3);
    }
    $('.one-up-wrapper').css({'transform': 'translate3d(0, '+ yPos +'px, 0)', 'webkit-transform': 'translate3d(0, '+ yPos +'px, 0)', 'moz-transform': 'translate3d(0, '+ yPos +'px, 0)'});
    $('.one-up-wrapper .one-up').css({'transform': 'translate3d(-'+ xPos +'px, 0, 0) rotate(180deg)', '-webkit-transform': 'translate3d(-'+ xPos +'px, 0, 0) rotate(180deg)', '-moz-transform': 'translate3d(-'+ xPos +'px, 0, 0) rotate(180deg)'});
  }
}

var hammoFitLayout = function () {
  var shotWrapper = $('#hammo #hammo-fit .shot-wrapper');
  var fitContents = $('#hammo #hammo-fit .fit-contents');
  var setHeight = $('#hammo #hammo-fit .fit-contents').outerHeight();
  var setPos = shotWrapper.width() + parseInt( $('#hammo-fit .wrapper').css('padding-top') )
  if ( $('body').is('#hammo') && $(window).height() > $(window).width() ){
    shotWrapper.height(setHeight);
    fitContents.css('top', setPos );
  }
  else{
    shotWrapper.height(0);
    fitContents.css('top', '50%' );
  }
};

// Fit Layout

var setFitLayout = function () {
  var setHeight = $('#fit .shot-wrapper .shot.tee-fit').outerHeight();
  $('#fit .fit-details-list').height(setHeight);
};


// Shop Sticky Ticker
var hideStickyTicker = function () {
  $('.sticky-ticker').addClass('hide-ticker');
}

// Set height for product carousel
var setCarouselHeight = function () {
    if ($(window).width() < 992) {
        $('.product-shots .shot').addClass('fixedheight');
    }
    else {
        $('.product-shots .shot').removeClass('fixedheight');
    }
};

// Scroll Home on clicking splash or if there are items in cart
var scrollHomePage = function () {
  $("body, html").animate({
      scrollTop: $('#intro').offset().top + 1
  }, 600);
}

var scrollHammoPage = function () {
  $("body, html").animate({
      scrollTop: $('#hammo .hammo-hero h2').offset().top - 40
  }, 600);
}

var scrollThemeShop = function () {
  $("body, html").animate({
      scrollTop: $('#classic-black .product-info').offset().top
  }, 600);
}

// Expand and collapse referrals
var setReferralsLayout = function () {
  $(".referrals").css('max-height', $('header').height() );
  $(".referrals-intro").css('height', $('header').height() );
  $(".referrals-intro p.reward").css('line-height', $('header').height() + 'px' );
};

// Set Height of Features
var setFeaturesHeight = function () {
    if ($(window).width() > 992) {
        $('.home .feature .centered-wrapper').css ( 'height', $('.home .feature .shot').outerHeight() ) ;
    }
    else{
      $('.home .feature .centered-wrapper').css ( 'height', 'auto' ) ;
    }
};

// Set Packing Date or Time
var setPackingTime = function() {
  var orderDate = new Date( $('.order-placed .timestamp').attr('title') );
  var currentDate = new Date();
  var hours = currentDate.getHours() % 12;
  var currentTime = hours + ":" + currentDate.getMinutes();
  var currentDay = currentDate.getDate();
  var currentMonthIndex = currentDate.getMonth();
  var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var currentMonth = months[currentMonthIndex];

  if ( orderDate.getDate() === currentDate.getDate() ) {
    if (hours == 0) {
      hours += 12;
      $('.order-packing .timestamp').html(currentTime + ' AM');
    }
    else{
      $('.order-packing .timestamp').html(currentTime + ' PM');
    }
  }
  else {
    $('.order-packing .timestamp').html( currentMonth + ' ' + currentDay );
  }
};

// Reviews Page
var setReviewsIntroHeight = function () {
  var height = $('#reviews .intro').width();
  if (!$('#reviews').hasClass('india')) {
    height = height/2;
  }
  $('#reviews .intro').css( 'height', height);
  $('#reviews .grid').removeClass('hide-grid'); // show review grid once the height is set
}

// Reviews Animation Start
var city = $("#reviews .city");
var pin = $("#reviews .city-pin");
var cityIndex = -1;
var nextCity = function() {
  pin.removeClass('show-pin');
  ++cityIndex;
  pin.eq( cityIndex % city.length ).addClass('show-pin');
  var col = pin.eq( cityIndex % city.length ).css('background-color');
  $('#reviews h2 a').css('color', col)
  city.eq( cityIndex % city.length )
    .fadeIn(600)
    .delay(600)
    .fadeOut(600, nextCity);
}

//Shop page offer block animation
var offerText = $('.pricing-info .offer > span');
var index = -1;
var offerTextshowHide = function (element) {
    ++index;
    offerText.eq( index % offerText.length ).fadeIn(1000).delay(1600).fadeOut(1000, offerTextshowHide);
}

//Shop page autoplay video
var autoplayVideo = function () {
  if( $('body').hasClass('shop') ){
    var video = $('video');
      video.autoplay=true;
      video.load();
    }
};

// Fix iPhone Jump with Country Popup
var checkCountryPopup = function () {
  if ( $('#country-check').length == 0){
  }
  else{
    fixAutofocus();
  }
}
// Common show popup function
var showPopup = function (popupID) {
  $(".popup-overlay").fadeIn(250);
  setTimeout(function () {
      $(popupID).addClass("show spinner-show");
      setTimeout(function() {
          $('.popup').removeClass('spinner-show');
      }, 1000);
  }, 250);
}

// Common hide popup function
var hidePopup = function (popupID) {
  $(".popup-overlay").fadeOut(250);
  if (typeof(popupID)==='undefined'){
    var popupBlcok = $(".popup.show")
    popupBlcok.removeClass("show");
    if (popupBlcok.find('button').prop('disabled') == true){
      popupBlcok.find('button').prop('disabled',false).removeClass('show-spinner');
    }
  }
  else{
    $(popupID).removeClass("show");
    var submitButton = $(popupID).find('button');
    if($(submitButton).prop('disabled') == true)
    {
      $(submitButton).prop('disabled',false).removeClass('show-spinner');
    }
  }
}

// Size Guide

var setSizeGuide = function (el) {

  var id = $(el).attr('id');
  var imageSrc = '/static/images/shop/product-specs/models/'+ id +'.jpg';

  $('#size-guide .button-tabs .tab').removeClass('selected');
  $(el).addClass('selected');
  $(el).closest('#size-guide').find('.tab-content img').attr('src', imageSrc);
  if ( id == 'salil-polo'  || id == 'salil-tee'){
    $(el).closest('#size-guide').find('.tab-content p').html("Salil is 6' and wears a 2XL");
  }
  if ( id == 'gobind-polo' || id == 'gobind-tee' || id == 'gobind-hammo' || id == 'gobind-hammo-uk' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Gobind is 6' and wears an M");
  }
  if ( id == 'carlos-tee' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Carlos is 6' and wears an M");
  }
  if ( id == 'aditya-tee' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Aditya is 5'11&quot; and wears an S");
  }
  if ( id == 'shivam-unit' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Shivam is 5'10&quot; and wears an M");
  }
  if ( id == 'annabel-tee' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Annabel is 5'8&quot; and wears an S");
  }
  if ( id == 'shilpa-tee' ){
    $(el).closest('#size-guide').find('.tab-content p').html("Shilpa is 5'7&quot; and wears an XL");
  }
  if ( id == 'chart-men-polo' || id == 'chart-men-tee' || id == 'chart-women-tee-v2' || id == 'chart-men-tee-uk' || id == 'chart-men-hammo-uk'){
    $(el).closest('#size-guide').find('.tab-content p').html('Sizes in inches');
  }
}

// Short Keys
document.onkeydown=function(e){

  // ESC
  if(e.which == 27) {
      if($('.popup').hasClass('show')) { // hide popup
          $(".popup-overlay").fadeOut(250);
          $('.popup').removeClass('show');
      }
  }

  // ENT
  if(e.which == 13) {
    if ( !$('#subscribeForm .submit-button').hasClass('disabled') ) { // Submit common subscribe form
      /*alert('submit');*/
    }
  }

}


// Auto Hide Global Alert
var autoHideAlert = function () {
  setTimeout(function () {
    $(".alert").not(".order-error-payment").addClass('autohide');
  }, 5000);
}

// Ajax with Campaign Monitor. Hiding for now because CORS issues.
// submitting with standard page redirect.
// $(function () {
//     $('.subscribe form').submit(function (e) {
//       e.preventDefault();
//       unfixAutofocus();
//       var submitButton = $(this).find('button');
//       var form = $(this);
//       var formHeight= $(this).height();
//       var successMessage = $(this).parent().find('.success');
//       var failedMessage = $(this).parent().find('.fail');

//       form.height(formHeight);
//       submitButton.addClass('submitting'); //Add loading animation
//       submitButton.prop("disabled", true);
//       submitButton.html('<img src="/static/images/spinner.svg" class="spinner">');
//       $.post(
//         this.action + "?callback=?",
//         $(this).serialize(),
//         function (data) {
//           if (data.Status === 400) {
//               failedMessage.fadeIn().css('height', formHeight);
//               successMessage.hide();
//           } else { // 200
//               successMessage.fadeIn().css('height', formHeight);
//               form.hide();
//         }
//       });
//     });
// });

/* Image Preview Popup */
var drawImagePopup = function (imageSrc, el) {
    var originalWidth = el.width;
    var padding = 20;
    var img = new Image();
    var windowHeight = window.innerHeight - padding;
    var windowWidth = window.innerWidth - padding;
    var height, width, ratio, popupWidth;
    img.onload = function () {
        height = this.height;
        width = this.width;
        ratio = width / height;

        if (height <= windowHeight) {
            popupWidth = width;
        } else if (height > windowHeight) {
            popupWidth = windowHeight * ratio;
        }

        $("#imagepreview").css('max-width', popupWidth ).html('<img src="' + imageSrc + '">')
    }
    img.src = imageSrc;
    showPopup('#imagepreview');
};

var fadeCheckout = function () {
    $("#customer-details").fadeOut(500);
    setTimeout(function () {
        $("#payment-details").fadeIn(500);
    }, 501);
};

var AddTweetContentToBlogPages = function(){
    //Add tweet content to blog pages
  var tweetLinks = $(".quote .twitter").closest("p");
  var blogURL = window.location.href;
  var blogTitle = blogURL.split('/').pop();
  var tweetVia = "marchtee";
  var fixedChars = blogURL.length + tweetVia.length + 7;
  var tweetLimit = 140;
  var bodyLimit = tweetLimit-fixedChars;
  tweetLinks.each(function(){
    var tweetLinkTag = $(this).find(".twitter");
    var tweetLinkText = tweetLinkTag.text();
    var tweetBodyRaw = $(this).text();
    var tweetBody = tweetBodyRaw.replace('“','').replace('”','').replace(tweetLinkText,'').trim();
    if (tweetBody.length > bodyLimit) {
      if (tweetBody.split('.').length > 0){
        tweetBody = tweetBody.substr(0,bodyLimit-2).split('.').slice(0,-1).join('.') + "...";
      } else {
        tweetBody = tweetBody.substr(0,bodyLimit-2).trim() + "...";
      }
    }
  })
};

var setReferralUrls = function(){
  // Set FB and Twitter referral URLs
  if($("body").hasClass('order')){
      var referrerURL = $('.referrer-url p.url').text();
      var facebookinnerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?u='+ referrerURL +'" target="_blank" class="facebook"></a>';
      var whatsappinnerHTML = '<a href="whatsapp://send?text=Got%20my%20March%20Tee%202!%20Get%20yours%20too%20'+ referrerURL +'" class="whatsapp"></a>';
      var twitterinnerHTML = '<a href="https://twitter.com/home?status=Got%20my%20March%20Tee%202!%20Get%20yours%20too%20'+ referrerURL +'" target="_blank" class="twitter"></a>';
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.referrer-url nav').addClass('three');
        $('.referrer-url nav').html( facebookinnerHTML + whatsappinnerHTML + twitterinnerHTML);
      }
      else {
        $('.referrer-url nav').addClass('two');
        $('.referrer-url nav').html( facebookinnerHTML + twitterinnerHTML);
      }
  };
}

//check Touch Device
var checkTouchDevice = function() {

    if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
         $('#user-cart').removeClass('no-touch');
    } else {
         $('#user-cart').addClass('no-touch');
    }

}

 // Jump to Polo Intro
 $('#polo-home .content').click( function (e) {
  e.preventDefault();
  $("body, html").animate ({
    scrollTop: $('.polo-home .polo-intro').position().top }, 600);
});
 
function fadeInOnScroll() {

  var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + $(window).outerHeight();
  var windowInnerHeight = window.innerHeight;
  var fadeInElement = $('.on-scroll-fadeIn');
  var fadeOutElement = $('.on-scroll-fadeOut');

  fadeInElement.each(function(){
    if ($(this).hasClass('fade-in')) {
      $(this).removeClass('fade-in');
    }
    var elementTop = parseInt($(this).offset().top);
    var elementBottom = parseInt( elementTop + $(this).outerHeight() );

    var scrollPos = parseInt(windowBottom - elementTop);

    if ($(this).hasClass('picture')) {
      var diff = windowInnerHeight * 3/4;
    } else {
      var diff = windowInnerHeight / 4;
    }


    if (scrollPos <= diff) {
      var value = (scrollPos / diff);
    } else {
      var value = 1;
    }



    if ( windowBottom < elementTop ) {
      $(this).css({'opacity': 0 });
    } else if ( windowBottom >= elementTop ) {
      $(this).css({'opacity': value });
    }

  });

  fadeOutElement.each(function(){
    if ($(this).hasClass('fade-in')) {
      $(this).removeClass('fade-in');
    }
    var elementTop = parseInt($(this).offset().top);
    var elementBottom = parseInt( elementTop + $(this).outerHeight() );

    var scrollPos = parseInt(windowBottom - elementTop);

    var diff = windowInnerHeight;

    var value = 2 - (scrollPos / diff);
    $(this).css({'opacity': value });

  });
}

var packagingPolo = function () {
  if ( $('body').is('#polo-home') ) {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).outerHeight();
    var windowInnerHeight = window.innerHeight;
    var packagingWrapper = $('.packaging-polo');
    var packageShot = packagingWrapper.find('.package-shot');
    var packagingWrapperTop = packagingWrapper.offset().top;

    var scrollPos = windowBottom - packagingWrapperTop;
    var diff = parseInt( windowInnerHeight / 2 );
    var value = parseInt( ( 1 - (scrollPos / diff) ) * 100 );

    if ( packagingWrapperTop < windowBottom && packagingWrapperTop > ( windowBottom - (windowInnerHeight / 2) ) ) {

      packageShot.css({
        '-webkit-transform' : 'translateY('- + value + '%)',
        '-moz-transform'    : 'translateY(-' + value + '%)',
        'transform'         : 'translateY(-' + value + '%)'
      });

    } else if( packagingWrapperTop < ( windowBottom - (windowInnerHeight / 2) ) ) {

      packageShot.css({
        '-webkit-transform' : 'translateY(0)',
        '-moz-transform'    : 'translateY(0)',
        'transform'         : 'translateY(0)'
      });

    }

  }
}
var poloIntro = function () {
  if ( $('body').is('#polo-home') ) {

    var poloIntro = $('.polo-intro');
    var poloIntroTop =  poloIntro.offset().top;
    var poloPackageBottom = poloIntroTop + poloIntro.outerHeight();
    var tee = $(window).scrollTop() + $(window).outerHeight();


    if ( $(window).scrollTop() + $(window).outerHeight() > poloIntroTop  ) {
      poloIntro.find('.shot').removeClass('slide-up-initial');
    } else {
      poloIntro.find('.shot').addClass('slide-up-initial');
    }
  }
}

var compareSliderDragVisibility = function () {

  if ( $('body').is('#polo-home') ) {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).outerHeight();
    var windowInnerHeight = window.innerHeight;
    var compareContainer = $('#inside-outside');
    var compareContainerTop = compareContainer.offset().top;
    var compareContainerBottom = compareContainerTop + compareContainer.outerHeight();
    var textHeading = $('.polo-inside-outside').find('.content-wrapper h2');
    var textHeadingBottom = textHeading.offset().top + textHeading.outerHeight();
    var scrollPos = windowBottom - compareContainerTop;
    var diff = parseInt( windowInnerHeight - (windowInnerHeight / 4) );
    var value = (scrollPos / diff);

    if (compareContainerTop < windowBottom  && compareContainerTop > ( windowBottom - (compareContainer.outerHeight() + 100) )  ) {

      compareContainer.find('.drag').css({'opacity': value });

    } else if( compareContainerTop < ( windowBottom - (compareContainer.outerHeight() + 100) ) ) {

      compareContainer.find('.drag').css({'opacity': 1 });
    }
  }
}

var compareSliderAnimation = function () {

  if ( $('body').is('#polo-home') ) {

    var mql = window.matchMedia("(orientation: portrait)");
    if(mql.matches) {

      $('#dragmeVertical').on("mousedown touchstart", function (event) {
        $('.icon-drag').removeClass('icon-drag-animation');
      });

      $('#dragmeVertical').on("mouseup touchend", function (event) {
        $('.icon-drag').addClass('icon-drag-animation');
      });

    } else {

      $('#dragmeHorizontal').on("mousedown touchstart", function (event) {
        $('.icon-drag').removeClass('icon-drag-animation');
      });

      $('#dragmeHorizontal').on("mouseup touchend", function (event) {
        $('.icon-drag').addClass('icon-drag-animation');
      });
    }
  }
}

var compareInsideOutside = function () {
  if ( $('body').is('#polo-home') ) {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var haft_width = windowWidth / 2;
    var haft_height = windowHeight / 2;

    var container = $("#inside-outside");
    var containerWidth = container.width();
    var containerHeight = container.height();
    var haft_width = containerWidth / 2;
    var haft_height = containerHeight /2;
    var dragmeHorizontal = container.find("#dragmeHorizontal");
    var dragmeVertical = container.find("#dragmeVertical");
    var viewOutside = container.find(".view-outside");
    var wrapperOutside = viewOutside.find(".wrapper-outside");
    var viewInside = container.find(".view-inside");
    var wrapperInside = viewInside.find(".wrapper-inside");
    var insideContentWrapper = viewInside.find('.content-wrapper');
    var contentWrapper = container.closest('.polo-inside-outside').find('.content-wrapper');
    var sharpOutside = contentWrapper.find('.sharp-outside');
    var softInside = contentWrapper.find('.soft-inside');




    var mql = window.matchMedia("(orientation: portrait)");

    // If there are matches, we're in portrait
    if(mql.matches) {

      wrapperOutside.css({'height': containerHeight + 'px', 'width': '100%'});


      viewOutside.css({'height': haft_height, 'width': '100%'});
      dragmeVertical.css({'top': haft_height});

      Draggable.create(dragmeVertical, {
        type:"top",
        bounds: container,
        onDrag:updateImagesPortrait
      });

      //Intro Animation
      // portraitAnimateTo(haft_height);


      function updateImagesPortrait(){
        var viewOutsideHeight = dragmeVertical.css("top");
            viewOutsideHeight = viewOutsideHeight.toString();
            viewOutsideHeight = viewOutsideHeight.slice(0, -2);
            viewOutsideHeight = parseInt(viewOutsideHeight);
            haft_height = parseInt(haft_height);


        $(".view-outside").css({'height':viewOutsideHeight, 'width':'100%'})
        // TweenLite.set(viewOutside, {height: viewOutsideHeight, width: '100%'});
        //TweenLite.set(wrapperOutside, {height: containerHeight, width: '100%'});

        if ( viewOutsideHeight < haft_height ) {
          sharpOutside.css({'opacity': '0.6', 'font-weight': '300'});
          softInside.css({'opacity': '1', 'font-weight': '400'});
        } else if ( viewOutsideHeight > haft_height ) {
          sharpOutside.css({'opacity': '1', 'font-weight': '400'});
          softInside.css({'opacity': '0.6', 'font-weight': '300'});
        } else {
          sharpOutside.css({'opacity': '0.6', 'font-weight': '300'});
          softInside.css({'opacity': '0.6', 'font-weight': '300'});
        }

      }
      container.on("click touchmove", function (event) {
        var eventTop = event.clientY - container.offset().top;
      });

    } else {
        wrapperOutside.css({'width': containerWidth + 'px', 'height': '100%'});
        viewOutside.css({'width': haft_width, 'height': '100%'});
        dragmeHorizontal.css({'left': haft_width});

        Draggable.create(dragmeHorizontal, {
          type:"left",
          bounds: container,
          onDrag:updateImageslandscape
        });

        //Intro Animation
        //animateTo(haft_width);

        function updateImageslandscape(){

          var viewOutsideWidth = dragmeHorizontal.css("left");
              viewOutsideWidth = viewOutsideWidth.toString();
              viewOutsideWidth = viewOutsideWidth.slice(0, -2);
              viewOutsideWidth = parseInt(viewOutsideWidth);
              haft_width = parseInt(haft_width);

          TweenLite.set(viewOutside, {width: viewOutsideWidth, height: '100%'});

          if ( viewOutsideWidth < haft_width ) {
            sharpOutside.css({'opacity': '0.6', 'font-weight': '300'});
            softInside.css({'opacity': '1', 'font-weight': '400'});
          } else if ( viewOutsideWidth > haft_width ) {
            sharpOutside.css({'opacity': '1', 'font-weight': '400'});
            softInside.css({'opacity': '0.6', 'font-weight': '300'});
          } else {
            sharpOutside.css({'opacity': '0.6', 'font-weight': '300'});
            softInside.css({'opacity': '0.6', 'font-weight': '300'});
          }

        }
        function animateTo(_left) {
          TweenLite.to(dragmeHorizontal, 1, {left: _left, onUpdate: updateImageslandscape});
        }
    }


  }
}

// Common Subscribe
var focusSubscribeForm = function (){
  if ( $('.common-subscribe').length ) {
    var posY = $('.common-subscribe').offset().top;
    $("body, html").animate ({scrollTop: posY}, 1200);
    setTimeout(function(){
      $('#subscribeForm input[type=email]').focus();
    }, 1000);
  }
}

var resetCommonSubscribeForm = function (){
  $('.common-subscribe .subscribe-content-wrapper').addClass('out-of-sight');
  $('#subscribeForm').removeClass('out-of-sight');
  setTimeout(function(){
    $('#subscribeForm input[type=email]').blur().val('');
    $('.subscribe-status').attr('id','');
    $('#subscribeForm .submit-button').removeClass('loading');
  }, 100);
}

var subscribeSuccess = function (source){
  var sourceID = "";
  if (source) {
    sourceID = source.attr('id')
  }
  if (sourceID == "resubscribe") {
    var container = source.closest('.unsubscribed')
    container.find('h2').fadeOut(400)
    container.find('p').eq(0).fadeOut(400)
    source.fadeOut(400)
    setTimeout(function(){
      source.closest('p').find('.success').fadeIn(400);
      container.find('h2').text("You're subscribed!").fadeIn(400);
      container.find('p').eq(0).html("Got feedback? Email us at <a href='mailto:help@marchtee.com'>help@marchtee.com</a>").fadeIn(400);
    }, 400);
  } else {
    $('.common-subscribe .subscribe-content-wrapper').addClass('out-of-sight');
    $('.subscribe-status').attr('id','success').removeClass('out-of-sight');
    setTimeout(function(){
      resetCommonSubscribeForm();
    }, 2000);
  }
}

var subscribeFail = function (){
  $('.common-subscribe .subscribe-content-wrapper').addClass('out-of-sight');
  $('.subscribe-status').attr('id','fail').removeClass('out-of-sight');
  setTimeout(function(){
    resetCommonSubscribeForm();
  }, 2000);
}

function subscribeToEmails(email, styles, source){
    event.preventDefault();
    if (isValidEmail(email)) {
      $('#subscribeForm .submit-button').addClass('loading');
      $('#subscribeForm .submit-button').val('...');
        var addEmailAPIEndpoint = '/customer/add';
        $.ajax({
            type: "POST",
            url: addEmailAPIEndpoint,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({email, styles}),
            success: function(data) {
              if (data.status == 'success') {

                setTimeout(function() {
                  subscribeSuccess(source);
                }, 2000);
              }
              else {
                if(typeof(debugFlag) != 'undefined' && debugFlag)
                  console.log(data.message);
                subscribeFail();
              }
            },
            error: function(data) {
              if(typeof(debugFlag) != 'undefined' && debugFlag)
                console.log(data);
              subscribeFail();
            }
        });
    }
    else{
      subscribeFail();
    }
}

function setStylesSubscribeForm() {
  if (current_style == 'men')
    $("#subscribeForm").find('.sf-men').prop('checked', true);
  else if (current_style == 'women')
    $("#subscribeForm").find('.sf-women').prop('checked', true);
}

function addListeners() {

    $('#menProducts .subscribe').click( function (e) {
      resetProductOverlay();
      $("#subscribeForm").find('.sf-men').prop('checked', true);
    });

    $('#womenProducts .subscribe').click( function (e) {
      resetProductOverlay();
      $("#subscribeForm").find('.sf-women').prop('checked', true);
    });

    $('header nav a.has-dropdown').click( function (e) {
      e.preventDefault();
      var category = $(this).attr('data-category');
      toggleProductOverlay(category);
    });

    $('header nav.mobile a.has-dropdown').click( function (e) {
      e.preventDefault();
      toggleMobileOverlay();
    });

    $('a.whatsnewButton').click( function (e) {
      e.preventDefault();
      var posY = $('#whats-new-section').offset().top - $('header').outerHeight() - $('.header-picker').outerHeight();
      $("html, body").animate({ scrollTop: posY }, 600);
    });

    //Size Guide

    $('#size-guide .tab').click( function (e) {
      e.preventDefault();
      var el = $(this)
      var id = $(this).attr('id');
      setSizeGuide(el);
    });

    // Subscribe to promotional emails with common subscribe form
    $('#subscribeForm .submit-button').click( function (e) {
        var email = $("#subscribeForm input[type=email]").val();
        var styles = [];
        if ($("#subscribeForm").find('.sf-men').prop('checked'))
            styles.push("men");
        if ($("#subscribeForm").find('.sf-women').prop('checked'))
            styles.push("women");
        subscribeToEmails(email, styles);
    });

    // Show common subscribe form on clicking the link
    $('a.subscribe-link').click( function(e) {
        e.preventDefault();
        $('.subscribe-form').removeClass('out-of-sight');
        setTimeout(function(){
          $('#subscribeForm input[type=email]').focus();
        }, 100);
        $('.subscribe-message').addClass('out-of-sight');
    });

    // prevent from doing anything when clicked without email
    $("#subscribeForm .submit-button").on('click', function () {
        var emailField = $(this).parent().find('input[type=email]').val()
        if ( emailField == "") {
            $(this).prop("disabled", true);
            $(this).addClass('disabled');
        }
    });

    // only send request when its a valid email
    $("#subscribeForm input[type=email]").on('input', function () {
        var emailAddress = $(this).val();
        var subscribeButton = $(this).parent().find('.submit-button');
        if (isValidEmail(emailAddress)) {
            subscribeButton.prop("disabled", false);
            subscribeButton.removeClass('disabled');
        } else {
            subscribeButton.prop("disabled", true);
            subscribeButton.addClass('disabled');
        };
    });
    // Shop page
    $('.sticky-ticker .close-button').click( function (e) {
      e.preventDefault();
      hideStickyTicker();
    });

    $('.product-intro a.action').click( function (e) {
      e.preventDefault();
      scrollThemeShop();
    });

    // Link to people
    $('a.people').click( function (e) {
      e.preventDefault();
      $("body, html").animate ({
        scrollTop: $('.people-in-march').position().top }, 600);
    });

    // Jump to Features
    $('nav.feature-list a').click( function (e) {
      e.preventDefault();
      var section = $('section#'+ $(e.target).attr('href')+'' );
      $("body, html").animate ({
        scrollTop: section.position().top - $('nav.feature-list').outerHeight() + 2
      }, 600);
    });

    // Jump to Shop Intro
    $('.shop a.inline-shop-link').click( function (e) {
      e.preventDefault();
      $("body, html").animate ({
        scrollTop: $('.intro .details-wrapper').position().top }, 600);
    });

    //Jump to Hammo-go Features
    $('section.hammo-go-hero').click( function (e) {
      e.preventDefault();
      $("body, html").animate ({
        scrollTop: $('#hammo-go-intro').position().top - $('header').outerHeight() }, 600);
    });

    //Jump to Hammo-go Features
    $('#hammo-go-intro .features-button a').click( function (e) {
      e.preventDefault();
      $("body, html").animate ({
        scrollTop: $('.hammo-go-features').position().top }, 600);
    });

    // Toggle feature on Read More
    $('section.feature a.toggle-details').click( function (e) {
      e.preventDefault();
      var subSection = $(e.target).closest('section.feature').find('div.details');
      if (subSection != undefined && subSection != null)
        $(subSection).toggleClass('expand');
      if ( $(this).hasClass('collapse') ){
        $(this).removeClass('collapse').text('More');
      }
      else {
        $(this).addClass('collapse').text('Less');
      }
    });

    // On clicking dropdown button
    $(dropdownButton).click( function (e) {

      e.preventDefault();
      var menu = $(this).parent().find('.dropdown-list');
      if ( menu.hasClass('show') ){
        hideDropdown(menu);
      }
      else {
        showDropdown(menu);
      }

    });

    // Collapse dropdown on selecting an item
    $('.dropdown-list table tr').click( function (e) {
      e.preventDefault();
      var menu = $(this).closest('.dropdown-list');
      hideDropdown(menu);
    });

    // Size Picker
    $('.size-picker table tr').click( function () {
        window.location = $(this).find('a').attr('href');
        }).hover( function () {
        $(this).toggleClass('hover');
    });

    // Scroll Product Page to top
    $('.product .reviews a.button').click( function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    $(".referrals-intro").click(function () {
        $('.referrals').toggleClass('expand');
        $('.referrals').toggleClass('backgroundglow');
    });

    // Prevent Defaults
    $('.add-product a.button').click( function (e) {
      e.preventDefault();
    });

    $('a#cart').click( function (e) {
      e.preventDefault();
    });
        /* Popups */
    // Hide popup on clicking overlay
    $(".popup-overlay").click(function () {
        $(".popup-overlay").fadeOut(250);
        hidePopup('.popup');
        unfixAutofocus();
    });

    /* Subscribe Popup */

    $('a.subscribe, a.hammo-sold-out').click(function (e) {
        e.preventDefault();
        fixAutofocus();
        showPopup('#subscribe');
        setTimeout(function(){
          $('#subscribe input[type=email]').focus();
        },300);
    });

    $('a.out-of-stock').click(function (e) {
        e.preventDefault();
        showPopup('#subscribe')
    });

    $('a.add-note, a.edit-note').click(function (e) {
        e.preventDefault();
        fixAutofocus();
        showPopup('#add-note');
        setTimeout(function(){
          $('#add-note textarea[name=user-note]').focus();
        },300);
    });

    // prevent from doing anything when clicked without email
    $(".subscribe button").on('click', function () {
        var emailField = $(this).parent().find('input[type=email]').val()
        if ( emailField == "") {
            $(this).prop("disabled", true);
            $(this).addClass('disabled');
        }
    });

    // only send request when its a valid email
    $(".subscribe input[type=email]").on('input', function () {
        var emailAddress = $(this).val();
        var subscribeButton = $(this).parent().find('button');
        if (isValidEmail(emailAddress)) {
            subscribeButton.prop("disabled", false);
            subscribeButton.removeClass('disabled');
        } else {
            subscribeButton.prop("disabled", true);
            subscribeButton.addClass('disabled');
        };
    });

    // Select women list when someone comes from the women block

    $('.home .new-women-tees a').click( function () {
      $("#subscribeForm").find('.sf-women').prop('checked', true);
    });

    $('.story#new-flavour a.button').click( function () {
      $("#subscribeForm").find('.sf-women').prop('checked', true);
    });

    // Select Men list when someone comes from the men block

    $('#hammo-teaser .hero a.content').click( function () {
      console.log('clicked')
      $("#subscribeForm").find('.sf-men').prop('checked', true);
    });


    $("a#size-help").click(function (e) {
        e.preventDefault();
        // Change size guide pop up as per selected size
        var selectedSize = $('.add-product option:selected').attr('data-size');
        if (selectedSize == undefined || selectedSize == null)
          selectedSize = 'M';
        var buttonTabs = $("#size-guide").find("nav.button-tabs a.tab");
        buttonTabs.each(function(){
          sizes = $(this).attr('data-size').split(',');
          if (sizes.indexOf(selectedSize) >= 0 ){
              setSizeGuide(this);
              return false;
          }
        })
        showPopup('#size-guide');
    });

    // Hide size chart on clicking on popup
    $("#size-guide .tab-content").click(function () {
        hidePopup($('#size-guide'));
    });

    // Hide image popup on clicking it
    $("#imagepreview").click(function () {
        hidePopup(this);
    });

    //For Archive page User images
    $(".user-pics .pic").click(function () {
      if ( window.outerWidth > 660 ) {
        var imageSrc = $(this).find('img').attr('src');
        drawImagePopup(imageSrc, this);
      }
    });

    /* Gift Code Stuff */
    $("#show-gift-code").click(function () {
        $(".gift-code-form").fadeToggle(500);
    });

    //Hide loader when iFrame loads
    $('iframe#payFrame').load(function () {
        $(".loader").fadeOut(500);
    });


  //Fix the issue that needs the sizes to be tapped twice on touch devices
  $('ul.sizes li a').on('touchstart', function(e) {
    $('ul.sizes li a').removeClass('hover');
    $(this).addClass('hover');
  }).mouseenter(function(e) {
    $('ul.sizes li a').removeClass('hover');
    $(this).addClass('hover');
  });

  $( 'ul.sizes li a').mouseout(function() {
    $(this).removeClass('hover');
  });

  //Cart on click
  $('#user-cart').on('click', '#cart', function(event){
    event.preventDefault();
    showHideCart(this);
  });

  //Cart on hover
  var mouseOutBuffer = null;
    $('#user-cart').on('mouseover', function(event){
      if (checkMQ() == 'desktop') {
        event.preventDefault();
        showCart(true);
        if(mouseOutBuffer != null){
          clearTimeout(mouseOutBuffer);
          mouseOutBuffer = null;
        }
      }
    });
    $('#user-cart').on('mouseout', function(event){
      if (checkMQ() == 'desktop') {
        if ($('#cart-overlay').hasClass('show')){
          if(mouseOutBuffer != null){
              clearTimeout(mouseOutBuffer);
              mouseOutBuffer = null;
          }
          mouseOutBuffer = setTimeout(function(){
              hideCartOverLay();
          },500)

        }
      }
    });

    $('.switch-store a').click(function() {
        // var url = new URL(window.location.href)
        // origin = url.origin + '/' + $(this).attr('data-store');
        // window.location.href = origin + url.pathname.replace('/' + seller, '');
    });

  // Show credits overlay

  var creditsOverlay = $("#credits-overlay");
  var creditsWrapper = $('#user-credits');

  function showCreditsOverLay() {
      creditsOverlay.addClass("show");
  }

  // Hide credits overlay
  function hideCreditsOverLay() {
      creditsOverlay.removeClass("show");
  }

  // Toggle credits overlay
  function toggleCreditsOverLay() {
    if ( creditsOverlay.hasClass('show') ){
      hideCreditsOverLay();
    }
    else {
      showCreditsOverLay();
    }
  }

  //Credits on hover
  var mouseOutBuffer = null;
    creditsWrapper.on('mouseover', function(event){
      if (checkMQ() == 'desktop') {
        event.preventDefault();
        showCreditsOverLay();
      }
    });
    creditsWrapper.on('mouseout', function(event){
      if (checkMQ() == 'desktop') {
        if ( creditsOverlay.hasClass('show') ){
          hideCreditsOverLay();
        }
      }
    });

    //Credits on click
    $('#user-credits').on('click', '#credits', function(event){
      event.preventDefault();
      toggleCreditsOverLay();
    });

    //Dismiss overlay
    creditsOverlay.on('click', function(event){
      event.preventDefault();
      hideCreditsOverLay();
    });

    if(typeof(showCreditPopup) != 'undefined' && showCreditPopup == "True") {
      showCreditsOverLay();
    }

  //Hammo Compare
  if($(window).width() > 992 ) {
      $('#hammo-go .hammo-compare .hammo-original').on('click mouseover', function(){
        $(this).closest('.hammo-compare').removeClass('hammo-go-selected').addClass('hammo-original-selected');
      });

      $('#hammo-go .hammo-compare .hammo-go').on('click mouseover', function(){
        $(this).closest('.hammo-compare').removeClass('hammo-original-selected').addClass('hammo-go-selected');
      });
  } else {
    $('#hammo-go .compare-heading-wrap .hammo-original-small').on('click mouseover', function(){
      $(this).closest('.hammo-compare').removeClass('hammo-go-selected').addClass('hammo-original-selected');
    });

    $('#hammo-go .compare-heading-wrap .hammo-go-small').on('click mouseover', function(){
      $(this).closest('.hammo-compare').removeClass('hammo-original-selected').addClass('hammo-go-selected');
    });
  }


}

function loadBodyAnimation(){
  $('body.home .picture').addClass('fade-in');
  $('body.home .main-line').addClass('fade-in');
  $('body.home .sub-line').addClass('fade-in');
  $('body.home header').addClass('fade-in');
  $('body.home .action-line').addClass('fade-in');
  /* Hammo */
  $('.hammo-hero').addClass('fade-in');
  $('.hammo-intro-wrapper').addClass('fade-in');
  /* Women */
  $('#women .splash .shot').addClass('fade-in');
  $('#women .splash h2').addClass('fade-in-later');
  /* Classic Black */
  $('#classic-black header').addClass('fade-in-later');
  $('#classic-black .hero').addClass('fade-in');
  $('.product-features .feature-card').removeClass('slide-up-initial');
}

if ($('body').is("#teaser-women")) {
  setTimeout(function(){
    $('header').css('opacity','1');
  }, 6500)
}

function showWhatsappShareLinkOnMobile(){
    //Blog post - Show share on Whatsapp link on mobile
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       if($(".whatsapp").length > 0) {
         $(".whatsapp").removeClass("hide");
       }
    }
}

function showCurrentStatusOnOrderTimeline(){
  // Show current order status
  if($(".timeline").is('#order-placed')){
    $('.packing').addClass('active');
  };

  if($(".timeline").is('#order-shipped')){
    $('.shipped').addClass('active');
  };
}

function formatReferrerLink(){
  // Remove www from the display URL
  var referrerDisplayURL = $(".referrer-url a.link p").text();
  $(".referrer-url a.link p").text( referrerDisplayURL.replace( 'www.',''  ) )
}

    //Create Page Form Validations
    function isValidEmail(address) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(address);
    }

    function checkEmail(e) {
      // Check Email
      var email = e.val();
      if (isValidEmail(email)) {
          e.removeClass("error");
          checkErrors('#create-form', "Fill in Your Details", "Check your Details", "Come. Create.");
      } else {

          e.addClass("error");
          checkErrors('#create-form', "Fill in Your Details", "Check your Details", "Come. Create.");
      }
    }
    function checkContent (e) {
      if (e == undefined || e.length == 0)
        return;
      if (e.val().length >= 1) {
          e.removeClass("error");
          checkErrors('#create-form', "Fill in your Details", "Check your Details", "Come. Create");
      } else {
          e.addClass("error");
         checkErrors('#create-form', "Fill in your Details", "Check your Details", "Come. Create");
      }
    }

    function checkNumbers(e, n) {
      if(e.val().indexOf(' ') >= 0)
      {
        number = e.val().trim()
        e.val(number)
      }
      if (e.val().match(/^(\d{1,4})?(\d{8})$/)) {
          e.removeClass("error");
          e.addClass("ok");
          checkErrors();
      } else {
          e.removeClass("ok");
          e.addClass("error");
          checkErrors();
      }
   }


    function checkErrors(e, errorMsg1, errorMsg2, sendMsg) {
      if ($(e).find(".error")[0] && !$(e).find(".show-error")[0]) { // if there is an error
          $(e).find('input[type="submit"]').attr('disabled', 'disabled').val(errorMsg1);
      }
      else if ($(e).find(".error")[0] && $(e).find(".show-error")[0]) { // an error is visible
          $(e).find('input[type="submit"]').attr('disabled', 'disabled').val(errorMsg2);
      }
      else {
        $(e).find('input[type="submit"]').removeAttr('disabled').val(sendMsg);
      }
    }

    // Add error classes on load
    function addErrClassOnload() {
      $("#create .user-field #user_name").addClass("error");
      $("#create .user-field #user_email").addClass("error");
      $("#create .user-field #user_phone").addClass("error");
      $("#create .introduce-field #user_introduce").addClass("error");
    }

    function validateApplicant() {

        var isChecked = $('#create-form input[name="option"]').is(':checked');

            if(isChecked) {
                $('#create #create-form').find('input[type="submit"]').removeAttr('disabled', 'disabled')

                checkContent($("#user_name"));
                checkEmail($("#user_email"));
                checkNumbers($("#user_phone"), 9);
                checkContent($("#user_introduce"));

            } else {
                checkContent($("#user_name"));
                checkEmail($("#user_email"));
                checkNumbers($("#user_phone"), 9);
                checkContent($("#user_introduce"));

                $('#create #create-form').find('input[type="submit"]').attr('disabled', 'disabled').val("Pick a Position");
            }

    }

    function addEventListeners(){
      addErrClassOnload();
      $("#create form#create-form input, #create form#create-form textarea").on('input change focus focusout', function () {
         validateApplicant();
      });

      $("#create form#create-form input, #create form#create-form textarea").on('focus', function () {
        if ($(this).hasClass("error", "show-error")) {
          $(this).removeClass("show-error");
        }
      });

      $("#create form#create-form input, #create form#create-form textarea").on('focusout', function () {
        if ($(this).hasClass("error")) {
          $(this).addClass("show-error");
        } else {
          $(this).removeClass("show-error");
        }
      });


    }


    $('#create .options-field input[type="radio"]').on('change', function(){
            var isChecked = $('#create #recommendFriend').is(':checked');

            if(isChecked) {
               showPopup('#recommend-friend');

                setTimeout(function() {
                    $('#create #recommendFriend').prop('checked', false);
                    validateApplicant();
                }, 1000);

            }

    });

    $('#create #recommend-friend input[type="text"]').on('click', function() {
       copyToClipboard('#copy-text');
       $(this).closest('.copy-text-wrap').find('.copyBtn').text('Copied');
    });

    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }

function layoutPageOnLoadandResize (){
  // Call all the layout functions on load and resize
  //setOneUpPos();
  setFitLayout();
  hammoFitLayout();
  setCarouselHeight();
  setReferralsLayout();
  setReviewsIntroHeight();
  checkCountryPopup();
  stickyHammo();
  reverseHomeHeader();
};

function checkLocalStorage(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

var viewportUrls = [];
function captureDivsInViewPort() {
  for (var i= 0; i < $(".product-container").eq(0).children().length; i++) {
    var div = $(".product-container").eq(0).children(i);
    if (isElementFullyInViewport(div.eq(i))) {
      var url = div.eq(i).attr('data-url');
      if (viewportUrls.indexOf(url) === -1) {
        viewportUrls.push(url);
        setTimeout(function() {
          gtag('config', 'UA-39495281-3', {'page_path': url});
        }, 10);
      }
    }
  }
}

function realTimeCount(){
  // Returns an object with visitors active for each product type.
  $.ajax({
    url: '/visitors_count',
    success: function(data){
      // var active = data.active
      // resp = {
      //   "active": data.active,
      //   "half-price-2020?type=hammo&group=heather-grey": 1,
      //   "half-price-2020?type=hammo&group=matte-black": 2,
      //   "half-price-2020?type=hammo&group=oatmeal": 3
      // };
      updateRealTimeData(data);
    },
    error: function(err) {
    },
    dataType: 'json'
  });
}

function updateRealTimeData(data) {
  //Update total and product wise active visitors
  if (data) {
    globalLiveView(data.active);
    // for (var i= 0; i < $(".product-container").eq(0).children().length; i++) {
    //   var div = $(".product-container").eq(0).children(i);
    //   var url = div.eq(i).attr('data-url');
    //   if (url in data) {
    //     // console.log(data[url]);
    //   }
    // }
  } else {
    $("#checkout-now").removeClass('green')
  }
}

$(document).ready(function () {
    // Initiate Unit Parallax
    if ( $('body').is('#unitPQ')){
      initParallax();
    }

    if(checkLocalStorage() === true){
        var gdpr = localStorage.getItem('gdpr')
        if (gdpr != "agreed") {
          $('body').addClass('gdpr-visible')
        }
    }else{
        $('body').addClass('gdpr-visible')
    }

    if ($('#agree').length > 0){
      $('#agree').click(function(e){
        e.preventDefault();
        localStorage.setItem('gdpr','agreed')
        $('body').removeClass('gdpr-visible')
      })
    }

    if( $('.alert').length > 0 ){
      autoHideAlert();
    }
    if($('.sticky-ticker').length > 0){
        $('.sticky-ticker').addClass('temporary-hide')
    }

    if( $("body").is('#teaser-women') ){
      $("#teaser-women .hero-text-wrap h1").removeClass('no-animate');
    };
    if( $(".scroll-to-intro").length > 0 ){
      $(".scroll-to-intro").click(function(e){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#intro").offset().top
        }, 500);
      })
    };
    if( $(".scroll-to-product").length > 0 ){
      $(".scroll-to-product").click(function(e){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#product").offset().top
        }, 500);
      })
    };
    reverseHomeHeader();
    addListeners();
    loadBodyAnimation();
    formatReferrerLink();
    showCurrentStatusOnOrderTimeline()
    setPackingTime();
    setReferralUrls();
 
  if( $("body").is('#reviews') ){
    nextCity();
  };

  if( $("body").hasClass('shop') ){
     offerTextshowHide();
  };

  layoutPageOnLoadandResize();
  AddTweetContentToBlogPages();
  showWhatsappShareLinkOnMobile()
  var cod = getUrlParameter('cod');
  if(cod == 'failed'){
    showPopup('#outofStock');
  }
  //show subscribe pop up if stock (all sizes) is 0
  check_product_stock();


if( $('body').is('#create') && $('#create #create-form').length >0 ) {
    addErrClassOnload();
    addEventListeners();
    validateApplicant();
 }
 checkTouchDevice();
 autoplayVideo();
 /* polo */
 compareInsideOutside();
 poloIntro();
 compareSliderAnimation();

  if ($('body').is('#half-price') ) {
    // Update analytics every few seconds
    setInterval(function(){
      if (document.visibilityState == "visible") {
        realTimeCount();
      }
    }, 20000)
  }
});
//End of Document Ready

// Collapse dropdown on clicking outside
$(document).bind( "click", function(e) {
    var dropdownGroup = $('.dropdown');
    var menu = dropdownGroup.find('.dropdown-list');
    var navigation = $('navigation-overlay');

    if ( !dropdownGroup.is(e.target) && !$("#cart-overlay").hasClass("show") && dropdownGroup.has(e.target).length === 0 ) {
      hideDropdown(menu);
    };
});

$(window).scroll(function () {

  if( $('body').hasClass('shop-lintroller') ) {
    lintrollerTech();
  }

  if( $('body').hasClass('home') ) {

  if ( $(window).scrollTop() > $('.home section.hero').height() - 50 ) {
     regularHeader();

   } else {
     seamlessHeader();
   }
  }
  if( $('body').hasClass('startups') ) {

    if ( $(window).scrollTop() > $('#teams').height() - 50 ) {
     regularHeader();

   } else {
     seamlessHeader();
   }
  }
  if( $('body').hasClass('hammo-uk')) {
    if ( $('#fabric').length > 0 && $(window).scrollTop() > $('#fabric').offset().top ) {
       regularHeader();

     } else {
       seamlessHeader();
     }
  }
  if( $('body').hasClass('shop') && $(window).width() > 640 ) {
    if ( $('.shop .shop-spacer').length > 0 && $(window).scrollTop() > $('.shop .shop-spacer').offset().top ) {
       regularHeader();

     } else {
       seamlessHeader();
     }
  }
  if($('.sticky-ticker').length > 0){
    stickyTicker();
  }
  stickyHammo();
  stickColourPicker();
  rewardsJiggle();

  // if ($('body').is('#half-price') ) {
  //   captureDivsInViewPort();
  // }

  //Home
  applyClassIfElementinView($('.cotton-ball'),'scale-initial');
  applyClassIfElementinView($('.tee-top'),'slide-down-initial');
  applyClassIfElementinView($('.neck-rib'),'slide-down-initial');
  applyClassIfElementinView($('.neck-rib'),'slide-down-initial');
  applyClassIfElementinView($('.cotton-comparison'),'scale-initial');
  applyClassIfElementinView($('.fabric'),'scale-initial');
  applyClassIfElementinView($('.tee-cut'),'slide-down-initial');
  applyClassIfElementinView($('.tee-patterns'),'scale-initial');
  applyClassIfElementinView($('.tee-drape'),'slide-up-initial');
  applyClassIfElementinView($('.craftsmanship-overall'),'slide-down-initial');
  applyClassIfElementinView($('.craftsmanship-stitching'),'scale-initial');
  applyClassIfElementinView($('.craftsmanship-neck'),'scale-initial');
  applyClassIfElementinView($('#fit .fit-list.one'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.two'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.three'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.four'),'slide-left-initial');
  //Hammo
  applyClassIfElementinView($('#plyTwo'),'slide-down-initial');
  applyClassIfElementinView($('#plyThree'),'slide-down-initial');
  applyClassIfElementinView($('#fabric .diagonal-knit .shot'),'scale-initial');
  applyClassIfElementinView($('#fabric .combed-cotton .shot'),'scale-initial');
  applyClassIfElementinView($('#details .shoulder-stitch .shot'),'scale-initial');
  applyClassIfElementinView($('#details .neck-rib .shot'),'scale-initial');
  applyClassIfElementinView($('#details .stitch .shot'),'scale-initial');
  //Polo
  applyClassIfElementinView($('#polo-home .polo-collar .collar-shot-wrap'),'slide-zoom-initial');
  applyClassIfElementinView($('#polo-home .packaging-polo .package-shot'),'slide-up-initial');
  //setOneUpPos();
  poloIntro();
  compareSliderDragVisibility();
  fadeInOnScroll();
  //packagingPolo();
  //Care Page
  applyClassIfElementinView($('.washing .shot'),'scale-initial');
  applyClassIfElementinView($('.detergent .shot'),'slide-left-initial');
  applyClassIfElementinView($('.drying .shot'),'scale-initial');
  applyClassIfElementinView($('.grooming .shot'),'slide-left-initial');
  applyClassIfElementinView($('.home .product-block .picture'),'scale-initial');
});

$(window).resize(function () {
  resetProductOverlay();
  layoutPageOnLoadandResize();
  stickyHammo();
  stickColourPicker();
  unfixBodyScroll();
  //Home
  applyClassIfElementinView($('.cotton-ball'),'scale-initial');
  applyClassIfElementinView($('.tee-top'),'slide-down-initial');
  applyClassIfElementinView($('.neck-rib'),'slide-down-initial');
  applyClassIfElementinView($('.cotton-comparison'),'scale-initial');
  applyClassIfElementinView($('.fabric'),'scale-initial');
  applyClassIfElementinView($('.tee-cut'),'slide-down-initial');
  applyClassIfElementinView($('.tee-patterns'),'scale-initial');
  applyClassIfElementinView($('.tee-drape'),'slide-up-initial');
  applyClassIfElementinView($('.craftsmanship-overall'),'slide-down-initial');
  applyClassIfElementinView($('.craftsmanship-stitching'),'scale-initial');
  applyClassIfElementinView($('.craftsmanship-neck'),'scale-initial');
  applyClassIfElementinView($('#fit .fit-list.one'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.two'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.three'),'slide-left-initial');
  applyClassIfElementinView($('#fit .fit-list.four'),'slide-left-initial');
  //Hammo
  applyClassIfElementinView($('#plyTwo'),'slide-down-initial');
  applyClassIfElementinView($('#plyThree'),'slide-down-initial');
  applyClassIfElementinView($('#fabric .diagonal-knit .shot'),'scale-initial');
  applyClassIfElementinView($('#fabric .combed-cotton .shot'),'scale-initial');
  applyClassIfElementinView($('#details .shoulder-stitch .shot'),'scale-initial');
  applyClassIfElementinView($('#details .neck-rib .shot'),'scale-initial');
  applyClassIfElementinView($('#details .stitch .shot'),'scale-initial');
  //Polo
  applyClassIfElementinView($('#polo-home .polo-collar .collar-shot-wrap'),'slide-zoom-initial');
  applyClassIfElementinView($('#polo-home .packaging-polo .package-shot'),'slide-up-initial');
  applyClassIfElementinView($('.home .product-block .picture'),'scale-initial');
  //setOneUpPos();
  poloIntro();
  compareSliderDragVisibility();
  fadeInOnScroll();
  //packagingPolo();
  if( $("body").is('#teaser-women') ){
    $("#teaser-women .hero-text-wrap h1").addClass('no-animate');
  };
  checkTouchDevice();
  poloIntro();
});

window.addEventListener("orientationchange", function() {
    $("#teaser-women .hero-text-wrap h1").addClass('no-animate');
}, false);
