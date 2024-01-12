const API_URL = 'http://localhost:3000/api/v1'; 
document.getElementById('productLink').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng

    fetch('../admin_pages/product/product.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
    
            let infoPerfume
            var basket = JSON.parse(localStorage.getItem("data")) || []

            async function getData() {
                await fetch(`${API_URL}/get-pro`)
                .then(res => {
                return res.json()
            })
            .then(data => {
            infoPerfume = data.proList
            console.log(infoPerfume);
            displayData();
            total();
            })
            .catch(err => {
            console.log(err)
            })
        }
    function displayData() {
    const productTable = document.getElementById("product-table");
    for (const product of infoPerfume) {
    const row = createProductRow(product);
    productTable.appendChild(row);
    }
}

function createProductRow(product) {
const row = document.createElement("tr");
row.classList.add("product-management-table-row");

// Tạo các ô cho từng trường sản phẩm
const checkboxCell = document.createElement("td");
checkboxCell.innerHTML = "<input type='checkbox'>";
row.appendChild(checkboxCell);

const idCell = document.createElement("td");
idCell.textContent = product.id;
row.appendChild(idCell);

const nameCell = document.createElement("td");
nameCell.textContent = product.name;
row.appendChild(nameCell);

const priceCell = document.createElement("td");
priceCell.textContent = product.price;
row.appendChild(priceCell);

const actionCell = document.createElement("td");
const detailLink = document.createElement("a");
detailLink.href = `../admin_pages/product/editprod/editprod.html?id=${product.id}`;
detailLink.textContent = 'Xem chi tiết';

detailLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Chuyển hướng đến trang edit.html khi liên kết được click
    window.location.href = `../admin_pages/product/editprod/editprod.html?id=${product.id}`;
});
actionCell.appendChild(detailLink);

row.appendChild(actionCell);

return row;
}

function total(){
    const totalItem=document.getElementById("totalItem");
    var totalLength=infoPerfume.length;
    totalItem.textContent='Số lượng mặt hàng:' + totalLength;
}
getData();
})
    .catch(error => console.error('Error:', error));
});

document.addEventListener("DOMContentLoaded", function () {
    var logoutbutton = document.getElementById("logoutAdmin");
    var userLink = document.getElementById("user-link");
    var mUserLink = document.getElementById("m-user-link");
    logoutbutton.addEventListener("click", function () {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("access_token_SM","")
      userLink.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
      mUserLink.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
      window.location.href = "/pages/home.html";
    });
  });


