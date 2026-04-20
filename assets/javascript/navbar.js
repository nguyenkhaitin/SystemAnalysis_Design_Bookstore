const navBtn = document.querySelector(".js-btn-navbar");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".js-close");

function showHeader() {
  modal.classList.add("open");
}

function hideHeader() {
  modal.classList.remove("open");
}
navBtn.addEventListener("click", showHeader);
modalClose.addEventListener("click", hideHeader);
