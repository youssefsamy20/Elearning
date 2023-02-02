import  React , { useEffect,useState } from "react"

import CourseDetails from "../Components/courseDetails"
import CourseDetailsForCortrainee from "../Components/coursedetailsforcortrainee"
import CourseDetailsForInstructor from "../Components/coursedetailsforinstructor"
import UserCourseDetails from "../Components/courseDetails"
import GuestCourseDetails from "../Components/courseDetailsforGues"
import Registered from "../Components/registeredCourseDetails"

import {isAusthenticated} from "../Helpers/auth"

const {role} = isAusthenticated()
const {_id} = isAusthenticated()

const RegisterdCourses = () =>{

    const [courses,setCourses]= useState(null)

    useEffect(()=>{
    const fetchCourses = async () => {
        if(role ===2){
            const response =  await fetch(`getregistered/individual/${_id}`)

            const json = await response.json()
            if(response.ok){
                setCourses(json)
                console.log(json)
            }
            else {
                // console.log("There is an eror here")
                return (<div>No Coureses to show</div>)
    
            }


        }
        if(role ===4){
            const response =  await fetch(`getregistered/cortrainee/${_id}`)

            const json = await response.json()
            if(response.ok){
                setCourses(json)
                console.log(json)
            }
            else {
                // console.log("There is an eror here")
                return (<div>No Coureses to show</div>)
    
            }


        }
 }
        fetchCourses()
    },[])
    
    
 return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {courses && courses.map((course)=>(
                        <p key={course._id}>
                       <Registered key={course._id} course={course}/>  
                    </p>
                ))}
            </div>
        </div>

        )
    
    
    
}
export default RegisterdCourses