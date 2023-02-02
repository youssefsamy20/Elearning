import Admincoursedetails from "../Components/Admincoursedetails"
import  React , { useEffect,useState,useRef  } from "react"

import Filtercoursedetails from "../Components/filtercoursedetails"

const handelaz = () =>{
 
    const handelaz =() =>{
        window.location.href="../Pages/handelaz"}
        const handelza =() =>{
            window.location.href="../Pages/handelza"}
            const handel05 =() =>{
                window.location.href="../Pages/handel50"}
                const handel50 =() =>{
                    window.location.href="../Pages/handel05"}



      const [courses,setCourses]= useState(null)
    const payload = {"max": 1};

      useEffect(()=>{
        const fetchCourses = async () => {
            const response= await fetch('/admin/filtersubject', {
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
            Filter by Subject   
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelaz}>Subject A-Z</button>
            <button class="dropdown-item" type="button"onClick={handelza}>Subject Z-A</button>
            <button class="dropdown-item" type="button" onClick={handel50}>Rating 5-0</button>
            <button class="dropdown-item" type="button"onClick={handel05}>Rating 0-5</button>
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
        )}
        export default handelaz


