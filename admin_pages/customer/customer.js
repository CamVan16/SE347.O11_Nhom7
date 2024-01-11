document.getElementById('customerLink').addEventListener('click', async function(event) {
  event.preventDefault(); // Ngăn chặn chuyển hướng
    fetch('../admin_pages/customer/customer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            let customer
            async function getCusData() {
                await fetch(`${API_URL}/get-user`)
                .then(res => res.json())
                .then(data => {
                    customer = data.userData;
                    console.log(customer);
                    displayCus();
                    totalCus();
                    })
                    .catch(err => {
                    console.log(err)
            })
          }
function displayCus() {
    const cusTable = document.getElementById("customer-table");
    for (const cus of customer) {
      const row = createCusRow(cus);
      cusTable.appendChild(row);
    }
  }
  
  function createCusRow(cus) {
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
    return row;
  }
  function totalCus(){
    const totalCustomer=document.getElementById("totalCus");
    var totalLength=customer.length;
    totalCustomer.textContent='Số lượng khách hàng:' + totalLength;
}
  getCusData();
  })
  .catch(error => console.error('Error:', error));
});
