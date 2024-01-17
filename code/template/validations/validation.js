const Joi = require("joi");

const getAll<%= entityName.pluralize().capitalize() %> = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

const getSingle<%= entityName.capitalize() %> = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

const create<%= entityName.capitalize() %> = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

const update<%= entityName.capitalize() %> = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

const delete<%= entityName.capitalize() %> = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

module.exports = {
  getAll<%= entityName.pluralize().capitalize() %>,
  getSingle<%= entityName.capitalize() %>,
  create<%= entityName.capitalize() %>,
  update<%= entityName.capitalize() %>,
  delete<%= entityName.capitalize() %>,
};
