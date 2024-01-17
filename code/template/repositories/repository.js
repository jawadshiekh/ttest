const prisma = require("@/config/database.config");

const getAll<%= entityName.pluralize().capitalize() %> = async () => {
  try {
    const <%= entityName.pluralize() %> = await prisma.<%= entityName.pluralize() %>.findMany();
    return <%= entityName.pluralize() %>;
  } catch (error) {
    throw error;
  }
};

const getSingle<%= entityName.capitalize() %> = async (id) => {
  try {
    const <%= entityName %> = await prisma.<%= entityName.pluralize() %>.findFirst({ where: { id } });
    return <%= entityName %>;
  } catch (error) {
    throw error;
  }
};

const create<%= entityName.capitalize() %> = async (data) => {
  try {
    const <%= entityName %> = await prisma.<%= entityName.pluralize() %>.create({ data });
    return <%= entityName %>;
  } catch (error) {
    throw error;
  }
};

const update<%= entityName.capitalize() %> = async (id, data) => {
  try {
    const <%= entityName %> = await prisma.<%= entityName.pluralize() %>.update({ data, where: { id } });
    return <%= entityName %>;
  } catch (error) {
    throw error;
  }
};

const delete<%= entityName.capitalize() %> = async (id) => {
  try {
    const <%= entityName %> = await prisma.<%= entityName.pluralize() %>.delete({ where: { id } });
    return <%= entityName %>;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll<%= entityName.pluralize().capitalize() %>,
  getSingle<%= entityName.capitalize() %>,
  create<%= entityName.capitalize() %>,
  update<%= entityName.capitalize() %>,
  delete<%= entityName.capitalize() %>,
};
