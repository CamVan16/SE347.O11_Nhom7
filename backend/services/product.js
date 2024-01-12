import db from "../models";

export const getAllPro = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got product list successfully" : "Product list not found",
        proList: response
      });
    } catch (error) {
        reject(error)
    }
  });

  // export const updateProduct = (productId, updatedProductData) =>
  // new Promise(async (resolve, reject) => {
  //   try {
  //     const [updatedRowsCount, updatedProducts] = await db.Product.update(updatedProductData, {
  //       where: {
  //         id: productId,
  //       },
  //       returning: true,
  //     });

  //     if (updatedRowsCount === 0) {
  //       resolve({
  //         err: 1,
  //         mes: "Product not found",
  //       });
  //       return;
  //     }

  //     resolve({
  //       err: 0,
  //       mes: "Product updated successfully",
  //       product: updatedProducts[0],
  //     });
  //   } catch (error) {
  //     reject(error);
  //   }
  // });
  // services/products.js
export const updateProduct = (productId, updatedProductData) =>
new Promise(async (resolve, reject) => {
  try {
    // Tìm sản phẩm theo ID
    const product = await db.Product.findByPk(productId);

    if (!product) {
      resolve({
        err: 1,
        mes: "Product not found",
      });
      return;
    }

    // Cập nhật dữ liệu sản phẩm
    await product.update(updatedProductData);

    resolve({
      err: 0,
      mes: "Product updated successfully",
      product: product,
    });
  } catch (error) {
    reject(error);
  }
});
