const imageList = [
    { src: "Assets/Image/hp.jpeg", alt: "Headphone" },
    { src: "Assets/Image/sh.jpeg", alt: "Shoes" },
    { src: "Assets/Image/earing.jpeg", alt: "Earring" },
    { src: "Assets/Image/mb.jpeg", alt: "Mobile cover" },
    { src: "Assets/Image/doll.jpg", alt: "doll" },
    { src: "Assets/Image/ju.png", alt: "juicer" },
    { src: "Assets/Image/sss.png", alt: "shampoo" },
    { src: "Assets/Image/ccc.png", alt: "choppng board" },
    { src: "Assets/Image/book.png", alt: "book" },
    { src: "Assets/Image/bag.jpeg", alt: "bag" },
    { src: "Assets/Image/water bottle.jpeg", alt: "water bottle" },
    { src: "Assets/Image/charger.jpeg", alt: "charger" },
    { src: "Assets/Image/ring.png", alt: "ring" },
    { src: "Assets/Image/necklace.png", alt: "necklace" },
    { src: "Assets/Image/bedsheet.png", alt: "bedsheet" },
    { src: "Assets/Image/induction.png", alt: "induction" }
  ];
  const container = document.getElementById("images");

  imageList.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "box";
    div.id = "image" + (index + 1);

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.id = "image" + (index + 1);
    div.appendChild(img);
    container.appendChild(div);
  });