const express = require("express") 
const router = express.Router()
const adminController = require("../Controller/admin")



router.post("/:id" , adminController.recieveRequest)


module.exports = router;