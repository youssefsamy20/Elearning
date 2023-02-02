import Admincoursedetails from "../Components/Admincoursedetails"
import  React , { useEffect,useState,useRef  } from "react"
import CourseDetailsForCortrainee from "../Components/coursedetailsforcortrainee"
import CourseDetailsForInstructor from "../Components/coursedetailsforinstructor"
import UserCourseDetails from "../Components/courseDetails"
import Filtercoursedetails from "../Components/filtercoursedetails"
import GuestCourseDetails from "../Components/courseDetailsforGues"
import {isAusthenticated} from "../Helpers/auth"


const coursefilterbet= () =>{    
    const {role} = isAusthenticated();

    const handleclick4 =() =>{
        window.location.href="../Pages/coursefilter"
    }
    const handelclick0 =() =>{
        window.location.href="../Pages/coursefilterz"
    }
    const handelclick48 =() =>{
        window.location.href="../Pages/coursefilterbet"   }
    const handelclickmore =() =>{

        window.location.href="../Pages/coursefiltermore"}
      const [courses,setCourses]= useState(null)
    const payload = {"min": 400, "max": 800};

      useEffect(()=>{
        const fetchCourses = async () => {
            const response= await fetch('/admin/filterprice', {
                  method: "POST",
                  body: JSON.stringify(payload),
                  headers: {
                    "Content-Type": "application/json"
                  }})
            const json= await response.json()

            if(response.ok){
                setCourses(json)
                console.log("asdfsa")
            }
            else {
                console.log("There is an eror here")

            }
            }
            fetchCourses()
        },[])

    
       return (

            <div className="flex flex-col py-2">
               <button class="btn btn-primary btn-block" onClick={() => window.location.href = '/allcourses'}>
  Back to all courses
</button>
               <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Price
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelclick0}>Free Courses</button>
             <button class="dropdown-item" type="button" onClick={handleclick4} >Less than 400</button>
            <button class="dropdown-item" type="button" onClick={handelclick48} > 400 -800</button>
            <button class="dropdown-item" type="button"onClick={handelclickmore}> More than 800</button>
     </div>  
                <div className="courses">
                        {courses && courses.map((course)=>(
                            <p key={course._id}>
                            <Filtercoursedetails key={course._id} course={course}/>
                        </p>
                    ))}
                </div>
            </div>
            </div>
        )
        

    
    
    }
        export default coursefilterbet


