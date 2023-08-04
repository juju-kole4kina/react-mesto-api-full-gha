const jsonwebtoken = require('jsonwebtoken');

// const JWT_SECRET = '../utils/constants.js';
const { NODE_ENV, JWT_SECRET } = process.env;
const UnauthorizationError = require('../errors/unauthorization-err');

const auth = (req, res, next) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    throw new UnauthorizationError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jsonwebtoken.verify(jwt, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(err);
  }

  req.user = payload;

  next();
};

module.exports = { auth };
