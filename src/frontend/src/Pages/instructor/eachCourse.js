import  React , { useEffect,useState } from "react"

// import CourseDetails from "../Components/courseDetails"


const eachCourse = () =>{
    const [courses,setCourses]= useState(null)


    const params = new URLSearchParams(window.location.search)
    const courseId= params.get(`courseId`)
    console.log(courseId)

    useEffect(()=>{
    const fetchCourses = async () => {
        const response= await fetch(`/course?courseId=${courseId}`)
        const json= await response.json()

        if(response.ok){
            setCourses(json)
        }
        else {
            console.log("There is an eror here")

        }
        }
        fetchCourses()
    },[])

return (
    <div>
        <p>Hello</p>
    </div>
)

}

export default eachCourse;