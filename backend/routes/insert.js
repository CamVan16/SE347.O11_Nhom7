import * as controllers from "../controllers"
import  express from "express";
const router = express.Router();

router.get('/pro', controllers.insertPro);
router.get('/blog', controllers.insertBlog);
module.exports = router;