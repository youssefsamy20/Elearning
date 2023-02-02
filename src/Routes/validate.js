const express = require('express');
const { model } = require('mongoose');
const route = express.Router(); 
const {signupValidator , validatorResult} = require("../middleware/validators"); 
const {signinValidator , signinValidatorResult} = require("../middleware/validators"); 


route.post('/admin',signupValidator , validatorResult);
route.post('/instructor',signupValidator , validatorResult);
route.post('/user',signupValidator , validatorResult);






module.exports = route ; 