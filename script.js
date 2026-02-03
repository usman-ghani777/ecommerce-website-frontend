// shop section add filter for the products
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




// Login form js

const form = document.getElementById("loginForm");

form.addEventListener("submit",function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const demoEmail = "admin@gmail.com";
  const demoPass  = "123456";
  if(email===demoEmail && password===demoPass){
    alert("Login Successfull");

    localStorage.setItem("isLoggedIn","true");

    window.location.href = "index.html";

  }

   else {
    alert("Invalid email or password");
   }
});

// Google button (demo)
document.getElementById("googleLogin").addEventListener("click", () => {
    alert("Google login is demo only (frontend)");
});

// Facebook button (demo)
document.getElementById("facebookLogin").addEventListener("click", () => {
    alert("Facebook login is demo only (frontend)");
});



