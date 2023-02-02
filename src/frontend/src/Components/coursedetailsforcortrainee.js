import React, { useState } from "react"
import {isAusthenticated} from "../Helpers/auth"

const CourseDetailsForCortrainee= ({course}) => {
    const [disable , setDisable]=useState(false)

    const {_id} = isAusthenticated()  

    const registerHandel = async ()=>{

        const response = await fetch(`/accessrequest/${course._id}`,{
            method:'POST', 
            body:JSON.stringify({_id:_id}),
            headers:{
                "Content-Type":"application/json"
            }
        })
       
        const json = await response.json()
        console.log(json)
        setDisable(true)
 
    }



    return(
       <div>
       <div className="course-details" onClick={()=>window.location.href=`/course/${course._id}`} hover >
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p>
            <p><strong>Instructor: </strong>{course.instructor.instructor}</p>
            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>{course.createdAt}</p>
        </div>
       
        <button type="button" class="btn btn-outline-primary" onClick={registerHandel} disabled={disable}> Access Request</button>
       </div>
    )
}
export default CourseDetailsForCortrainee     



//onClick={()=>window.location.href=`/course?courseId=${course._id}`}