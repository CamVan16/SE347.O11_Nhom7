const API_URL = 'http://localhost:3000/api/v1'
// var accessToken = require('../js/home').accessToken;
import { accessToken } from '../js/home.js';
console.log('accessToken');
document.addEventListener("DOMContentLoaded", function () {
    // Thực hiện yêu cầu API để lấy thông tin người dùng khi trang đã tải xong
    fetchUserData();
  });
  async function fetchUserData() {
    try {
      const response = await fetch(`${API_URL}/get-blog`, {
        method: 'GET',
        headers: {
          'Authorization': accessToken, 
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const userData = await response.json();
      console.log(userData);
      displayData()
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }
function displayData() {
    const cusTable = document.getElementById("customer-table");
    for (const cus of userData) {
      const row = createProductRow(cus);
      cusTable.appendChild(row);
    }
  }
  
  function createProductRow(cus) {
    const row = document.createElement("tr");
    row.classList.add("customer-management-table-row");
  
    // Tạo các ô cho từng trường khách hàng
    const checkboxCell = document.createElement("td");
    checkboxCell.innerHTML = "<input type='checkbox'>";
    row.appendChild(checkboxCell);
  
    const idCell = document.createElement("td");
    idCell.textContent = cus.id;
    row.appendChild(idCell);
  
    const nameCell = document.createElement("td");
    nameCell.textContent = cus.username;
    row.appendChild(nameCell);
  
    const phoneCell = document.createElement("td");
    phoneCell.textContent = cus.phone;
    row.appendChild(phoneCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = cus.email;
    row.appendChild(emailCell);
  
    const addressCell = document.createElement("td");
    addressCell.textContent = cus.address;
    row.appendChild(addressCell);

    const actionCell = document.createElement("td");
    const detailLink = document.createElement("a");
    detailLink.href = `./detail.html?id=${product.id}`;
    detailLink.textContent = 'Xem chi tiết';
    actionCell.appendChild(detailLink);
  
    row.appendChild(actionCell);
  
    return row;
  }

getData();
