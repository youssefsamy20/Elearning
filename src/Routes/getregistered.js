const express = require("express") 
const router = express.Router() 
const registeredController = require("../Controller/registeredcourses")






router.get("/individual/:id" ,registeredController.individualRegistered)
router.get('/cortrainee/:id',registeredController.corRegistered)





module.exports = router