import user from './Auser'
import auth from './auth'
import insert from './insert'
import product from './product'
import blog from './blog'
import purchaseHis from './purchaseHis'
import cus from './getCus'
import { notFound } from '../middleware/handle_error'
const initRoutes = (app) => {

  app.use ('/api/v1/user',user)
  app.use ('/api/v1/auth',auth)
  app.use ('/api/v1/insert',insert)
  app.use ('/api/v1/get-pro',product)
  app.use ('/api/v1/get-blog',blog)
  app.use ('/api/v1/checkout',purchaseHis)
  app.use('/api/v1/get-purchase-history', purchaseHis)
  app.use ('/api/v1/get-user',cus)
  app.use ('/api/v1/products/:id',product)
  app.use ('/api/v1/addproducts',product)
  app.use(notFound)
};
module.exports = initRoutes;
