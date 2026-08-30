document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  burger?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.classList.toggle("burger-active", isOpen);
  });

  const dots = document.querySelectorAll(".slide-dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});
