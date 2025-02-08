let hamburgerButton = document.getElementById("hamburgerButton");
let mobileMenuList = document.getElementById("mobileMenuList");

hamburgerButton.addEventListener("click", () => {
  mobileMenuList.classList.toggle("show");
});

window.onclick = (event) => {
  if (!event.target.matches(".hamburger-button")) {
    let dropdowns = document.getElementsByClassName("mobile-menu-list");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};