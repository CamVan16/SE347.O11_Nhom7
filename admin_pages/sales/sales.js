//xem doanh thu
document.getElementById('salesLink').addEventListener('click', async function(event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng

    fetch('../admin_pages/sales/sales.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            let purchaseHisItem
            async function getPurData() {
                await fetch(`${API_URL}/get-purchase-history`)
                    .then(res => res.json())
                    .then(data => {
                        purchaseHisItem=data.purchaseData;
                        console.log(purchaseHisItem);
                        displayHis();
                        totalSales(purchaseHisItem);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            //getPurData(); // Đặt ở đây để gọi ngay sau khi fetch và hiển thị sales.html
        //});

        function displayHis() {
            const hisTable = document.getElementById("order-table");
            for (const his of purchaseHisItem) {
              const row = createCusRow(his);
              hisTable.appendChild(row);
            }
          }
          
          function createCusRow(his) {
            const row = document.createElement("tr");
            row.classList.add("order-management-table-row");
          
            // Tạo các ô cho từng trường khách hàng
            const checkboxCell = document.createElement("td");
            checkboxCell.innerHTML = "<input type='checkbox'>";
            row.appendChild(checkboxCell);
          
            const idCell = document.createElement("td");
            idCell.textContent = his.id;
            row.appendChild(idCell);
          
            const userCell = document.createElement("td");
            userCell.textContent = his.userID;
            row.appendChild(userCell);
          
            const cartCell = document.createElement("td");
            cartCell.textContent = his.cartID;
            row.appendChild(cartCell);
        
            const payCell = document.createElement("td");
            payCell.textContent = his.payment;
            row.appendChild(payCell);
          
            const amountCell = document.createElement("td");
            amountCell.textContent = his.amountPaid;
            row.appendChild(amountCell);
            return row;
          }
    function totalSales(purchaseHisItem){
        var totalrevenue = 0;
        for(const purchase of purchaseHisItem){
            totalrevenue = totalrevenue + parseFloat(purchase.amountPaid);
        }
        const totalSales=document.getElementById("totalSales");
        totalSales.textContent='Tổng doanh thu của cửa hàng:' + totalrevenue;
    }
    getPurData();
  })
  .catch(error => console.error('Error:', error));
});
