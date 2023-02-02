import React from "react"
import { useState } from "react"
import {isAusthenticated} from "../Helpers/auth"
const UserCourseDetails= ({course}) => {
    const [disable , setDisable] = useState(false)


    const {_id} = isAusthenticated()  

    const registerHandel = async ()=>{


        const response = await fetch(`/register/individual/${_id}`,{
            method:'PUT', 
            body:JSON.stringify(course),
            headers:{
                "Content-Type":"application/json"
            }
        })
       
        const json = await response.json()
        console.log(json)
        setDisable(true)

    }










    return(
        <div >
        <div className="course-details" onClick={()=>window.location.href=`/course/${course._id}`} hover>
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p> 
            <p><strong>Instructor: </strong>{course.instructor.username}</p>

            <p>
          <strong>Price: </strong>
          &emsp;{course.discount ? <del>{course.Price}</del> : course.Price}
         {course.discount  &&  <ins> &emsp;{course.newprice}</ins>}
        {course.discount &&  <>&emsp;{course.discount}% discount for &emsp;{course.expire} day </>}
              </p>            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>{course.createdAt}</p>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={registerHandel} hidden={disable}> Register</button>
        </div>

    )
}
export default UserCourseDetails          