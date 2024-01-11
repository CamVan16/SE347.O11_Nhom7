// addprod.js
function addProduct() {
    const form = document.getElementById('addProductForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/api/v1/products', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '../product.html';
    })
    .catch(error => console.error('Error:', error));
}
