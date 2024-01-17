const { okResponse, deleteSuccessResponse, serverErrorResponse, unauthorizedResponse } = require("generic-response");

const logger = require("../../config/logger.config");
const usersRepository = require("../../repositories/users/users");
const sendUserAccountVerifiedEmail = require("../../emails/userAccountVerified");

const getAllUsers = async (req, res) => {
  try {
    const users = await usersRepository.getAllUsers();

    const response = okResponse(users);
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse();
    return res.status(response.status.code).json(response);
  }
};

const getSingleUser = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const user = await usersRepository.getSingleUser(id);

    const response = okResponse(user);
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error);
    return res.status(response.status.code).json(response);
  }
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  try {
    const user = await usersRepository.getSingleUser(id);

    if (user.password !== data.oldPassword) {
      const response = unauthorizedResponse("Incorrect old password");
      return res.status(response.status.code).json(response);
    }

    await usersRepository.updateUser(id, { password: data.password });

    const response = okResponse(null, "Password updated successfully");
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error);
    return res.status(response.status.code).json(response);
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const user = await usersRepository.deleteUser(id);

    const response = deleteSuccessResponse(user);
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
