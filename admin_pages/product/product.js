// const API_URL = 'http://localhost:3000/api/v1'; // Adjust the URL if needed
// let infoPerfume
// var basket = JSON.parse(localStorage.getItem("data")) || []

// async function getData() {
//     await fetch(`${API_URL}/get-pro`)
//     .then(res => {
//       return res.json()
//     })
//     .then(data => {
//       infoPerfume = data.proList
//       console.log(infoPerfume);
//       displayData()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// function displayData() {
//     const productTable = document.getElementById("product-table");
//     // productTable.innerHTML = "";
//     for (const product of infoPerfume) {
//       const row = createProductRow(product);
//       productTable.appendChild(row);
//     }
//   }
  
//   function createProductRow(product) {
//     const row = document.createElement("tr");
//     row.classList.add("product-management-table-row");
  
//     // Tạo các ô cho từng trường sản phẩm
//     const checkboxCell = document.createElement("td");
//     checkboxCell.innerHTML = "<input type='checkbox'>";
//     row.appendChild(checkboxCell);
  
//     const idCell = document.createElement("td");
//     idCell.textContent = product.id;
//     row.appendChild(idCell);
  
//     const nameCell = document.createElement("td");
//     nameCell.textContent = product.name;
//     row.appendChild(nameCell);
  
//     const priceCell = document.createElement("td");
//     priceCell.textContent = product.price;
//     row.appendChild(priceCell);
  
//     const actionCell = document.createElement("td");
//     const detailLink = document.createElement("a");
//     detailLink.href = `../edit/editprod.html?id=${product.id}`;
//     detailLink.textContent = 'Xem chi tiết';
//     actionCell.appendChild(detailLink);
  
//     row.appendChild(actionCell);
  
//     return row;
//   }
  
//   // Gọi getData để lấy dữ liệu và hiển thị ban đầu
// getData();


let deleteButtonList = document.getElementsByClassName('delete-btn');
for (let i = 0; i < deleteButtonList.length; ++i) {
    deleteButtonList[i].addEventListener('click', function (e) {
        e.preventDefault();
        let confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (confirmDelete) {
            window.location.href = this.href;
        }
    })
}