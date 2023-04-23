const more = document.querySelector(".more");
const dropdown = document.querySelector(".dropdown");

more.addEventListener("mouseenter", (e) => {
  dropdown.classList.remove("hide");
  console.log("I'm here");
  e.stopPropagation();
});

more.addEventListener("mouseleave", (e) => {
  dropdown.classList.add("hide");
  console.log("I'm hiding");
  e.stopPropagation();
});
