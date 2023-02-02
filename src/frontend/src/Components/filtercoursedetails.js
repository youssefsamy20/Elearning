import React from "react"
import { useState } from "react"
import {isAusthenticated} from "../Helpers/auth"
const filtercoursedetails= ({course}) => {

 return(
        <div >
        <div className="course-details">
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p> 
            <p><strong>Instructor: </strong>{course.instructor.username}</p>
           
            <p><strong>Price: </strong>{course.Price}</p>
            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>{course.createdAt}</p>
        </div>
        </div>

    )
}
export default filtercoursedetails          