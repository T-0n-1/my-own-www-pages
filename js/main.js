/* Script for collapsibles */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/* Scripts for changing betweem component */
function change__component(component) {
  const components = document.querySelectorAll(".component");
  components.forEach((item) => (item.style.display = "none"));
  document.getElementById(component).style.display = "flex";
}
