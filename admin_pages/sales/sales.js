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
                        totalSales(purchaseHisItem);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            getPurData(); // Đặt ở đây để gọi ngay sau khi fetch và hiển thị sales.html
        });

    function totalSales(purchaseHisItem){
        var totalrevenue = 0;
        for(const purchase of purchaseHisItem){
            totalrevenue = totalrevenue + parseFloat(purchase.amountPaid);
        }
        const totalSales=document.getElementById("totalSales");
        totalSales.textContent='Tổng doanh thu của cửa hàng:' + totalrevenue;
    }
});
