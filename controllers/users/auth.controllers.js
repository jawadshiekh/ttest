const jwt = require("jsonwebtoken");
const { okResponse, serverErrorResponse, unauthorizedResponse, badRequestResponse } = require("generic-response");

const logger = require("../config/logger.config");
const authRepository = require("../repositories/users/auth");
const sendWelcomeUserEmail = require("../emails/welcomeUser");

const signup = async (req, res) => {
  const data = req.body;

  try {
    const existingUser = await authRepository.getUserByEmail(data.email);

    if (existingUser) {
      const response = badRequestResponse(
        "The email address you provided is already associated with an existing account. Please use a different email address."
      );
      return res.status(response.status.code).json(response);
    }

    delete data.rePassword;
    const user = await authRepository.createUser(data);

    sendWelcomeUserEmail(data.email, `${data.firstName} ${data.lastName}`);

    const response = okResponse(user, "Your Account will be reviewed by admin");
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error);
    return res.status(response.status.code).json(response);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authRepository.getUserByEmail(email);

    if (!user) {
      const response = unauthorizedResponse("Incorrect Email");
      return res.status(response.status.code).json(response);
    }

    if (password !== user.password) {
      const response = unauthorizedResponse("Incorrect Password");
      return res.status(response.status.code).json(response);
    }

    if (user.verificationStatus !== "approved") {
      const response = unauthorizedResponse("Account Under review");
      return res.status(response.status.code).json(response);
    }

    const jwtPayload = {
      userId: user.id,
      username: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

    const response = okResponse({ token, data: jwtPayload }, "Login Successful");
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  signup,
  login,
};
