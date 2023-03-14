import  Joi from "joi-browser";

const validate=(objectToValidate,schema)=>{
    return Joi.validate(objectToValidate,schema,{abortEarly:false});
}

export default validate