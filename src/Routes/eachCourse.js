const express = require("express"); 
const { default: mongoose } = require("mongoose");
const router = express.Router()
const Course = require("../Schema/courses")

router.get("/" ,  async (req , res ) => {



const courseId = req.query.courseId;
console.log(courseId)

if(courseId) {

    const result = await Course.findById(mongoose.Types.ObjectId(courseId))

    res.status(200).json(result)

}
else {
    res.status(400).json({ error: "courseId is required" })
}



})

module.exports = router