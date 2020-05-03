
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if(!(navbar.className.includes(" scrolled-header" )))
            navbar.className = navbar.className + " scrolled-header";
    } else {
        navbar.className = navbar.className.replace(" scrolled-header", "");
    }

}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}