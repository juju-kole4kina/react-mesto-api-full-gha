const { CONFLICT_STATUS_CODE } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_STATUS_CODE;
  }
}

module.exports = ConflictError;
