const Joi = require("joi");

const getAllDepartments = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

const getSingleDepartment = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({}),
});

const updateDepartment = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    oldPassword: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

const deleteDepartment = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({}),
});

module.exports = {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
