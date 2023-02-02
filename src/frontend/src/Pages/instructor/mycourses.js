import  React , { useEffect,useState,useRef  } from "react"
import { isAusthenticated} from "../../Helpers/auth"

import Coursedetailsformycourses from "../../Components/Coursedetailsformycourses"
import Button from '@mui/material/Button';
import axios from 'axios';




const InstructorCourses = () =>{

        // const params = new URLSearchParams(window.location.search); 
        // const {id}} = params.id
        // console.log("123123123")
        const [search,setSearch] = useState(0)

        const handlechange = ( event ) => {
          event.target.name= event.target.value
          setSearch(event.target.value)
        } 

        function search1(){
            fetch('/admin/getinsCourses', {
                method: 'GET',
                body: JSON.stringify({
                    id: _id,
                    q: search
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert(search)
            .then(res => res.json())
            .then(response => {
                setCourses(response);
                alert(response)
            })
            

            .catch(error => console.error('Error:', error));
        }

    

      const [searchQuery, setSearchQuery] = useState('');
              const searchInput = useRef();
              const handleSearch = (event) => {
              event.preventDefault();
              const query = searchInput.current.value;
              console.log(searchInput.current.value);
                       axios.get(`../admin/getinsCourses?q=${query}`)
                       .then(response => {
                         
                         // update the courses state with the search results
                            setCourses(response);
                                {courses && courses.map((course) => (
              <div key={course._id}>
              <Coursedetailsformycourses key={course._id} course={course} />
                  </div>
                      ))}
                  })
                  .catch(error => {
                     
                  });
              };
        
    const {_id} = isAusthenticated()
    const [min,setmin] = useState(0)
    const [max,setmax] = useState(0)

    const [courses,setCourses]= useState(null)
    const handlechangemin = ( event ) => {
        event.target.name= event.target.value
        setmin(event.target.value)
      } 
      const handlechangemax = ( event ) => {
        event.target.name= event.target.value
        setmax(event.target.value)
      } 
    function filterprice(){
        fetch('/admin/incfilterprice', {
            method: 'POST',
            body: JSON.stringify({
                min: min,
                max: max,
                id:_id
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

    useEffect(()=>{
    const fetchCourses = async () => {
        const response= await fetch(`/instructor/dashboard/${_id}`)
        const json= await response.json()
        console.log(json)

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
                <br/>Price From
                        <input type="number" value={min} name="min" id="discount" onChange={handlechangemin} className="form-control" required/>
                            To
                    <input type="number" value={max} name="max" id="discount" onChange={handlechangemax} className="form-control" required/>

        <button  id="add-discount-button" className="btn btn-primary btn-block" onClick={filterprice}>Filter</button>
        <br/>
                Search 
            <form onSubmit={handleSearch}>
                <input type="text" ref={searchInput} value={searchQuery} placeholder="Search"
                    onChange={event => setSearchQuery(event.target.value)} className="form-control"/>
              <Button type="submit" variant="contained" color="primary" className="my-4 mx-2">Search</Button>
            </form>
            Search For Subject
            <form >
                           <input class="form-control"type="text"  onChange={handlechange} value={search} placeholder="Search For Subject"/>
              <Button type="submit" variant="contained" color="primary" onClick={search1} className="my-4 mx-2">Search</Button>
            </form >

            <div className="instructorAllCourses">
                <div className="courses">
                    {courses && courses.map((course)=>(
                       
                    <p key={course._id} >
                       <Coursedetailsformycourses key={course._id} course={course}/>
                    </p>
                   
                ))}
            </div>

            
        </div>        </div>

    )

}
export default InstructorCourses
