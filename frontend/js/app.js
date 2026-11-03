let products = JSON.parse(localStorage.getItem("smartstock-products") || "[]");

function render() {
  document.getElementById("total").textContent = products.length;
  document.getElementById("low").textContent =
    products.filter(p => p.quantity < 10).length;
  document.getElementById("units").textContent =
    products.reduce((sum,p) => sum + p.quantity,0);

  document.getElementById("productList").innerHTML = products.map((p,i) => `
    <tr>
      <td>${escapeHTML(p.name)}</td>
      <td>${p.quantity}</td>
      <td>₹${p.price.toFixed(2)}</td>
      <td><button onclick="removeProduct(${i})">Delete</button></td>
    </tr>
  `).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function save() {
  localStorage.setItem("smartstock-products",JSON.stringify(products));
  render();
}
document.getElementById("productForm").addEventListener("submit", e => {
  e.preventDefault();
  products.push({
    name:document.getElementById("name").value,
    quantity:Number(document.getElementById("quantity").value),
    price:Number(document.getElementById("price").value)
  });
  save();
  e.target.reset();
});
function removeProduct(i) {
  products.splice(i,1);
  save();
}
render();
