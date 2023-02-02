import  React , { useEffect,useState,useRef  } from "react"
import Button from '@mui/material/Button';
import axios from 'axios';
import CourseDetailsForCortrainee from "../Components/coursedetailsforcortrainee"
import CourseDetailsForInstructor from "../Components/coursedetailsforinstructor"
import UserCourseDetails from "../Components/courseDetails"
import Admincoursedetails from "../Components/Admincoursedetails"

import GuestCourseDetails from "../Components/courseDetailsforGues"

import {isAusthenticated} from "../Helpers/auth"
import { json } from "react-router";
 

const {role} = isAusthenticated();



const InstructorAllCourses = () =>{
    
    const [price,setprice] = useState(0)
    const [courses, setCourses] = useState([]);

    const [amount,setamount] = useState(0)
    const [min,setmin] = useState(0)
    const [max,setmax] = useState(0)

        const handlechange = ( event ) => {
          event.target.name= event.target.value
          setprice(event.target.value)
        } 
       
        const handlechange2 = ( event ) => {
          event.target.name= event.target.value
          setamount(event.target.value)
        } 
        const handlechangemin = ( event ) => {
            event.target.name= event.target.value
            setmin(event.target.value)
          } 
          const handlechangemax = ( event ) => {
            event.target.name= event.target.value
            setmax(event.target.value)
          } 
        function filterprice(){
            fetch('/admin/filterprice', {
                method: 'POST',
                body: JSON.stringify({
                    min: min,
                    max: max
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                setCourses(response);
            })
            .catch(error => console.error('Error:', error));
        }
              
        function addDiscount() {

      
            // get the value of the input field
          
            // send a request to the server to update the price
            fetch('http://localhost:8000/admin/updatepriceforall', {
              method: 'POST',
              body: JSON.stringify({
                
                nprice: price ,
                expir: amount
               
              }),
    
              
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response))
          
            
            )
            .catch(error => console.error('Error:', error));
            window.location.href = '/allcourses'
            
            }
    const handelclick =() =>{
        window.location.href="../Pages/coursefilter"
    }
    const handelclick0 =() =>{
        window.location.href="../Pages/coursefilterz"
    }
    
    const handelclickmore =() =>{
        window.location.href="../Pages/coursefiltermore"}
        
        const handelaz =() =>{
            window.location.href="../Pages/handelaz"}
            const handelza =() =>{
                window.location.href="../Pages/handelza"}
                const handel05 =() =>{
                    window.location.href="../Pages/handel50"}
                    const handel50 =() =>{
                        window.location.href="../Pages/handel05"}
    
    const [ratingFilter, setRatingFilter] = useState(0);
    const handleRatingChange = (event) => {
        setRatingFilter(event.target.value);
      };
      const [searchQuery2, setSearchQuery2] = useState('');
      const searchInput2 = useRef();
      const handleSearch2 = (event) => {
      event.preventDefault();
      const query = searchInput2.current.value;
      console.log(searchInput2.current.value);
               axios.get(`../admin/allcourses?q=${query}`)
               .then(response => {
                 const courses = response.data;
                 // update the courses state with the search results
                    setCourses(courses);
                        {courses && courses.map((course) => (
      <div key={course._id}>
      <GuestCourseDetails key={course._id} course={course} />
          </div>
              ))}
          })
          .catch(error => {
             
          });
      };

    const [searchQuery, setSearchQuery] = useState('');
            const searchInput = useRef();
            const handleSearch = (event) => {
            event.preventDefault();
            const query = searchInput.current.value;
            console.log(searchInput.current.value);
                     axios.get(`../admin/searchsubject?q=${query}`)
                     .then(response => {
                       const courses = response.data;
                       // update the courses state with the search results
                          setCourses(courses);
                              {courses && courses.map((course) => (
            <div key={course._id}>
            <GuestCourseDetails key={course._id} course={course} />
                </div>
                    ))}
                })
                .catch(error => {
                   
                });
            };
            useEffect(()=>{
            const fetchCourses = async () => {
                const response= await fetch('/admin/allcourses')
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
  
    if(role==0){    return (

        <div className="flex flex-col py-2">
                    <div class="dropdown">
               <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Filter by Price
               </button>
               <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                   <button class="dropdown-item" type="button"onClick={handelclickmore}>Free Courses</button>
                   <button class="dropdown-item" type="button" onClick={handelclick0}>ascending </button>
                   <button class="dropdown-item" type="button"onClick={handelclick}>descending</button>
       
               </div>
               </div>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter By Subject and Rate
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button" onClick={handelaz}>Subject A-Z</button>
                <button class="dropdown-item" type="button"onClick={handelza}>Subject Z-A</button>
                <button class="dropdown-item" type="button" onClick={handel50}>Rating 5-0</button>
                <button class="dropdown-item" type="button"onClick={handel05}>Rating 0-5</button>
            </div>
            </div>
            
                        <br/>Price From
                        <input type="number" value={min} name="min" id="discount" onChange={handlechangemin} className="form-control" required/>
                            To
                    <input type="number" value={max} name="max" id="discount" onChange={handlechangemax} className="form-control" required/>

          <button  id="add-discount-button" className="btn btn-primary btn-block" onClick={filterprice}>Filter</button>
        
            Add discuont in percentage % for all courses
          <input type="number" value={price} name="PRice" id="discount" onChange={handlechange} className="form-control" required/>
          <br/>
    
          For how long in days 
          <input type="number" value={amount} name="PRice" id="discount" onChange={handlechange2} className="form-control" placeholder="In days" required/>

            <br/>
          <button  id="add-discount-button" className="btn btn-primary btn-block" onClick={addDiscount}>Add Discount for all</button>
        
       
        <br/>
                Search 
            <form onSubmit={handleSearch}>
                <input type="text" ref={searchInput} value={searchQuery} placeholder="Search"
                    onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form>
            Search For Subject
            <form onSubmit={handleSearch2}>
                <input type="text"  value={searchQuery2} placeholder="Search For Subject"
                    onChange={event => setSearchQuery2(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form >
            <div className="courses">
                    {courses && courses.map((course)=>(
                        <p key={course._id}>
                        <Admincoursedetails key={course._id} course={course}/>
                    </p>
                ))}
            </div>
        </div>
    )}
    if (role ===1){
    return (

        <div className="flex flex-col py-2">
                  <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Price
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelclick0}>ascending </button>
            <button class="dropdown-item" type="button"onClick={handelclick}>descending</button>
                
        </div>
        </div>
        <br/>
        
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter By Subject and Rate
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" onClick={handelaz}>Subject A-Z</button>
            <button class="dropdown-item" type="button"onClick={handelza}>Subject Z-A</button>
            <button class="dropdown-item" type="button" onClick={handel50}>Rating 5-0</button>
            <button class="dropdown-item" type="button"onClick={handel05}>Rating 0-5</button>
        </div>
        </div>
       
        <br/>
      
        <form onSubmit={handleSearch}>
            
            <input type="text" ref={searchInput} value={searchQuery} placeholder="Start typing to search"
                onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
          <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
        </form>
                <div className="courses">
                    {courses && courses.map((course)=>(
                        <p key={course._id}>
                       <CourseDetailsForInstructor key={course._id} course={course}/>
                    </p>
                ))}
            </div>
            

        </div>
                    
    )
                    }
    else if (role===4 ){
        return (
            <div className="flex flex-col py-2">
                  <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Price
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelclick0}>ascending </button>
            <button class="dropdown-item" type="button"onClick={handelclick}>descending</button>
            
        </div>
        <br/>
        
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter By Subject and Rate
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" onClick={handelaz}>Subject A-Z</button>
            <button class="dropdown-item" type="button"onClick={handelza}>Subject Z-A</button>
            <button class="dropdown-item" type="button" onClick={handel50}>Rating 5-0</button>
            <button class="dropdown-item" type="button"onClick={handel05}>Rating 0-5</button>
        </div>
        </div>
        </div>
            <form onSubmit={handleSearch}>
                <input type="text" ref={searchInput} value={searchQuery} placeholder="Start typing to search"
                    onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form>
                <div className="courses">
                    {courses && courses.map((course)=>(
                        <p key={course._id}>
                       <CourseDetailsForCortrainee key={course._id} course={course}/>
                    </p>
                ))}
            </div>
           
        </div>

        )
    }
    else if (role ===2){
        return (
            
            <div className="flex flex-col py-2">
                  <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Price
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelclick0}>ascending </button>
            <button class="dropdown-item" type="button"onClick={handelclick}>descending</button>
            
        </div>

        </div>
        <br/>
        
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter By Subject and Rate
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" onClick={handelaz}>Subject A-Z</button>
            <button class="dropdown-item" type="button"onClick={handelza}>Subject Z-A</button>
            <button class="dropdown-item" type="button" onClick={handel50}>Rating 5-0</button>
            <button class="dropdown-item" type="button"onClick={handel05}>Rating 0-5</button>
        </div>
        </div>
       
        <br/>
            <form onSubmit={handleSearch}>
                <input type="text" ref={searchInput} value={searchQuery} placeholder="Start typing to search"
                    onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form>
                <div className="courses">
                    {courses && courses.map((course)=>(
                        <p key={course._id}>
                       <UserCourseDetails key={course._id} course={course}/>
                   
                    </p>
                    
                 
                ))}
            </div>
    
           
        </div>


        )
    }
    else {
        return (
            

            <div className="flex flex-col py-2">
                  <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Price
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" onClick={handelclick0}>ascending </button>
            <button class="dropdown-item" type="button"onClick={handelclick}>descending</button>
            
        </div>
        </div>
            <form onSubmit={handleSearch}>
                <input type="text" ref={searchInput} value={searchQuery} placeholder="Start typing to search"
                    onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form>
            <div className="courses">
              {courses && courses.map((course) => (
                <div key={course._id}>
                  <GuestCourseDetails key={course._id} course={course} />
                </div>
              ))}
              
            </div>
            <div>
            
                
    
          </div>
          <div>
         </div></div>
        )
    }
    
}
export default InstructorAllCourses