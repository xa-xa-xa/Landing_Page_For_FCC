
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
          scrollTop: target.offset().top -50
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// hamburger Menu //
const hamburgerMenu = function (x) {
   x.classList.toggle("change");
} 
// responsive menu //
function unfoldMenu() {
  var y = document.getElementById("hamburger");
  if (y.className === "topnav") {
      y.className += " responsive";
  } else {
      y.className = "topnav";
  }
}
