$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".container-fluid");
    var navbar = $(".navbar");
	var navbarBrand = $(".navbar-brand");
	var myLogo = $(".my-logo");
	var headerSurname = $(".header-surname");
	var navbarCollapse = $(".navbar-collapse");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100)
        {
            header.addClass("non-transparent-navbar");
            navbar.addClass("smaller-navbar");
			navbarBrand.addClass("smaller-navbar-brand");
			myLogo.addClass("smaller-my-logo");
			headerSurname.addClass("smaller-header-surname");
			navbarCollapse.addClass("smaller-navbar-collapse");
        } else {
            header.removeClass("non-transparent-navbar");
            navbar.removeClass("smaller-navbar");
			navbarBrand.removeClass("smaller-navbar-brand");
			myLogo.removeClass("smaller-my-logo");
			headerSurname.removeClass("smaller-header-surname");
			navbarCollapse.removeClass("smaller-navbar-collapse");
        }
    });
});

function hideNavbar()
{
  $(".navbar-collapse").removeClass("show");
}

function removeCollapsing()
{
  $(".navbar-toggler").removeClass("collapsing");
}
