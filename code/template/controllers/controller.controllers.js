const { okResponse, createSuccessResponse, updateSuccessResponse, deleteSuccessResponse, serverErrorResponse } = require("generic-response");

const <%= entityName.pluralize() %>Repository = require("@/repositories/<%= entityGroupName.pluralize() %>/<%= entityName.pluralize() %>");

const getAll<%= entityName.pluralize().capitalize() %> = async (req, res) => {
  try {
    let <%= entityName.pluralize() %> = await <%= entityName.pluralize() %>Repository.getAll<%= entityName.pluralize().capitalize() %>();

    const response = okResponse(<%= entityName.pluralize() %>);
    res.json(response);
  } catch (error) {
    const response = serverErrorResponse();
    res.json(response);
  }
};

const getSingle<%= entityName.capitalize() %> = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    let <%= entityName %> = await <%= entityName.pluralize() %>Repository.getSingle<%= entityName.capitalize() %>(id);

    const response = okResponse(<%= entityName %>);
    res.json(response);
  } catch (error) {
    const response = serverErrorResponse(error);
    res.json(response);
  }
};

const create<%= entityName.capitalize() %> = async (req, res) => {
  const data = req.body;

  try {
    const <%= entityName %> = await <%= entityName.pluralize() %>Repository.create<%= entityName.capitalize() %>(data);

    const response = createSuccessResponse(<%= entityName %>);
    res.json(response);
  } catch (error) {
    const response = serverErrorResponse(error);
    res.json(response);
  }
};

const update<%= entityName.capitalize() %> = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    const <%= entityName %> = await <%= entityName.pluralize() %>Repository.update<%= entityName.capitalize() %>(id, data);

    const response = updateSuccessResponse(<%= entityName %>);
    res.json(response);
  } catch (error) {
    const response = serverErrorResponse(error);
    res.json(response);
  }
};

const delete<%= entityName.capitalize() %> = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const <%= entityName %> = await <%= entityName.pluralize() %>Repository.delete<%= entityName.capitalize() %>(id);

    const response = deleteSuccessResponse(<%= entityName %>);
    res.json(response);
  } catch (error) {
    const response = serverErrorResponse(error);
    res.json(response);
  }
};

module.exports = {
  getAll<%= entityName.pluralize().capitalize() %>,
  getSingle<%= entityName.capitalize() %>,
  create<%= entityName.capitalize() %>,
  update<%= entityName.capitalize() %>,
  delete<%= entityName.capitalize() %>,
};
