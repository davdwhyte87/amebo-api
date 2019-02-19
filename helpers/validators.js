import check from 'express-validator/check';
/**
 * This method validates inputes coming into the api
 * @param {string} method - the name of the validation to be performed
 * @returns {array} - returns array of validators
 */
const validate = (method) => {
  switch (method) {
    case 'signup': {
      return [
        check.body('name', 'A valid name is required').exists()
          .isString().isAlpha()
          .isLength({ min: 5, max: 30 }),
        check.body('email', 'A valid email is required').exists()
          .isString()
          .isEmail()
          .isLength({ min: 5, max: 30 }),
        check.body('password', 'A valid password is required').exists()
          .trim().isString()
          .isLength({ min: 5, max: 30 }),
      ];
    }
    default: {
      return [];
    }
  }
};

export default validate;
