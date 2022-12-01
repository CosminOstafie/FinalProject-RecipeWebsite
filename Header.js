const togglebtn = document.getElementsByClassName("togglebtn")[0];
let menus = document.getElementsByClassName("menus")[0];
const searchBar = document.getElementsByClassName("search")[0];

togglebtn.addEventListener("click", function () {
  menus.classList.toggle("active");
  if (menus.style.display === "flex" && searchBar.style.display === "flex") {
    menus.style.display = "none";
    searchBar.style.display = "none";
  } else {
    menus.style.display = "flex";
    searchBar.style.display = "flex";
  }
});
