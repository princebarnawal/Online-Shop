
function searchItems() {
  const input = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll("#items .item");

  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(input) ? "block" : "none";
  });
}


