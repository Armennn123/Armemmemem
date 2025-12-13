let buttonHeader = document.getElementsByClassName("button-header")
let buttonFooter = document.getElementsByClassName("button-footer")
let ShowMore = document.getElementById("ShowMore");
let ShowMoree = document.getElementById("ShowMoree");
const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");

function toggleBurger() {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("open");
}
function ShowMorew() {
   
  
  ShowMore.style.display = "flex";
}
function CloseMorew() {
   
  
  ShowMore.style.display = "none";
}

// ---------------------------------------------------
function OpenFooterInfoContact() {
   
  
  ShowMoree.style.display = "flex";
}
function CloseFooterInfoContact() {
   
  
  ShowMoree.style.display = "none";
}
