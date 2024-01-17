const express = require("express");

const validateRequest = require("@/middlewares/validateRequest.middleware");

const <%= entityName.toLowerCase() %>Validations = require("@/validations/<%= entityName.pluralize() %>/<%= entityName.pluralize() %>");
const <%= entityName.toLowerCase() %>Controllers = require("@/controllers/<%= entityName.pluralize() %>/<%= entityName.pluralize() %>.controllers");

const router = express.Router();

router.get(
    "/",
    validateRequest(<%= entityName.toLowerCase() %>Validations.getAll<%= entityName.pluralize().capitalize() %>),
    <%= entityName.toLowerCase() %>Controllers.getAll<%= entityName.pluralize().capitalize() %>);
router.get(
    "/:id",
    validateRequest(<%= entityName.toLowerCase() %>Validations.getSingle<%= entityName.capitalize() %>),
    <%= entityName.toLowerCase() %>Controllers.getSingle<%= entityName.capitalize() %>);
router.post("/",
    validateRequest(<%= entityName.toLowerCase() %>Validations.create<%= entityName.capitalize() %>),
    <%= entityName.toLowerCase() %>Controllers.create<%= entityName.capitalize() %>);
router.patch(
    "/:id",
    validateRequest(<%= entityName.toLowerCase() %>Validations.update<%= entityName.capitalize() %>),
    <%= entityName.toLowerCase() %>Controllers.update<%= entityName.capitalize() %>);
router.delete(
    "/:id",
    validateRequest(<%= entityName.toLowerCase() %>Validations.delete<%= entityName.capitalize() %>),
    <%= entityName.toLowerCase() %>Controllers.delete<%= entityName.capitalize() %>);

module.exports = router;
