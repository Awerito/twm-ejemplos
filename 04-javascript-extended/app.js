const $ = (s) => document.querySelector(s);

const products = [
  { name: "Paleta Lebrun", stock: 3 },
  { name: "Pelotas (x6)", stock: 0 },
  { name: "Goma Tenergy", stock: 5 },
];

const ProductCard = ({ name, stock }) => `
  <div class="product">
    <h3>${name}</h3>
    <p>Stock: ${stock}</p>
  </div>`;

function renderCatalog(list) {
  $("#catalog").innerHTML = list.map(ProductCard).join("");
}

$("#onlyStock").addEventListener("change", (e) => {
  if (e.target.checked) {
    renderCatalog(products.filter((p) => p.stock > 0));
  } else {
    renderCatalog(products);
  }
});

renderCatalog(products);
