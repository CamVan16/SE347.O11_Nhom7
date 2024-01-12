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
// addprod.js
function addProduct1() {
    const form = document.getElementById('addProductForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/api/v1/addproducts', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '../admin_pages/admin.html';
    })
    .catch(error => console.error('Error:', error));
}
