function afficherMenu() {
  var menu = document.getElementById("menuContainer");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}