import * as controllers from "../controllers"
import  express from "express";
const router = express.Router();

router.post('/', controllers.checkout);
router.get('/', controllers.getPurchaseHistoryData);
module.exports = router;