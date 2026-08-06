// ================================
// Load Cart from Local Storage
// ================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// Select Elements
// ================================
const cartItemsContainer = document.querySelector(".cart-items");
const totalItemsElement = document.querySelector("#total-items");
const totalPriceElement = document.querySelector("#total-price");

// ================================
// Save Cart
// ================================
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ================================
// Update Cart Badge
// ================================
function updateCartCount() {
    const cartCountElement = document.querySelector(".cart-count");

    if (!cartCountElement) return;

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCountElement.textContent = totalItems;
}

// ================================
// Render Cart
// ================================
function renderCart() {

    // Update cart badge every time
    updateCartCount();

    // Clear previous HTML
    cartItemsContainer.innerHTML = "";

    // Empty Cart
    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Add some products to your cart.</p>
            </div>
        `;

        totalItemsElement.textContent = "0";
        totalPriceElement.textContent = "0.00";

        return;
    }

    // Calculate totals
    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Display Products
    cart.forEach(product => {

        const html = `
        <div class="cart-item">

            <img src="${product.image}" alt="${product.name}" class="cart-item-image">

            <div class="cart-item-details">

                <h3>${product.name}</h3>

                <p>Price: $${product.price.toFixed(2)}</p>

                <div class="quantity-controls">

                    <button class="decrease-btn" data-id="${product.id}">
                        -
                    </button>

                    <span>${product.quantity}</span>

                    <button class="increase-btn" data-id="${product.id}">
                        +
                    </button>

                </div>

                <p>
                    Subtotal:
                    $${(product.price * product.quantity).toFixed(2)}
                </p>

            </div>

            <button class="remove-btn" data-id="${product.id}">
                Remove
            </button>

        </div>
        `;

        cartItemsContainer.innerHTML += html;

    });

    // Add Event Listeners
    document.querySelectorAll(".increase-btn").forEach(button => {
        button.addEventListener("click", increaseQuantity);
    });

    document.querySelectorAll(".decrease-btn").forEach(button => {
        button.addEventListener("click", decreaseQuantity);
    });

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", removeProduct);
    });

}

// ================================
// Increase Quantity
// ================================
function increaseQuantity(event) {

    const id = event.target.dataset.id;

    const product = cart.find(item => item.id === id);

    if (product) {
        product.quantity++;
    }

    saveCart();
    renderCart();

}

// ================================
// Decrease Quantity
// ================================
function decreaseQuantity(event) {

    const id = event.target.dataset.id;

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    saveCart();
    renderCart();

}

// ================================
// Remove Product
// ================================
function removeProduct(event) {

    const id = event.target.dataset.id;

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();

}

// ================================
// Initial Render
// ================================
renderCart();