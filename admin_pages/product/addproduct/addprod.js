
function addProduct() {
    // Lấy giá trị từ các thẻ input
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productSex = document.getElementById('productSex').value;
    const productIncense = document.getElementById('productIncense').value;
    const Concentration = document.getElementById('Concentration').value;
    const Brand = document.getElementById('Brand').value;
    const Origin = document.getElementById('Origin').value;
    const Style = document.getElementById('Style').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').value;

    // Gửi dữ liệu lên server
    fetch('http://localhost:3000/api/v1/addproducts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productName,
            productPrice,
            productSex,
            productIncense,
            Concentration,
            Brand,
            Origin,
            Style,
            productDescription,
            productImage
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '/admin_pages/admin.html';
    })
    .catch(error => console.error('Error:', error));
}