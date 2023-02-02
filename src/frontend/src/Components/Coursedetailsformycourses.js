import  React , { useEffect,useState,useRef  } from "react"
const Coursedetailsformycourses= ({course}) => {
var i = course.Subtitles.length
var first = "First subtitle:"
var second = "Second subtitle:"
var third = "Third subtitle:"
var fourth = "Fourth subtitle:"
var fifth = "Fifth subtitle:"
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

      
        // get the value of the input field
      
        // send a request to the server to update the price
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
        window.location.href = '/mycourses'
        
        }
        
const handel1 = () => {
    
    alert(course.ratingList);
  };
  const handel2 = () => {
    
    alert(course.preview);
  };

    return(
        <div >
        <div className="course-details" onClick={()=>window.location.href=`/course/${course._id}`} hover>
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject.subject}</p>
            <p><strong>Instructor: </strong>{course.instructor.username}</p>
            <p>
          <strong>Price: </strong>
          &emsp;{course.discount ? <del>{course.Price}</del> : course.Price}
         {course.discount  &&  <ins> &emsp;{course.newprice}</ins>}
        {course.discount &&  <>&emsp;{course.discount}% discount for &emsp;{course.expire} day </>}
              </p>
            <p><strong>{0<i &&first} </strong>{0<i&&course.Subtitles[0].weekOne.title}</p>
            <p><strong>{1<i &&second} </strong>{1<i&&course.Subtitles[1].weekOne.title}</p>
            <p><strong>{2<i &&third}</strong>{2<i&&course.Subtitles[2].weekOne.title}</p>
            <p><strong>{3<i &&fourth}</strong>{3<i&&course.Subtitles[3].weekOne.title}</p>
            <p><strong>{4<i &&fifth}</strong>{5<i&&course.Subtitles[4].weekOne.title}</p>

            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>{course.createdAt}</p>
        </div>  
        <div className="row">
        <div className='col-md-4 ml-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal'  data-target='#addcourse' onClick={handel1}>
                            <i className='fas fa-plus' aria-hidden='true'> View Rate</i>
                        </button>
                    </div>
                    <div className='col-md-4 ml-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal'  data-target='#addcourse' onClick={handel2}>
                        <i className='fas fa-plus' aria-hidden='true'> View Reviews</i>
                        </button>
                    </div>
                    </div>
                    <div>
                    <br/>
            To add discount
          <input type="number" value={price} name="PRice" id="discount" onChange={handlechange} className="form-control" required/>
          <br/>
    
          For how long in days <input type="number" value={amount} name="PRice" id="discount" onChange={handlechange2} className="form-control" required/>

            <br/>
          <button  id="add-discount-button" className="btn btn-primary btn-block" onClick={addDiscount}>Add Discount</button>
        
        </div>
                </div>
    )
}
export default Coursedetailsformycourses       