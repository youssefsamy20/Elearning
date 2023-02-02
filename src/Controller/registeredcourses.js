const individual = require("../Schema/Individual") 
const cortrainee = require("../Schema/cor_trainee")
const course = require("../Schema/courses")
const mongoose  = require("mongoose")
const { findById } = require("../Schema/Individual")


const individualRegistered = async (req , res) => {
   var oneCourse = [];
    const {id} = req.params

    const ind = await individual.findById(mongoose.Types.ObjectId(id)).populate('courses')

    for (var i = 0 ; i < ind.courses.length; i++ ) 

         {

             oneCourse.push(await course.findById(ind.courses[i]).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}))

         }
         console.log(oneCourse)
      res.status(200).json(oneCourse)  


}

const corRegistered = async (req , res) => {

   var oneCourse = [];
   const {id} = req.params

   const ind = await cortrainee.findById(mongoose.Types.ObjectId(id)).populate('courses')

   for (var i = 0 ; i < ind.courses.length; i++ ) 

        {

            oneCourse.push(await course.findById(ind.courses[i]).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}))

        }
        console.log(oneCourse)
     res.status(200).json(oneCourse)  


}
    

module.exports = {individualRegistered , corRegistered}