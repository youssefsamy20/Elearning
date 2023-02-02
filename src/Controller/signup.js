const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const individual = require("../Schema/Individual") 
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const createToken = (_id) => {

    return jwt.sign({_id} , "SEC" , {expiresIn : '2d'}) 
}

const instructorSignup =  async (req , res ) => {
    const {username , email,password} =  req.body; 
    try{
        const signupinstructor = await instructor.findOne({email})
        if(signupinstructor){
            return res.status(400).json({
                errorMessage:'Email Already Exist'
            })
        }
        const newInstructor = new instructor(); 
        newInstructor.username = username; 
        newInstructor.email=email

        const salt = await bycrpt.genSalt(10); 
        newInstructor.password= await bycrpt.hash(password, salt)

        await newInstructor.save();

        const token = createToken(newInstructor._id)

        res.status(200).json({
            successMessage:"registration success. please signin", token
        })

    }
    catch(error){
        res.status(400).json({error : error.message})
    }
};


const individualSignup =  async (req , res ) => {
    const {username ,firstname,lastname,gender,email,password} =  req.body; 
    try{

        const signupind = await individual.findOne({email})
        if(signupind){
            return res.status(400).json({
                errorMessage:'Email Already Exist'
            })
        }

        const newInd = new individual(); 
        newInd.username = username; 
        newInd.email=email
        newInd.firstname=firstname
        newInd.lastname=lastname
        newInd.gender=gender

        const salt = await bycrpt.genSalt(10); 
        newInd.password= await bycrpt.hash(password, salt)

        await newInd.save();

        const token = createToken(newInd._id)


        res.json({
            successMessage:"registration success. please signin" , token
        })

    }
    catch(error){
        res.status(400).json({error : error.message})
    }
};
    const adminSignup =  async (req , res ) => {
    const {username , email,password} =  req.body; 
    try{

        const signupadmin = await admin.findOne({email})
        if(signupadmin){
            return res.status(400).json({
                errorMessage:'Email Already Exist'
            })
        }
        const newAdmin = new admin(); 
        newAdmin.username = username; 
        newAdmin.email=email

        const salt = await bycrpt.genSalt(10); 
        newAdmin.password= await bycrpt.hash(password, salt)

        await newAdmin.save();
        const token = createToken(newAdmin._id)

        res.json({
            successMessage:"registration success. please signin" , token
        })

    }
    catch(error){
        res.status(400).json({error : error.message})
    }
};

module.exports = {instructorSignup , individualSignup , adminSignup}

