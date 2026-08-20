const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartContainer.innerHTML = "<h2>Your cart is empty</h2>";

} else {

    cart.forEach((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);

        cartContainer.appendChild(div);
    });
}