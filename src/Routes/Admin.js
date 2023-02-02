const express = require("express") 
const router = express.Router()
const adminController = require("../Controller/admin")


router.post("/addinstructor" ,adminController.addinstructor)


router.post("/addcortrainee", adminController.addcortrainee)
router.post("/filtersubject" , adminController.filtersubject)
router.post("/filterrating" , adminController.filterrating)


router.post("/addadmin" , adminController.addadmin)

router.post("/addSubject" ,adminController.addSubject)
router.get("/getsubject" ,adminController.getSubject)

router.get("/allcourses" , adminController.getCourses)
router.get("/getinsCourses" , adminController.getinsCourses)



router.post("/accessrequest/:id",adminController.accessRequest)
router.post("/filterprice" , adminController.filterprice)
router.put("/updateprice",adminController.updateprice)
router.put("/uploadviews" , adminController.uploadviews)
router.post("/addrating",adminController.addrating)
router.get("/getrequests/:id" , adminController.getRequests)

router.put("/updaterequest/:id" ,adminController.updaterequest)
router.put("/updatereject/:id" , adminController.updatereject)
router.post("/financial" , adminController.financial)
router.post("/technical" , adminController.technical)
router.post("/other" , adminController.other)
router.post("/addpreview" , adminController.addpreview)
router.get("/searchsubject" , adminController.searchsubject)
router.post("/incfilterprice" , adminController.incfilterprice)

router.post("/updatepriceforall" , adminController.updatepriceforall)










module.exports = router