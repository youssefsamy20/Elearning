const express = require("express") 
const router = express.Router()
const instructorController = require("../Controller/instructor")
const guestController = require('../Controller/guest')
const instructor = require("../Schema/instructor")





router.get("/viewcourse",guestController.getcourses)



router.post('/addcourse', instructorController.AddCourse)
router.post("/addrating",instructorController.addrating)

router.get("/dashboard/:id",instructorController.getMycourses)

router.get('/get' , instructorController.getme)
router.post("/submit-answers" , instructorController.setThegrade)
router.post("/addsubtitle",instructorController.addSubtitle)
router.post('/' , instructorController.addQuestion)
router.post('/show',instructorController.addExam )
router.put("/bio" , instructorController.editBio)
router.get("/getbio/:id" , instructorController.getBio)
router.put("/contract/:id",instructorController.updateContract)
router.get("/getexam/:id" , instructorController.getExam)
router.get("/getemail/:id" , instructorController.getemail)
router.put("/editemail/:id" , instructorController.editemail)



module.exports = router