import  React , { useEffect,useState } from "react"

import CourseDetails from "../Components/courseDetails"
import CourseDetailsForCortrainee from "../Components/coursedetailsforcortrainee"
import CourseDetailsForInstructor from "../Components/coursedetailsforinstructor"
import UserCourseDetails from "../Components/courseDetails"
import GuestCourseDetails from "../Components/courseDetailsforGues"

import {isAusthenticated} from "../Helpers/auth"
import { useParams } from "react-router"
import axios from "axios"
import BeforeRegistrationCourseDetails from "../Components/beforeRegistrationDetails"
import BeforeRegistrationCorTrainee from "../Components/beforeRegistrationCor"

const {role} = isAusthenticated()

const courseBeforeRegistration = () =>{
    const [course,setCourse]= useState(null)

    const params = useParams();
    useEffect(()=>{
    const fetchCourses = async () => {

        await axios.get(`/course/${params.id}`)
            .then(res =>{
                console.log(res)
                setCourse(res.data)
                console.log(course)

            })
            .catch(err=>{
                console.log(err)
            })

        
        }
        fetchCourses()
    },[])
    
    
    if (role ===1){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <BeforeRegistrationCourseDetails key={course._id} course={course}/>
                 }
            </div>
        </div>

        )
                    
    
                    }
    else if (role===4 ){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <BeforeRegistrationCorTrainee key={course._id} course={course}/>
                 }
            </div>
        </div>

        )

        
    }
    else if (role ===2){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <BeforeRegistrationCourseDetails key={course._id} course={course}/>
                 }
            </div>
        </div>

        )
    }
    // else {
    //     return (
    //         <div className="instructorAllCourses">
    //             <div className="courses">
    //                 {
    //                     <GuestCourseDetails key={course._id} course={course}/>
    //              }
    //         </div>
    //     </div>

    //     )
    // }
    
}
export default courseBeforeRegistration