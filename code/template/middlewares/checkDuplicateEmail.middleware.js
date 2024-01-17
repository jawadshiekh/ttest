const { badRequestResponse, serverErrorResponse } = require('generic-response');

const logger = require('@/config/logger.config');
const { getUserByEmail } = require('@/repositories/users/users');

const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (user) {
      const response = badRequestResponse(
        'The email address you provided is already associated with an existing account. Please use a different email address.',
      );
      return res.status(response.status.code).json(response);
    }

    next();
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse();
    return res.status(response.status.code).json(response);
  }
};

module.exports = checkDuplicateEmail;
