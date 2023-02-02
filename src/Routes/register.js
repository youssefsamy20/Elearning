const express = require("express") 
const router = express.Router()
const individual = require('../Schema/courses')
const registerController = require("../Controller/register")

router.put('/individual/:id',registerController.registerIndvidual)
router.put('/cortrainee/:id' , registerController.registerCor)








module.exports = router