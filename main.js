const toggleNav = document.querySelector(".toggle");
const sideBar = document.querySelector(".sidebar");
let isSidebarHidden = false;

function eventListeners() {
  toggleNav.addEventListener("click", () => {
    if (isSidebarHidden) {
      sideBar.classList.remove("hidden");
      toggleNav.querySelector("i").style.transform = "rotate(0deg)";
    } else {
      sideBar.classList.add("hidden");
      toggleNav.querySelector("i").style.transform = "rotate(-90deg)";
    }
    isSidebarHidden = !isSidebarHidden;
  });

  document.addEventListener("mousemove", (e) => {
    if (isSidebarHidden) {
      if (e.clientX <= 300) {
        sideBar.classList.add("show");
      } else {
        sideBar.classList.remove("show");
      }
    }
  }
  )
}

eventListeners();
