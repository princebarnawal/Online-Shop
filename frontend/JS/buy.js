const Listofproducts = [
    { name: "Redmi Note 11", price: 23999, image: "../Assets/Image/mobile.jpeg" },
    { name: "Redmi Note 14 Pro", price: 4999.9, image: "../Assets/Image/mobile2.jpg" },
    { name: "Redmi A3", price: 12999, image: "../Assets/Image/mobile3.jpg" },
    { name: "Mobile Cover", price: 399, image: "../Assets/Image/mb.jpeg" },
    { name: "Mobile Cover", price: 699, image: "../Assets/Image/cover.jpg" },
    { name: "Mobile Cover", price: 499, image: "../Assets/Image/cover2.jpg" },
    { name: "School Shoes", price: 1899, image: "../Assets/Image/sh.jpeg" },
    { name: "Party Shoes", price: 2499, image: "../Assets/Image/shoes2.jpg" },
    { name: "Stylish Shoes", price: 1999, image: "../Assets/Image/shoes.jpg" },
    { name: "Headphone", price: 1299, image: "../Assets/Image/HP2.jpeg" },
    { name: "Headphone", price: 999, image: "../Assets/Image/hp.jpeg" },
    { name: "Gaming Headphone", price: 1599, image: "../Assets/Image/HP.jpg" }
];

const productcontainer = document.getElementById("items");

Listofproducts.forEach((product, index) => {
    // Encode name and image path for URL
    const nameParam = encodeURIComponent(product.name);
    const priceParam = encodeURIComponent(product.price);
    const imageParam = encodeURIComponent(product.image);

    const link = `./page/buy-now.html?name=${nameParam}&price=${priceParam}&image=${imageParam}`;

    productcontainer.innerHTML += `
        <div class="item">
            <a href="${link}">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <p>${product.name} <br> Price: ₹${product.price.toFixed()}</p>
        </div>
    `;
});
