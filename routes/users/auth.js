const express = require("express");

const validateRequest = require("../../middlewares/validateRequest.middleware");

const authValidations = require("../../validations/users/auth");
const authControllers = require("../../controllers/users/auth.controllers");

const router = express.Router();

router.post("/signup", validateRequest(authValidations.signup), authControllers.signup);
router.post("/login", validateRequest(authValidations.login), authControllers.login);

module.exports = router;
