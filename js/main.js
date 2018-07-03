
// universal scroll // 
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log(this.hash);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -80
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// hamburger Menu //
const hamburgerMenu = function (x) {
   x.classList.toggle("change");
   newFunction(x);
} 



// responsive menu //

$('.menu-btn').click(function(){
  $('nav').toggleClass('nav-open');
});