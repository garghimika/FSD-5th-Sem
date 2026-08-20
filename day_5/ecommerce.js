let products = [];

const getProductsData = async () => {

    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products;

    products.forEach((product) => {

        const productsContainer =
            document.getElementById("products-container");

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("h3");
        price.innerText = `$${product.price}`;

        // Counter
        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const addItemSpan = document.createElement("span");
        addItemSpan.innerText = "0";

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(addItemSpan);
        div.appendChild(incrementBtn);

        productsContainer.appendChild(div);

        let counter = 0;

        // +
        incrementBtn.addEventListener("click", () => {

            counter++;

            addItemSpan.innerText = counter;

            localStorage.setItem(
                "product",
                JSON.stringify(product)
            );

        });

        // -
        decrementBtn.addEventListener("click", () => {

            if (counter > 0) {
                counter--;
                addItemSpan.innerText = counter;
            }

        });

    });
};

getProductsData();