function getProductIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    return productId;
}
document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin sản phẩm từ server
    fetch(`http://localhost:3000/api/v1/get-pro`)
        .then(response => response.json())
        .then(product => {
            infoPerfume=product.proList;
            displayItem();
        })
        .catch(error => console.error('Error:', error));
        // Thêm sự kiện cho nút "Lưu" để xử lý khi người dùng bấm nút này
const saveButton = document.getElementById("edit");
saveButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút "Lưu"
const productId = getProductIDFromURL();
    // Lấy dữ liệu từ các trường và gửi lên server để cập nhật thông tin sản phẩm
    // const updatedData = {
    //     name: document.getElementById('productName').value,
    //     price: document.getElementById('productPrice').value,
    //     sex: document.getElementById('productSex').value,
    //     incense: document.getElementById('productIncense').value,
    //     concentration: document.getElementById('Concentration').value,
    //     brand: document.getElementById('Brand').value,
    //     origin: document.getElementById('Origin').value,
    //     style: document.getElementById('Style').value,
    //     description: document.getElementById('productDescription').value,
    //     image: document.getElementById('productImage').value
    // };
    updateProduct(productId);
});
    
});
function displayItem(){
    const productId = getProductIDFromURL(); // Lấy product id từ URL hoặc cách phù hợp với ứng dụng của bạn
    // Điền thông tin sản phẩm vào các trường
    document.getElementById('productName').value = infoPerfume[productId-1].name;
    document.getElementById('productPrice').value = infoPerfume[productId-1].price;
    document.getElementById('productSex').value = infoPerfume[productId-1].sex;
    document.getElementById('productIncense').value = infoPerfume[productId-1].incense;
    document.getElementById('Concentration').value = infoPerfume[productId-1].concentration;
    document.getElementById('Brand').value = infoPerfume[productId-1].brand;
    document.getElementById('Origin').value = infoPerfume[productId-1].origin;
    document.getElementById('Style').value = infoPerfume[productId-1].style;
    document.getElementById('productDescription').value = infoPerfume[productId-1].description;
    document.getElementById('productImage').value = infoPerfume[productId-1].image;
}




function updateProduct (productId){
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
    fetch(`http://localhost:3000/api/v1/products/${productId}`, {
        method: 'PUT',
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
            console.log('Update successful:', data);
            window.location.href = '/admin_pages/admin.html';
        })
        .catch(error => console.error('Error updating product:', error));
    }
