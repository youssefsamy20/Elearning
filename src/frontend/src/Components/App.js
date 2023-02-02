import React from "react";
import { BrowserRouter  , Routes , Route} from 'react-router-dom'
import Header from './header'; 
import Home from '../Pages/home'; 
import Signin from "../Pages/signin";
import Signup from "../Pages/signup";
import NotFound from "./notfound";
import AdminSignupForm from "../Pages/myAdmin/commonsignup";
import UsersignupForm from "../Pages/user/usersignup"; 
import InstructorsignupForm from "../Pages/instructor/instructorsignup"
import SigninForm from "../Pages/myAdmin/commonLogin";
import AdminDashboard from "../Pages/myAdmin/admindashboard";
import UserDashboard from "../Pages/user/userdashboard";
import InstructorDashboard from "../Pages/instructor/instructordashboeard";
import Instructorlogin from "../Pages/instructor/instructorsignin";
import Userlogin from "../Pages/user/usersignin"             
import Cortraineedashboard from "../Pages/cortrainee/cortraineedashboard";
import GuestDashboard from "../Pages/guest/guestdashboard";
import EachCourse from "../Pages/instructor/eachCourse"
import InstructorCourses from "../Pages/instructor/mycourses"
import AllCourses from "../Pages/allcourses"
import {isAusthenticated} from "../Helpers/auth"
import AuthHeader from "./authHeader"
import CortraineeLogin from "../Pages/cortrainee/cortraineeLogin"
import RegisterdCourses from "../Pages/registeredCourses";
import BeforeRegistration from "../Pages/courseBeoreRegister"
import HandelRequests from "./accessRequests"
import EnrolledCourses from "../Pages/fetchEnrolledCourses"
import "../index.css"
import CourseDetailsForCortrainee from "./coursedetailsforcortrainee";
import GuestLogin from "../Pages/guest/gusetLogin"
import Coursefilter from "../Pages/coursefilter"
import Coursefilterz from "../Pages/coursefilterz"
import Coursefilterbet from "../Pages/coursefilterbet"
import Coursefiltermore from "../Pages/coursefiltermore"
import Handelaz from "../Pages/handelaz"
import Handelza from "../Pages/handelza"
import Handel50 from "../Pages/handel50"
import Handel05 from "../Pages/handel05"
import UserResetPassword from "../Pages/user/userResetPassword"
const  App = () =>(

  
  <BrowserRouter>
    {isAusthenticated() ? <AuthHeader/> : <Header/>} 
    {/* <Header/> */}
    <main>    
       <Routes>
         
        <Route path="/" element={<Home/>}/>
        <Route exact path = "/signup" element = {<Signup/>} /> 
        <Route exact path = "/signup/instructor" element = {<InstructorsignupForm/>} /> 
        <Route exact path = "/signup/user" element = {<UsersignupForm/>}/> 
        <Route exact path = "/signup/admin" element = {<AdminSignupForm/>}/> 
        <Route  path = "/signin" element = {<Signin/>} />
        <Route exact path = "/signin/user" element = {<Userlogin/>} />
        <Route exact path = "/signin/admin" element = {<SigninForm/>} />
        <Route exact path = "/signin/instructor" element = {<Instructorlogin/>} />
        <Route exact path = "/signin/cortrainee" element = {<CortraineeLogin/>} />
        <Route exact path = "/admin/dashboard" element = {<AdminDashboard/>} />
        <Route exact path = "/registeredcourses" element = {<RegisterdCourses/>}/>
        <Route  path = "/instructor/dashboard" element = {<InstructorDashboard/>} />
        <Route exact path = "/individual/dashboard" element = {<UserDashboard/>} />
        <Route exact path = "/cortrainee/dashboard" element = {<Cortraineedashboard/>} />
        <Route exact path = "/guest/dashboard" element = {<GuestDashboard/>} />
        <Route exact path = "/instructor/dashboard/mycourses" element = {<InstructorCourses/>} />
        <Route exact path = "/allcourses" element = {<AllCourses/>} />
        <Route path="/course/:id" element={<BeforeRegistration/>}/>
        <Route exact path = "/mycourses" element = {<InstructorCourses/>} />  
        <Route exact path = "/guest/guestLogin" element = {<GuestLogin/>} /> 
        <Route exact path="/handelrequests"  element= {<HandelRequests />} />
        <Route exact path = "/Pages/coursefilter" element = {<Coursefilter/>} />  
        <Route exact path = "/Pages/coursefilterz" element = {<Coursefilterz/>} />  
        <Route exact path = "/Pages/coursefilterbet" element = {<Coursefilterbet/>} />  
        <Route exact path = "/Pages/coursefiltermore" element = {<Coursefiltermore/>} />
        <Route path="/enrolled/course/:id" element={<EnrolledCourses/>}/>
        <Route exact path = "/Pages/handelaz" element = {<Handelaz/>} />
        <Route exact path = "/Pages/handelza" element = {<Handelza/>} />
        <Route exact path = "/Pages/handel50" element = {<Handel50/>} />
        <Route exact path = "/Pages/handel05" element = {<Handel05/>} />
        <Route exact path = "/user/reset/:id/:token" element = {<UserResetPassword/>} />


        <Route element = {<NotFound/>} />  

    </Routes>  

  
    </main>
    
    
    
  </BrowserRouter>
  
);

export default App;


