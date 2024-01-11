import * as controllers from "../controllers"
import  express from "express";
import verifyToken from "../middleware/verify_token";

const router = express.Router();


//Auth route
router.get('/',controllers.getCustomerData);
router.use(verifyToken)
router.get('/',controllers.getCurrent);
router.post('/update',controllers.updateUserInfo);
// router.get('/',controllers.getCustomerData);
module.exports = router;