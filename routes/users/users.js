const express = require("express");

const validateRequest = require("../../middlewares/validateRequest.middleware");

const userValidations = require("../../validations/users/users");
const userControllers = require("../../controllers/users/users.controllers");

const router = express.Router();

router.get("/", validateRequest(userValidations.getAllUsers), userControllers.getAllUsers);
router.get("/:id", validateRequest(userValidations.getSingleUser), userControllers.getSingleUser);
router.patch("/verify/:id", validateRequest(userValidations.verifyUser), userControllers.verifyUser);
router.patch("/:id", validateRequest(userValidations.updateUser), userControllers.updateUser);
router.delete("/:id", validateRequest(userValidations.deleteUser), userControllers.deleteUser);

module.exports = router;
