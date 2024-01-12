import * as controllers from "../controllers"
import  express from "express";
const router = express.Router();

router.get('/',controllers.getCustomerData);
module.exports = router;