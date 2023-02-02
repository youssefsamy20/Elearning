const mongoose = require("mongoose")

const courses = require("../Schema/courses")
const guest = require("../Schema/guest")


const getcourses = async(req , res ) => {
    try{
        const course = await courses.find({} , {"Title" :1 ,"Subject":1,"TotalHours" : 1 , "Rating" : 1,"_id":0,"Price" : 1})
        res.status(200).json(course)
       }
       catch (error){
        res.status(400).json({error : error.message})
    }
    }

    const createguest =async(req,res)=>{
        const {gender} = req.body 
            try {
            const guestt = await guest.create({gender})
            console.log(guestt.gender);
            res.status(200).json(guestt); 
            
        }
    
    catch (error) {
        res.status(400).json({error : error.message})
    
    }}
module.exports = {getcourses,createguest}