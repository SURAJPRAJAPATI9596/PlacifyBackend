const express = require("express");
const router = express.Router();
const passport = require("./../config/passport");
const authController = require("./../controllers/auth.controller");
const loginMiddleware = require("./../middlewares/login.middleware");
router.route("/").post(authController.registerController);
router.route("/login").post(loginMiddleware, authController.loginController);
router.route("/status").get(authController.statusController);
module.exports = router;
