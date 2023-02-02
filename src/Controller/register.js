const individual = require("../Schema/Individual") 
const cortrainee = require("../Schema/cor_trainee")
const course = require("../Schema/courses")
const mongoose  = require("mongoose")


const registerIndvidual = async (req,res) =>{


const {id} =req.params

const {_id} = req.body 

const ind = await individual.findById(mongoose.Types.ObjectId(id))

ind.courses.push(mongoose.Types.ObjectId(_id))
const cour = await course.findById(mongoose.Types.ObjectId(_id))
cour.enr +=1
cour.save()
ind.save()


// console.log(_id , id)
res.status(200).json(ind)
};
const registerCor = async (req , res) => {
    const {id} =req.params

    const {_id} = req.body 
    const cor = await cortrainee.findById(mongoose.Types.ObjectId(id))

    cor.courses.push(mongoose.Types.ObjectId(_id))

    cor.save()
    console.log(cor)
}


module.exports = {registerIndvidual , registerCor}