document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons .filter-btn");
  const cards = document.querySelectorAll(".product-card");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        card.style.display = (filter === "all" || category === filter) ? "block" : "none";
      });
    });
  });
});
