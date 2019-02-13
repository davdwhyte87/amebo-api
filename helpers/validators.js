/**
 * This method validates inputes coming into the api
 * @param {string} method - the name of the validation to be performed
 * @returns {array} - returns array of validators
 */
const validate = (method) => {
  switch (method) {
    case 'signup': {
      return [];
    }
    default: {
      return [];
    }
  }
};

export default validate;
