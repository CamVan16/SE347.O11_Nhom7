export * from './auth'
export * from './user'
export * from './insert'
export * from './product'
export * from './blog'
export * from './purchaseHis'
export * from './addproduct'
import * as addproductController from './addproduct';
import * as productController from './product'; // Đảm bảo file này tồn tại

export { addproductController, productController };