const express = require("express") 
const router = express.Router()
const adminController = require("../Controller/admin")






router.get("/:id" , adminController.getCourseBeforeRegistration)






module.exports = router