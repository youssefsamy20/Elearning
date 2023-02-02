const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const cortrainee = require("../Schema/cor_trainee")
const Subject = require("../Schema/courseSubject")
const Course = require("../Schema/courses")
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodeMailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport")

const transporter = nodeMailer.createTransport(sendGridTransport({
    auth: {
        api_key:"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"

    }


}))




const resetPassword =async (req, res) => {

const {email} = req.body 
try{
const myInstructor = await instructor.findOne({email})

if(!myInstructor) return res.status(400).json({errorMsg:"Email not Found"})
transporter.sendMail({
    to:myInstructor.email, 
    from:"noReplay@gmail.com", 
    subject:"ResetPassword"
})
}

catch(error){

    res.status(400).json({errorMsg:error})

}




// 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

}