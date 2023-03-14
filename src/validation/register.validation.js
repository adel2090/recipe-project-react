import Joi from "joi-browser";

const registerSchema = {
  name: Joi.string().min(2).max(255).required().label("Name"),
  email: Joi.string().min(2).max(20).required().label("Email"),
  password: Joi.string().min(2).max(20).required().label("Password"),
  isChef: Joi.boolean(),
};

export default registerSchema;
