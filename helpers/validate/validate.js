import INPUT_FIELDS from './fields.const';
import MESSAGES from './messages.const';

const validationResponse = {
  valid: true,
  errors: [],
  // errors: {},
};

const validate = (value, type, rules) => {
  if (!type && !rules) {
    if (value) {
      return {
        ...validationResponse,
        valid: true,
        errors: [],
      };
    }
    return {
      ...validationResponse,
      valid: false,
      errors: [
        MESSAGES.REQUIRED,
      ],
    };
  }

  if (type === INPUT_FIELDS.EMAIL) {
    return validateEmail(value);
  }
  if (type === INPUT_FIELDS.EMAIL) {
    return validateEmail(value);
  }
};

const validateRequired = value => {
  if (!value) {
    return {
      ...validationResponse,
      valid: false,
      errors: [
        MESSAGES.REQUIRED,
      ],
    };
  }
  return null;
};

const validateEmail = value => {
  if (validateRequired(value)) {
    return validateRequired(value);
  }

  if (value && value.search(/^(?:\w+[\-\.])*\w+@(?:\w+[\-\.])*\w+\.\w+$/) === -1) {
    if (!value) return {
      ...validationResponse,
      valid: true,
      errors: [
        MESSAGES.INVALID,
      ],
    };
  //  errors.email = [];
  //  errors.email.push('err_email_format');
  }

  return {
    ...validationResponse,
    valid: false,
    errors: [
      MESSAGES.INVALID,
    ],
  };
};

const validatePassword = value => {

  if (validateRequired(value)) {
    return validateRequired(value);
  }

  if (value && value.search(/\b(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,32}\b/g)) {
    if (!value) return {
      ...validationResponse,
      valid: true,
      errors: [
        MESSAGES.INVALID,
      ],
    };
    // errors.password = [];
    // errors.password.push('err_password_criteria');
  }
  if (value !== value) {
    if (!value) return {
      ...validationResponse,
      valid: true,
      errors: [
        MESSAGES.INVALID,
      ],
    };
    // errors.confirmPassword = [];
    // errors.confirmPassword.push('err_password_match');
  }

};

export {
  INPUT_FIELDS,
  MESSAGES,
};

const validationHelper = {
  validate,
  validateEmail,
  validatePassword,
};

export default validationHelper;
