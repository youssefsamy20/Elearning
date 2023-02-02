const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const individual = require("../Schema/Individual") 
const cortrainee = require("../Schema/cor_trainee")
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {jwtSecret , jwtExpire} = require("../config/keys")

const guest = require('../Schema/guest')

const createToken = (_id) => {

     return jwt.sign({_id} , "SEC" , {expiresIn : '2d'}) 
}




const instructorSignin =  async (req , res ) => {
    console.log("inside signin Controller ");

    const {email , password} = req.body;
    try{
            const inst= await instructor.findOne({ email })
            if(!inst){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }


            const isMatch = await bycrpt.compare(password,inst.password)

            if(!isMatch){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }
            req.user = await instructor.findOne({email}).select('_id')

            const payload = {
                inst:{
                    _id:inst._id
                }
            }

             jwt.sign(payload , jwtSecret , {expiresIn:jwtExpire} , (err ,token) =>{
              if(err){console.log("jwt error " , err);}
              const   {_id , username ,email , role} = inst


              res.json({
                token,
                inst : {_id , username ,email ,role}, id:inst._id
                
              })
           

            })
            


    }
    catch(err){
        res.status(500).json({
            errorMessage:"server error"
        })

    }
    
};


const individualSignin =  async (req , res ) => {
    const {email , password} = req.body;
    try{
            const inst= await individual.findOne({ email })
            if(!inst){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }


            const isMatch = await bycrpt.compare(password,inst.password)

            if(!isMatch){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }

            const payload = {
                inst:{
                    _id:inst._id
                }
            }

             jwt.sign(payload , jwtSecret , {expiresIn:jwtExpire} , (err ,token) =>{
              if(err) console.log("jwt error " , err);
              const   {_id , username ,email , role} = inst

              res.json({
                token,
                inst : {_id , username ,email ,role}
              })
           

            })     


    }
    catch(err){
        res.status(500).json({
            errorMessage:"server error"
        })

    }
    
};

    const adminSignin =  async (req , res ) => {
        console.log("inside signin Controller ")
        const {email , password} = req.body;
        try{
                const inst= await admin.findOne({ email })
                if(!inst){
                    return res.status(400).json({
                        errorMessage:"invalid credentials"
                    })
                }
    
    
                const isMatch = await bycrpt.compare(password,inst.password)
    
                if(!isMatch){
                    return res.status(400).json({
                        errorMessage:"invalid credentials"
                    })
                }
    
                const payload = {
                    inst:{
                        _id:inst._id
                    }
                }
    
                 jwt.sign(payload , jwtSecret , {expiresIn:jwtExpire} , (err ,token) =>{
                  if(err) console.log("jwt error " , err);
                  const   {_id , username ,email , role} = inst
    
                  res.json({
                    token,
                    inst : {_id , username ,email ,role}
                  })
               
    
                })
    
    
        }
        catch(err){
            res.status(500).json({
                errorMessage:"server error"
            })
    
        }

};


const cortraineeSignin = async (req,res) =>{
    const {Email , Password} = req.body;
    try{
            const inst= await cortrainee.findOne({ Email })
            if(!inst){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }


            const isMatch = await bycrpt.compare(Password,inst.Password)

            if(!isMatch){
                return res.status(400).json({
                    errorMessage:"invalid credentials"
                })
            }

            const payload = {
                inst:{
                    _id:inst._id
                }
            }

             jwt.sign(payload , jwtSecret , {expiresIn:jwtExpire} , (err ,token) =>{
              if(err) console.log("jwt error " , err);
              const   {_id , Name ,Email , role} = inst

              res.json({
                token,
                inst : {_id , Name ,Email ,role}
              })
           

            })


    }
    catch(err){
        res.status(500).json({
            errorMessage:err.errorMessage
        })

    }


}


    



module.exports = {instructorSignin , individualSignin , adminSignin , cortraineeSignin }

