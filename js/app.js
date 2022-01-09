const social = document.querySelector(".author__socials");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("author__share--active");
  social.classList.toggle("author__socials--visible");
});