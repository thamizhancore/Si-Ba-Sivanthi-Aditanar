window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if(window.scrollY > sec.offsetTop - 500){
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
