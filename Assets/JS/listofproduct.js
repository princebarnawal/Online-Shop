const Listofproducts = [
    { name: "Redmi Note 11", price:23999, image: "Assets/Image/mobile.jpeg", link: "Assets/page/prod1.html" },
    { name: "Redmi Note 14 Pro", price: 4999.9, image: "Assets/Image/mobile2.jpg", link: "Assets/page/prod2.html" },
    { name: "Redmi A3", price: 12999, image: "Assets/Image/mobile3.jpg", link: "Assets/page/prod3.html" },
    { name: "Mobile Cover", price: 399, image: "Assets/Image/mb.jpeg", link: "Assets/page/prod4.html" },
    { name: "Mobile Cover", price: 699, image: "Assets/Image/cover.jpg", link: "Assets/page/prod5.html" },
    { name: "Mobile Cover", price: 499, image: "Assets/Image/cover2.jpg", link: "Assets/page/prod6.html" },
    { name: "School Shoes", price: 1899, image: "Assets/Image/sh.jpeg", link: "Assets/page/prod7.html" },
    { name: "Party Shoes", price: 2499, image: "Assets/Image/shoes2.jpg", link: "Assets/page/prod8.html" },
    { name: "Stylish Shoes", price: 1999, image: "Assets/Image/shoes.jpg", link: "Assets/page/prod9.html" },
    { name: "Headphone", price: 1299, image: "Assets/Image/HP2.jpeg", link: "Assets/page/prod10.html" },
    { name: "Headphone", price: 999, image: "Assets/Image/hp.jpeg", link: "Assets/page/prod11.html" },
    { name: "Gaming Headphone", price: 1599, image: "Assets/Image/HP.jpg", link: "Assets/page/prod12.html" }
];

const productcontainer = document.getElementById("items");

Listofproducts.forEach(product => {
    productcontainer.innerHTML += `
        <div class="item">
          <a href="${product.link}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          <p>${product.name} <br> Price: ${product.price.toFixed()}</p>
          
        </div>
      `;
});