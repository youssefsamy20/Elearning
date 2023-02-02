const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const cortrainee = require("../Schema/cor_trainee")
const Subject = require("../Schema/courseSubject")
const Course = require("../Schema/courses")
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")
const Admin = require("../Schema/Admin")
const { populate } = require("../Schema/courses")

const Request = require("../Schema/Requests")


const createToken = (_id) => {

    return jwt.sign({_id} , "SEC" , {expiresIn : '2d'}) 
}

// add instructor to db 

const addinstructor = async(req,res) => {

    const {username , email , password} =  req.body 
try{

    const addInstructor = await instructor.findOne({email})
    if(addInstructor){
       return res.status(400).json({errorMessage:"email already Exist"})
    }
    const newInstructor = new instructor(); 
    newInstructor.username = username; 
    newInstructor.email=email

    const salt = await bycrpt.genSalt(10); 
    newInstructor.password= await bycrpt.hash(password, salt)

    await newInstructor.save();

    const token = createToken(newInstructor._id)

    res.status(200).json({
        successMessage:"new instructor added"
    })

   // const addition = await instructor.create({username , email , password})

    
    //res.status(200).json(addition)
}
catch(error){
    console.log(error)
    res.status(400).json({errorMessage:"Not Added"})
}
} ; 


// add cortrinee to db

const addcortrainee = async (req , res ) => {
    const {Name , Email , Password , Company} =  req.body 
try{
    const check = await cortrainee.findOne({Email})
    if(check){ return res.status(400).json({errorMessage:"Email already Exist"})}
    const newcorTrainee =  new cortrainee()
    newcorTrainee.Name=Name 
    newcorTrainee.Email = Email 
    newcorTrainee.Company  = Company
    const salt = await bycrpt.genSalt(10); 
    newcorTrainee.Password = await bycrpt.hash(Password, salt); 
    await newcorTrainee.save()
    const token = createToken(newcorTrainee._id)
    res.status(200).json({
        successMessage:" Company Trainee added Successfully"
    })
    // const addition = await cortrainee.create({Name , Email , Password , Company})
    // res.status(200).json(addition)
}
catch(error){
    console.log(error)
    res.status(400).json({errorMessage:"Not Added"})
}
}


const addSubject = async (req,res) => {

    const {subject} = req.body 
    try {
        const subjectExist = await Subject.findOne({subject}) ; 

        if(subjectExist){

            return res.status(400).json({

                errorMessage:"Subject Already Exists"
            })
        }
        const addition = await Subject.create({subject})
        res.status(200).json(addition);


    }
    catch (error) {
        res.status(400).json({error : error.message})

    }




}


// add another Admin to db 

const addadmin = async (req , res ) => {
//     const {username , email , password } =  req.body 
// try{
//     const addition = await admin.create({username , email , password })
//     res.status(200).json(addition)
// }
// catch(error){

//     res.status(400).json({error : error.message})
// }
const {username , email , password} =  req.body 
try{

    const addInstructor = await admin.findOne({email})
    if(addInstructor){
       return res.status(400).json({errorMessage:"email already Exist"})
    }
    const newInstructor = new admin(); 
    newInstructor.username = username; 
    newInstructor.email=email

    const salt = await bycrpt.genSalt(10); 
    newInstructor.password= await bycrpt.hash(password, salt)

    await newInstructor.save();

    const token = createToken(newInstructor._id)

    res.status(200).json({
        successMessage:"new admin added"
    })

   // const addition = await admin.create({username , email , password})

    
    //res.status(200).json(addition)
}
catch(error){
    console.log(error)
    res.status(400).json({errorMessage:"Not Added"})
}
}


const getSubject = async (req , res ) => {
try{
    const addition = await Subject.find({})
    res.status(200).json(addition)
}
catch(error){

    res.status(400).json({errorMessage : "Try again later"})
}
}
const searchsubject = async (req , res ) => {
  const query = req.query.q;
  const regex = new RegExp(`^${query}`, 'i');
  let courses;
  let sub;
  try {

sub= await Subject.find({subject: {$regex:regex}}).lean();
courses = await Course.find({ Subject: sub }).populate({path: 'Subject',select: 'subject'}).populate('instructor', 'username').lean();
  res.status(200).json(courses)

}


    catch(error){
        res.status(400).json({error: error.message})
   }


}

const getinsCourses = async (req , res ) => {

  const id = req.body.id;
  const query = req.body.q;
  let sub;
  let inst;
  let course;
  const regex = new RegExp(`^${query}`, 'i');
    try {
       
      if(query){
                inst=await instructor.find({_id:id}).lean();

        sub= await Subject.find({subject: {$regex:regex}}).lean();
        inst=await instructor.find({_id:id}).lean();
        courses3 = await Course.find({ instructor: inst },{Subject:sub }).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}).lean()

    }
              
     else {

            courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}).lean()

            console.log(courses[0].Subtitles[0].exam.question.length)
        
    }

        res.status(200).json(courses3)
  

    }

    catch(error){
        res.status(400).json({error: error.message})
   }
}
const getCourses = async (req , res ) => {

  const query = req.query.q;
  let courses;
  let sub;
  let inst;
  const regex = new RegExp(`^${query}`, 'i');
    try {
       
      if(query){
        sub= await Subject.find({subject: {$regex:regex}}).lean();
        inst=await instructor.find({username:{$regex:regex}}).lean();
     courses1 = await Course.find({ Title: {$regex:regex} }).populate({path: 'Subject',select: 'subject'}).populate('instructor', 'username').lean();
      courses2 = await Course.find({ Subject: sub }).populate({path: 'Subject',select: 'subject'}).populate('instructor', 'username').lean();
        courses3 = await Course.find({ instructor: inst }).populate({path: 'Subject',select: 'subject'}).populate('instructor', 'username').lean();
         courses = Array.from(new Set(courses1.concat(courses2, courses3)));

    }
              
     else {

            courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}).lean()

            console.log(courses[0].Subtitles[0].exam.question.length)
        
    }

        res.status(200).json(courses)
  

    }

    catch(error){
        res.status(400).json({error: error.message})
   }
}


const accessRequest = async(req, res) =>{

    const {id} = req.params 

    const {accept} = req.body

    try{

        const theCourse = await Course.findById(mongoose.Types.ObjectId(id))

        if(accept){

            await cortrainee.courses.push(theCourse)


        }
        else {
            return res.status(200).json({successMessage:"Rejected"})
        }





    }
    catch(error){
        res.status(400).json({error: error.message})
   }


}

const recieveRequest =async (req, res) =>{

  const {id} = req.params 
  const {_id} = req.body



  try{
    const request = await Request.create({cor:mongoose.Types.ObjectId(_id) ,course:mongoose.Types.ObjectId(id)})
    await request.save()

      const theCourse = await Course.findById(mongoose.Types.ObjectId(id))
      const cor = await cortrainee.findById(mongoose.Types.ObjectId(_id))

    const docs =await  admin.find({}, '_id')
    console.log(docs)

    const promises = docs.map(async (doc) => {
        const updatedDoc = await admin.findOneAndUpdate(
          { _id: doc },
          { $push: { requests: request._id } },
          { new: true }
        );
        console.log(updatedDoc);
        return updatedDoc.save();
      });

      await Promise.all(promises);
const result = await Request.findById(request._id).populate("cor").populate("course")

      res.status(200).json(result)

      }


  catch(error){
      res.status(400).json({error: error.message})
 }
}

const updaterequest = async (req,res)=>{

  const{id} = req.params
  const{_id} = req.body
try{
  const re = await admin.findById(mongoose.Types.ObjectId(_id)).populate({path:'requests', populate:{path:'cor'},populate:{path:'course'}}).populate({path:'requests', populate:{path:'cor'}})

  const theRequest = await Request.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)},{status:'accepted'}).clone()

         const theCor  = await  cortrainee.findOneAndUpdate({ _id: theRequest.cor }, { $push: { courses: theRequest.course } }, function (err, doc) {
              if (err) return handleError(err);
              console.log("Updated Successfully");
              
            }).clone();

            res.status(200).json({successMessage:"ok wellDone"})
          }
  // await theCor.courses.push(theCourse._id)

  catch(error){
    res.status(400).json({error: error.message})
}


}
const updatereject = async (req, res)=>{
  const{id} = req.params
  const{_id} = req.body
try{
  const re = await admin.findById(mongoose.Types.ObjectId(_id)).populate({path:'requests', populate:{path:'cor'},populate:{path:'course'}}).populate({path:'requests', populate:{path:'cor'}})

  const theRequest = await Request.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)},{status:'rejected'}).clone()

//  const theCourse  = await Course.findById(mongoose.Types.ObjectId(theRequest.course))
        // const theCor  = await  cortrainee.findOneAndUpdate({ _id: theRequest.cor }, { $push: { courses: theRequest.course } }, function (err, doc) {
        //       if (err) return handleError(err);
        //       console.log("Updated Successfully");
        //       res.status(200).json(theRequest)
        //     }).clone();
         res.status(200).json(theRequest)
}

        catch(error){
          res.status(400).json({error: error.message})
      }


}

const getCourseBeforeRegistration = async (req,res)=> {

    const {id} = req.params

    try{

        const theCourse = await Course.findById(mongoose.Types.ObjectId(id)).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"}).lean()

        res.status(200).json(theCourse)
}

catch(error){
    res.status(400).json({error: error.message})
}


}
const filterprice = async (req , res ) => {
       
    try
    {
     
      
      const min = Number(req.body.min);
      const max = Number(req.body.max);

    let courses
      console.log(max);
      if (min == -1) {
        
         courses = await Course.find({
          Price: 0
        }).sort({ Price: 1 }).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"});
      }  
      if (min == -2) {
        
        courses = await Course.find({
        
       }).sort({ Price: -1 }).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"});
     }  
    
      else{
      courses = await Course.find({
        Price: {$gt: min, $lt: max}
      }).sort({ Price: 1 }).populate({path:'instructor'}).populate({path:'Subject',select : "subject"});
    // for (const course of course1) {
    //   console.log(course.price);} 
    }
    res.status(200).json(courses);
  } catch (error) { 
    res.status(400).json({ message: error.message });
  }
}

const incfilterprice = async (req , res ) => {
  const min = Number(req.body.min);
  const max = Number(req.body.max);
  const id = req.body.id
  
  try
  {
   
    
   
    const inst  =await instructor.find({_id:id}).lean();
    let courses3 = await Course.find({ instructor: inst }).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor'}).populate({path:'Subject',select : "subject"}).lean()
    
    courses3 = courses3.filter(course => course.Price >= min && course.Price <= max);
    courses3.sort((a, b) => a.Price - b.Price);
    console.log(courses3);
    console.log(inst);
    res.status(200).json(courses3);
}catch (error) { 
  res.status(400).json({ message: error.message });
}}


const updateprice = async (req, res) => {
    const { courseid,nprice,expir} = req.body;
    
    try {
        const course1 = await Course.findOne({ _id :courseid });
        const oldprice=course1.Price;
        const persent =nprice/100 ;
        const sale = persent * oldprice
        const thenewprice = oldprice - sale;
        
        if(thenewprice>0){
        course1.newprice= thenewprice;
        course1.discount= nprice;
        course1.expire= expir

        console.log (oldprice,persent, sale,thenewprice)
        console.log(course1); 
        
        await course1.save();

        res.status(200).json({ course1 });
      }
       else{
        
       
        
        
         res.status(200).json({ course1 });
       }
    }
     catch (error) {
      res.status(400).json({ error: error.message });
    }
}
const updatepriceforall = async (req, res) => {
  const {nprice,expir} = req.body;
  
  

  
 
  const course = await Course.find({}).lean();
  
for (let i = 0; i < course.length; i++) {
    
    const oldPrice = course[i].Price;
    const percent = nprice / 100;
    const sale = percent * oldPrice;
    const newprice1 = oldPrice - sale;

    // update the course
    if (newprice1 > 0 && course[i].Price!=0) {
      course[i].expire = expir;
      course[i].discount = nprice;
      course[i].newprice= newprice1
      
      try {
  await Course.updateOne({ _id: course[i]._id }, { $set: { expire: expir, discount: nprice, newprice: newprice1 } });
  console.log("problem added");
  return res.send({ course });
} catch (err) {
  console.error(err);
  return res.status(500).send({ error: "Error saving course" });
}
    }
  }
  return res.send({ course });
}


    



const uploadviews =async(req,res)=>{
    const {courseid} = req.body;
  
  
    try{
      const  course1 = await Course.findOne({_id : courseid});
      if (course1){
        const oldview = course1.view;
        course1.view= oldview +1;
        await course1.save();
        res.status(200).json({ course1 });
  
      }
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  
  }

  
  const addrating = (req, res) => {
    const  courseId = req.body.courseId;
    const rating = Number(req.body.rating);

    Course.findOneAndUpdate(
      { _id: courseId },
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
          Course.findOneAndUpdate(
              { _id: courseId },
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


  const getRequests = async (req ,res ) => {

    try {


      const re = await admin.findById(mongoose.Types.ObjectId(req.params)).populate({path:'requests', populate:{path:'cor'},populate:{path:'course'}}).populate({path:'requests', populate:{path:'cor'}})
      res.status(200).json(re.requests)

//populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}})
    }

    catch (error) {
      res.status(400).json({ error: error.message });
    }
  

  }
  const addpreview = async(req,res)=>{
    const {courseid,string} =req.body
    
    if (!courseid || !string) {
      return res.status(400).send({ error: "Invalid input" });
    }
  
    // Find the course in the database
    Course.findById(courseid, (err, course) => {
      if (err) {
        return res.status(500).send({ error: "Error finding course" });
      }
  
      if (!course) {
        return res.status(404).send({ error: "Course not found" });
      }
      
          course.preview[course.preview.length] = string;
          console.log(string);

   
      course.save((err) => {
        if (err) {
          return res.status(500).send({ error: "Error saving course" });
        }
        console.log("proplem added");
        return res.send({ course });
      });
    });
  };
    

    



  const financial =async(req,res)=>{
    const {courseid,proplem} = req.body;
  
    
    
      // Validate the input
      if (!courseid || !proplem) {
        return res.status(400).send({ error: "Invalid input" });
      }
    
      // Find the course in the database
      Course.findById(courseid, (err, course) => {
        if (err) {
          return res.status(500).send({ error: "Error finding course" });
        }
    
        if (!course) {
          return res.status(404).send({ error: "Course not found" });
        }
        // const r =0;
        // const m =0;
            // Update the course's rating in the database
            // course.Rating[course.Rating.length] = rating;
            course.financial[course.financial.length] = proplem;
            console.log(proplem);

            // foreach(course.Rating ){
            //     r=r+1;
            //     m=m+course.Rating.length[i];
            //  }
            //  course.ratings= m/r;
  
              // course.
        // Update the course's rating in the database
      //  console.log(course._id,rating);
       
        course.save((err) => {
          if (err) {
            return res.status(500).send({ error: "Error saving course" });
          }
          console.log("proplem added");
          return res.send({ course });
        });
      });
    };
    const other =async(req,res)=>{
      const {courseid,proplem} = req.body;
    
      
      
        // Validate the input
        if (!courseid || !proplem) {
          return res.status(400).send({ error: "Invalid input" });
        }
      
        // Find the course in the database
        Course.findById(courseid, (err, course) => {
          if (err) {
            return res.status(500).send({ error: "Error finding course" });
          }
      
          if (!course) {
            return res.status(404).send({ error: "Course not found" });
          }
          // const r =0;
          // const m =0;
              // Update the course's rating in the database
              // course.Rating[course.Rating.length] = rating;
              course.other[course.other.length] = proplem;
              console.log(proplem);

              // foreach(course.Rating ){
              //     r=r+1;
              //     m=m+course.Rating.length[i];
              //  }
              //  course.ratings= m/r;
    
                // course.
          // Update the course's rating in the database
        //  console.log(course._id,rating);
         
          course.save((err) => {
            if (err) {
              return res.status(500).send({ error: "Error saving course" });
            }
            console.log("proplem added");
            return res.send({ course });
          });
        });
      };
      const technical =async(req,res)=>{
        const {courseid,proplem} = req.body;
      
        
        
          // Validate the input
          if (!courseid || !proplem) {
            return res.status(400).send({ error: "Invalid input" });
          }
        
          // Find the course in the database
          Course.findById(courseid, (err, course) => {
            if (err) {
              return res.status(500).send({ error: "Error finding course" });
            }
        
            if (!course) {
              return res.status(404).send({ error: "Course not found" });
            }
            // const r =0;
            // const m =0;
                // Update the course's rating in the database
                // course.Rating[course.Rating.length] = rating;
                course.technical[course.technical.length] = proplem;
                console.log(proplem);
                // foreach(course.Rating ){
                //     r=r+1;
                //     m=m+course.Rating.length[i];
                //  }
                //  course.ratings= m/r;
      
                  // course.
            // Update the course's rating in the database
          //  console.log(course._id,rating);
           
            course.save((err) => {
              if (err) {
                return res.status(500).send({ error: "Error saving course" });
              }
              console.log("proplem added");
              return res.send({ course });
            });
          });
        };
        const filtersubject = async (req , res ) => {
       
          try
          {
           
            
            const max = Number(req.body.max);
      
          let courses

            console.log(max);
            if (max == 1) {
              
              courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"}).sort({ Subject: 1 }).lean()
            }  
            if (max == -1) {
              
              courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"}).sort({ Subject: -1 }).lean()
            }  
            
          res.status(200).json(courses);
        } catch (error) { 
          res.status(400).json({ message: error.message });
        }
      }
      const filterrating = async (req , res ) => {
       
        try
        {
         
          
          const max = Number(req.body.max);
    
        let courses

          console.log(max);
          if (max == 1) {
            
            courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"}).sort({ Rating: 1 }).lean()
          }  
          if (max == -1) {
            
            courses = await Course.find({}).populate({path:"Subtitles" , populate:{path:"exam",populate:{path:"question"}}}).populate({path:'instructor',select : "username"}).populate({path:'Subject',select : "subject"}).sort({ Rating: -1 }).lean()
          }  
          
        res.status(200).json(courses);
      } catch (error) { 
        res.status(400).json({ message: error.message });
      }
    }
      

module.exports = {searchsubject,filterrating,getinsCourses,incfilterprice,other,updatepriceforall,filtersubject,technical, financial,addrating,addinstructor,updatereject ,updaterequest, getRequests,addcortrainee , addadmin , addSubject ,getSubject , getCourses ,addpreview, accessRequest , recieveRequest , getCourseBeforeRegistration , filterprice , updateprice , uploadviews}