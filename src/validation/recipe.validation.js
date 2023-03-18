import Joi from "joi-browser";
/**
 * •	
•	תמונה
כותרת
•	תיאור
•	זמן הכנה
•	מספר מנות
•	דרגת קושי
•	סוג: חלבי/ בשרי/פרווה
•	מצרכים
•	אופן ההכנה


 */
const recipeSchema = {
  
  recipeTitle: Joi.string().min(2).max(255).required(),
  recipeImg: Joi.string()
    .regex(/^http(s?)\:\/\/(\.?)/)
    .required(),
  recipeDescription: Joi.string().min(2).max(255).required(),
  recipeClock: Joi.string().min(2).max(10).required(),
  recipeUser: Joi.string().min(1).max(10).required(),
  recipeType: Joi.string().min(2).max(255).required(),
  recipeLevel: Joi.string().min(2).max(10).required(),
  recipeIngredients:Joi.string().min(2).max(1024).required(),
  recipePreparation:Joi.string().min(2).max(1024).required(),

  //user_id: Joi.string().length(24).hex().required().trim(),
};

export default recipeSchema;
