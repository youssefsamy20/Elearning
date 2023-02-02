import React from "react"
const GuestCourseDetails= ({course}) => {
    return(
        
        <div className="guestcourseDetals" onClick={()=>window.location.href=`/course/${course._id}`} hover>
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
        
    )
}
export default GuestCourseDetails 