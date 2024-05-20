/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu. */
function toggleHamburgerMenu() {
  var menu = document.getElementById("hamburgerMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

/* Hide the navigation menu links when the user clicks outside the hamburger menu. */
function hideHamburgerMenu() {
  var menu = document.getElementById("hamburgerMenu");
  menu.style.display = "none";
}
