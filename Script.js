// Bu kod, API'den verileri çeker ve HTML sayfasına yerleştirir.
document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.getElementById("menu-list");

  // API URL'si
  const apiUrl = "https://northwind.vercel.app/api/products";

  // API'den verileri çekme
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // API'den gelen verileri kullanarak menüyü oluştur
      data.slice(0, 5).forEach((product) => {
        const menuItem = document.createElement("li");
        menuItem.innerHTML = `${product.ProductName} - $${product.UnitPrice}`;
        menuList.appendChild(menuItem);
      });
    })
    .catch((error) => {
      console.error("Veriler alınamadı:", error);
    });
});
