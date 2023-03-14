import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().min(2).max(20).required().label("Email"),
  password: Joi.string().min(2).max(20).required().label("Password"),
};

export default loginSchema;
