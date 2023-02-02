import React from "react"
import { useState , useEffect } from "react"
import {isAusthenticated} from "../Helpers/auth"
const BeforRegisterCourseDetails= ({course}) => {
    const [disable , setDisable] = useState(false)
 const registerHandel=()=>{}

console.log(course)
// useEffect(()=>{
//     const fetchCourses = async () => {
//         const response= await fetch(`/instructor/getexam/${course.Subtitles[0].exam}`)
//         const json= await response.json()

//         if(response.ok){
//             setMYEXAM(json)

//         }
//         else {
//             console.log("There is an eror here")

//         }
//         }
//         fetchCourses()
//     },[])



    return(
        <div className='container'>
            <div className='row px-3 vh-250  h-100 '>
                <div className='col-md-5 mx-auto  align-items-center' >
            <div  >
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p> 
            <p><strong>Instructor: </strong>{course.instructor.username}</p>
          
            
                {course.Subtitles&&course.Subtitles.map((subtitle , index)=>
                <div key={subtitle._id}><p><strong>Subtitle {index+1} : </strong>{subtitle.weekOne.title}</p>
                {subtitle.exam.question&&subtitle.exam.question.map((quest, nindex)=>
                        
                    <div key={quest._id}><p><strong>Exrcise: <br></br> &emsp; Question {nindex+1} :</strong> {quest.Q}</p> 
                
                &emsp;  <div> <p><strong>A : </strong>{quest.firstAnswer}</p>&emsp; &emsp;<p><strong>B : </strong>{quest.secondAnswer}</p>&emsp; &emsp;<p><strong>C : </strong>{quest.thirdAnswer}</p>&emsp; &emsp; <p><strong>D : </strong>{quest.fourthAnswer}</p> </div>

                     </div>
                        
                        
                        )}
                </div> 
                    
                
                
                
                
                
                )}

            
            <p><strong>Price: </strong>{course.Price}</p>
            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
        </div>
        <div class="embed-responsive embed-responsive-16by9 py-4" >
            <iframe class="embed-responsive-item" src={course.previewLink} allowfullscreen></iframe>
            </div>
        </div>
        </div>
        </div>
        


    )
}

export default BeforRegisterCourseDetails