let projectImg1 = document.querySelector(".projectImg")
let projectImg2 = document.querySelector(".project-img")
let contactImg1 = document.querySelector(".contact-img");
let contactImg2 = document.querySelector(".contactImg")




function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


projectImg1.addEventListener("mouseover", () => {
  projectImg1.style.boxShadow = "5px 5px 50px #111";
})

projectImg1.addEventListener("mouseout", () => {
  projectImg1.style.boxShadow = "none";

})

projectImg2.addEventListener("mouseover", () => {
  projectImg2.style.boxShadow = "5px 5px 50px #111";
})

projectImg2.addEventListener("mouseout", () => {
  projectImg2.style.boxShadow = "none";

})

contactImg1.addEventListener("mouseover", () => {
  contactImg1.style.boxShadow = "5px 5px 50px #111";
})

contactImg1.addEventListener("mouseout", () => {
  contactImg1.style.boxShadow = "none";

})

contactImg2.addEventListener("mouseover", () => {
  contactImg2.style.boxShadow = "5px 5px 50px #111";
})

contactImg2.addEventListener("mouseout", () => {
  contactImg2.style.boxShadow = "none";

})
