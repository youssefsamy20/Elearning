const express = require("express")
const route = express.Router() 
const changePasswordController = require("../Controller/changepassword")




route.put('/user/:id', changePasswordController.changeuser)
route.put('/instructor/:id' ,changePasswordController.changeInst)
route.put('/admin/:id' , changePasswordController.changeAdmin)
route.put('/cortrainee/:id' , changePasswordController.changeCor)







module.exports= route 