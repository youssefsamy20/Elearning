
const  mongoose  = require("mongoose");
const course = require("../Schema/courses")
const inst = require("../Schema/instructor")
const Subject = require("../Schema/courseSubject")
const subTitle = require("../Schema/subtitle")
const Question = require("../Schema/question")
const Exam = require("../Schema/exam");
const instructor = require("../Schema/instructor");


const setThegrade = async (req,res)=> {

    try {
        let grade = 0
        const answers = req.body
        const all = Object.keys(answers).length
        console.log(answers);
        for(let key in answers){
        const ques = await Question.findById(mongoose.Types.ObjectId(key))
        const answer = ques.A.trim().toLocaleLowerCase()
        console.log(answer)
            // Object.entries(answers).forEach(([key, answer], index) => {
            // const ques =  question.findById(mongoose.Types.ObjectId(key))
                 if(answer===answers[key].trim().toLocaleLowerCase()){
                    grade+=1
    
        }
        
      }
      res.status(200).json({success:`you got ${grade} out of ${all}`})
    
    
    
    
    }
    catch(error){  
        res.status(400).json({error:error.message})
        }
    }

// add new Course 
const addExam =  async(req , res)=>
{

const {questionArray} = req.body 

var send= []
try{


    for( var i = 0 ; i<req.body.questionArray.length ; i++){

        send[i] = mongoose.Types.ObjectId(questionArray[i])

   }
   const examUpload = await Exam.create({question:send})

   res.status(200).json(examUpload)


}
catch(error){  
    res.status(400).json({error:error.message})
}


}
const addrating = (req, res) => {
    const  insid = req.body.insid;
    const rating = Number(req.body.rating);

    instructor.findOneAndUpdate(
      { _id: insid },
      { $push: { ratingList: rating } },
      { new: true },
      (err, doc) => {
          if(err){
              console.error(err);
              return res.status(500).send({
                  success: false,
                  message: "An error occurred while updating the rating."
              });
          }
          const ratings = doc.ratingList.reduce((a, b) => a + b, 0) / doc.ratingList.length;
          
          const twoDigitRating = ratings.toFixed(2);
          console.log(twoDigitRating);
          instructor.findOneAndUpdate(
              { _id: insid },
              { $set: { Rating: twoDigitRating } },
              (err, doc) => {
                  if(err){
                      console.error(err);
                      return res.status(500).send({
                          success: false,
                          message: "An error occurred while updating the rating."
                      });
                  }
                  return res.status(200).send({
                      success: true,
                      message: "Rating added successfully."
                  });
              });
      });
  
}

const addQuestion = async (req , res)=> {

    const {theQuestion , firstAnswer , secondAnswer , thirdAnswer , fourthAnswer,rightAnswer} = req.body 

    try {

        const questionUpload = await Question.create({Q:theQuestion , firstAnswer:firstAnswer , secondAnswer:secondAnswer ,thirdAnswer:thirdAnswer , fourthAnswer:fourthAnswer,A:rightAnswer})
        res.status(200).json(questionUpload)
    }
    catch(error){  
        res.status(400).json({error:error.message})
    }


}



const addSubtitle = async(req,res)  => {

    const {weekOne , EXAM ,TotalHours} = req.body 
    
    try{

        const subTitleUpload = await subTitle.create({weekOne , exam:mongoose.Types.ObjectId(EXAM) , TotalHours})

        res.status(200).json(subTitleUpload)

    }
    catch(error){  
    res.status(400).json({error:error.message})
}

}

const AddCourse = async (req , res) => {
    const {Title,TotalHours,Price,Subject,myArr,previewLink,ShortSummary,_id} = req.body
    const send = []
    
try{

   for( var i = 0 ; i<req.body.myArr.length ; i++){

        send[i] = mongoose.Types.ObjectId(myArr[i])

   }
if(myArr){ console.log(myArr.length)}

    const coursesUpload =  await course.create({Title,TotalHours,Price,Subtitles:send,Subject,ShortSummary,instructor:_id,previewLink})


    res.status(200).json(coursesUpload)
 } 

catch(error)
{
    res.status(400).json({error:error.message})
}
};
const getemail = async(req,res)=>{


    try{
    
        const answer = await instructor.findById(mongoose.Types.ObjectId(req.params))
        res.status(200).json({email:answer.email})
    
    
    }
    catch(error){  
        res.status(400).json({error:error.message})
        }
    
    
    
    
    }
const getMycourses = async (req ,res) => {

    const {id} = req.params
        
    if(id) {
        const result = await course.find({instructor:mongoose.Types.ObjectId(id)}).populate("Subtitles").populate({path:'instructor'}).populate({path:'Subject',select : "subject"}).lean()


        res.status(200).json(result)
    }
    
    else {

        res.status(400).json({error:error.message})
    }
}

const getme = async (req , res) => {

    const result = await inst.find({}).lean()


    res.status(200).json(result)
}

const editBio = async(req , res)=>{

   // const bio , _id= req.body 
    

    const myInstructor = await instructor.findById(mongoose.Types.ObjectId(req.body._id))

    myInstructor.bio =req.body.Bio 
    myInstructor.save()
    res.status(200).json(myInstructor)

}
const getBio= async(req, res)=>{

    const {id} = req.params 
try{
    const myInstructor = await instructor.findById(mongoose.Types.ObjectId(id))

    res.status(200).json({bio:myInstructor.bio , success:"Updated Successfully"})}

catch(error){  
res.status(400).json({error:error.message})
}

}



const updateContract=async(req,res)=>{

    const {id} =req.params
    try{

        const myInstructor = await instructor.findById(mongoose.Types.ObjectId(id))

        myInstructor.contract=true

        myInstructor.save()
        res.status(200).json(myInstructor)




    }
    catch(error){  
        res.status(400).json({error:error.message})
        }

}

const getExam =async (req,res)=> {

const {id} = req.params

try {

    const myExam = await Exam.findById(mongoose.Types.ObjectId(id)).populate("question")

}
catch(error){  
    res.status(400).json({error:error.message})
    }



}
const editemail =async (req , res) =>{

    const {newEmail} = req.body

try {

    const answer = await instructor.findById(mongoose.Types.ObjectId(req.params))
    answer.email = newEmail; 
    answer.save()

    res.status(200).json({success:"Updated Successfully"})
    }

catch(error){  
    res.status(400).json({error:error.message})
    }




}
module.exports = {AddCourse,setThegrade,editemail,getemail ,addrating, getMycourses , getme , addSubtitle , addQuestion , addExam , editBio , getBio,updateContract ,getExam}