const mongoose = require("mongoose")
const Individual = require("../Schema/Individual")
const courses = require("../Schema/courses")
const guest = require("../Schema/guest")
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const createToken = (_id) => {

    return jwt.sign({_id} , "SEC" , {expiresIn : '2d'}) 
}

const emailToReset = async(req , res)=> {  


    

    const {email} = req.body
    try {
   
                var transporter = nodemailer.createTransport({
                    service:'gmail',    // true for 465, false for other ports
                    auth: {
                        user: "eidmansour469@gmail.com", // generated ethereal user
                        pass: "fopfiypfrmgpkavx" // generated ethereal password
                    },
                   tls:{ rejectUnauthorized: false}
                })

        const findUser = await Individual.findOne({email})

        if(!findUser) return res.status(400).json({error:"email does not found"})



        
        const token = createToken(findUser._id)

         const mailOptions = {
            from: "eidmansour469@gmail.com", // sender address
            to: findUser.email, // list of receivers
            subject: "Reset Password", // Subject line
            text: `Click on the link to reset your password: http://localhost:3000/user/reset/${findUser._id}/${token}`, // plain text body
        }
        // const info = await transporter.sendMail(mailOptions);
        transporter.sendMail(mailOptions, function (error , info){

                if(error){
                    console.log(error)
                
                }
                else{
                    console.log("Success")
                }


        })
        
          

       


    }
    catch(error){
        res.status(400).json({error : error.message})
    }


}

const updatePassword = async( req , res ) => {

const {email , password} = req.body 

try{
console.log(req.body)
    const theUser = await Individual.findOne({email})
    console.log(theUser)
    if(!theUser) return res.status(200).json({error:"This user is not Exist"})




   const salt = await bycrpt.genSalt(10)


   theUser.password = await bycrpt.hash(password , salt)


    theUser.save()

   const token = createToken(theUser._id)

   res.status(200).json({success:"Password Changed Successfully" , token} )
       }


catch(error){
    res.status(400).json({error : error.message})
}


}

module.exports = {emailToReset , updatePassword}