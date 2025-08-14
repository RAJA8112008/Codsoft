const pages = {
    home: `
        <section class="hero">
            <h1>Welcome to RajaMart</h1>
            <p>Your one-stop destination for premium products.</p>
            <button onclick="navigateTo('shop')">Shop Now</button>
        </section>
    `,
    shop: `
        <section class="products" id="product-list"></section>
    `,
    about: `
        <section class="hero">
            <h1>About RajaMart</h1>
            <p>At RajaMart, we strive to provide the best products at unbeatable prices.</p>
        </section>
    `,
    contact: `
        <section class="hero">
            <h1>Contact Us</h1>
            <p>Have questions? Reach out to us at contact@rajamart.com</p>
        </section>
    `,
};

const products = [
    { id: 1, name: "Wireless Headphones", price: 79.99, image: "https://images.unsplash.com/photo-1585386959984-a415522bafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 2, name: "Smartwatch", price: 129.99, image: "https://images.unsplash.com/photo-1598300056329-80b469c3c3d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 3, name: "Bluetooth Speaker", price: 49.99, image: "https://images.unsplash.com/photo-1557682250-22ff8c5ef6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 4, name: "Fitness Tracker", price: 59.99, image: "https://images.unsplash.com/photo-1562824371-9343527f0e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" }
];

function navigateTo(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page];

    if (page === "shop") {
        const productList = document.getElementById("product-list");
        products.forEach(product => {
            const productHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            productList.innerHTML += productHTML;
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const page = e.target.dataset.page;
        navigateTo(page);
    });
});

// Initialize home page
navigateTo("home");
