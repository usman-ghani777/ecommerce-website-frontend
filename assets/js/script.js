/**
 * ShopHub Main Script
 * Handles product filtering and login page interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* =========================================
       1. SHOP PAGE FILTERING
       ========================================= */
    const filterButtons = document.querySelectorAll(".filter-buttons .filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Filter products
                const filter = button.getAttribute("data-filter");
                
                productCards.forEach(card => {
                    const category = card.getAttribute("data-category");
                    
                    if (filter === "all" || category === filter) {
                        card.style.display = "flex"; // Ensure it matches CSS display type (flex/block)
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    /* =========================================
       2. LOGIN FORM HANDLING
       ========================================= */
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            
            const email = emailInput ? emailInput.value : "";
            const password = passwordInput ? passwordInput.value : "";
            
            // Demo credentials
            const demoEmail = "admin@gmail.com";
            const demoPass  = "123456";

            if (email === demoEmail && password === demoPass) {
                alert("Login Successful!");
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password. Try: admin@gmail.com / 123456");
            }
        });
    }

    /* =========================================
       3. SOCIAL LOGIN DEMO
       ========================================= */
    const googleBtn = document.getElementById("googleLogin");
    const facebookBtn = document.getElementById("facebookLogin");

    if (googleBtn) {
        googleBtn.addEventListener("click", () => {
            alert("Google login is demo only (frontend)");
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener("click", () => {
            alert("Facebook login is demo only (frontend)");
        });
    } // Removed extra closing brace if present in previous version? No, checking syntax.
    // One extra brace was in snippet? No.
    // Syntax looks correct.
});



