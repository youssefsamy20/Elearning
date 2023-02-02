import  React , { useEffect,useState,useRef  } from "react"

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Admincoursedetails= ({course}) => {
  const [price,setprice] = useState(0)
  
  const [amount,setamount] = useState(0)

      const handlechange = ( event ) => {
        event.target.name= event.target.value
        setprice(event.target.value)
      } 
     
      const handlechange2 = ( event ) => {
        event.target.name= event.target.value
        setamount(event.target.value)
      } 
    



    function addDiscount() {

      
        fetch('http://localhost:8000/Admin/updateprice', {
          method: 'PUT',
          body: JSON.stringify({
            courseid: course._id ,
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
        
      
      
      
      
      


    return(
        <div>
        
          <div class="d-flex justify-content-between align-items-center">
          
              <h5 class="review-count">Views   :{course.view}</h5>
              <h5 class="review-count">Course Rate   :{course.Rating}</h5>
              <br/>
              <h5 class="review-count">Instructor Rate  :{course.instructor.Rating}</h5>

              
          </div>
       <div className="course-details" >
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p>
            <p><strong>Instructor: </strong>{course.instructor.username}</p>
            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>
          <strong>Price: </strong>
          &emsp;{course.discount ? <del>{course.Price}</del> : course.Price}
         {course.discount  &&  <ins> &emsp;{course.newprice}</ins>}
        {course.discount &&  <>&emsp;{course.discount}% discount for &emsp;{course.expire} day </>}
              </p>


            <p>{course.createdAt}</p>
            <br/>
            To add discount
          <input type="number" value={price} name="PRice" id="discount" onChange={handlechange} className="form-control" required/>
          <br/>
    
          For how long in days <input type="number" value={amount} name="PRice" id="discount" onChange={handlechange2} className="form-control" required/>

            <br/>
            
          <button  id="add-discount-button" className="btn btn-primary btn-block" onClick={addDiscount}>Add Discount</button>
        
        </div><br/>

</div>
       
       
       
    )
}
export default Admincoursedetails