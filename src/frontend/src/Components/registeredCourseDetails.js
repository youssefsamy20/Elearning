  import  React , { useEffect,useState,useRef  } from "react"
  import { setLocalStorage } from "../Helpers/localStorage";
  const Registered= ({course}) => {
      const [proplem2, setproplem2] = useState('');
      const handel1 = ( event1 ) => {
        event1.target.name= event1.target.value
        setproplem2(event1.target.value)
      } 
      
      const [str, setstr] = useState('');

      const handelr= (eventt) =>{
        eventt.target.name=eventt.target.value
        setstr(eventt.target.value)
      }
      const [pro, setpro] = useState('');

      const handel2= (eventt) =>{
        eventt.target.name=eventt.target.value
        setpro(eventt.target.value)
      }
      
      let registerHandelr= registerHandelr = async ()=>{

        

        
            

        const data = { ...{courseid: course._id, string: str } };
          console.log (data);
  fetch('http://localhost:8000/admin/addpreview', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    },
    })
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(data);
    window.location.href = '/registeredcourses';

  })
  .catch((error) => {
    console.error(error);
    // Do something with the error here, such as displaying an error message to the user
  });
;}
      const registerHandel2 = async ()=>{
        
        const data = { ...{ courseid: course._id, proplem: pro } };

        alert(pro);
          if(proplem2=="Financial"){
        
        
              console.log (data);
      fetch('http://localhost:8000/admin/financial', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        },
        })
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result);
        console.log(data);
        window.location.href = '/registeredcourses';

      })
      .catch((error) => {
        console.error(error);
        // Do something with the error here, such as displaying an error message to the user
      });
            }
            if(proplem2=="Technical"){
                
                
                  console.log (data);
            fetch('http://localhost:8000/admin/technical', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((result) => {

            console.log(result);
            console.log(data);
            window.location.href = '/registeredcourses';

            })
            .catch((error) => {
            console.error(error);
            // Do something with the error here, such as displaying an error message to the user
            });

            }
            if(proplem2=="other"){
                
                  console.log (data);
            fetch('http://localhost:8000/admin/other', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((result) => {

            console.log(result);
            console.log(data);
            window.location.href = '/registeredcourses';

            })
            .catch((error) => {
            console.error(error);
            // Do something with the error here, such as displaying an error message to the user
            });
            }
            }

            const [srate,setsrate] = useState(0)
            const [corid,setcorid] = useState(null)

                const handel = ( event ) => {
                  event.target.name= event.target.value
                  setsrate(event.target.value)
                } 
              
                const [srate1,setsrate1] = useState(0)
            
                const handel3 = ( event2 ) => {
                  event2.target.name= event2.target.value
                  setsrate1(event2.target.value)
                } 
                
                let registerHandel= registerHandel = async ()=>{

        

        
            

                  const data = { ...{ courseId: course._id, rating: srate } };
                    console.log (data);
            fetch('http://localhost:8000/admin/addrating', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              },
              })
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              console.log(data);
              window.location.href = '/registeredcourses';
        
            })
            .catch((error) => {
              console.error(error);
              // Do something with the error here, such as displaying an error message to the user
            });
        ;}

            let registerHandel1= registerHandel1 = async ()=>{

        

        
            

            const data = { ...{ insid: course.instructor._id, rating: srate1 } };
              console.log (data);
      fetch('http://localhost:8000/instructor/addrating', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        },
        })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(data);
        window.location.href = '/registeredcourses';

      })
      .catch((error) => {
        console.error(error);
        // Do something with the error here, such as displaying an error message to the user
      });
  ;}
      return(
          <div>
          <div className="course-details" onClick={()=>window.location.href=`enrolled/course/${course._id}`} hover>
              <h4>{course.Title}</h4>
              <p><strong>Subject: </strong>{course.Subject.subject}</p>
              <p><strong>Instructor: </strong>{course.instructor.username}</p>
              <p><strong>Price </strong></p>
      <p>
          <strong>Price</strong>
          {course.discount ? <del>{course.Price}</del> : course.Price}
          {course.discount &&  <ins>{course.newprice}</ins>}
        {course.discount &&  <>&emsp;&emsp;{course.discount}%</>}
              </p>

               <p><strong>Hours: </strong>{course.TotalHours}</p>
              <p>{course.createdAt}</p>
              </div>
              <div className="course-details">
              <br/>  

              <form className="add-rating-form">
                      <input type="hidden" id="course-id" value={corid} name="corid" onChange={handel} />
                      <label for="rating" >Rate course:{course.Title}</label><br/>
                      <input type="number" id="rating" min="1" max="5" onChange={handel} value={srate} name="srate" />
                      
                    <button type="button"className="btn btn-outline-primary"onClick={registerHandel}>Rate</button>
              </form>

              
              <br/>
              <form className="add-rating-form">
                      <input type="hidden" id="course-id"   />
                      <label for="rating" >Rate Instructor : {course.instructor.username}</label><br/>
                      <input type="number" id="rating" min="1" max="5" onChange={handel3} value={srate1} name="srate1" />
                      
                    <button type="button"className="btn btn-outline-primary"onClick={registerHandel1}>Rate</button>
              </form>
              <br/>
              <label for="rating" >If you have any issues:</label><br/>
              <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {proplem2 || 'Select proplem'}
          </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item"  onClick={() => setproplem2('Financial')}>Financial</a>
                  <a className="dropdown-item"  onClick={() => setproplem2('Technical')}>Technical</a>    
                    <a className="dropdown-item" onClick={() => setproplem2('other')}>other</a>

                  </div>
                        </div>
                  <br/>
              <form className="add-Proplem-form">
                      <input type="hidden" id="course-id" value="123456" />
                      
                      <input type="text" id="proplemm"  onChange={handel2}value={pro} name="pro"/>
                      
                    <button className="btn btn-outline-primary"onClick={registerHandel2}>Submit</button>
              </form>
              <br/>
              <label for="rating" >Give review for Instructor: {course.instructor.username}</label><br/>

              <input type="hidden" id="course-id" value="123456" />
                      
                      <input type="text" id="proplemm"  onChange={handelr}value={str} name="str"/>
                      
                    <button className="btn btn-outline-primary"onClick={registerHandelr}>Submit</button>

              <div class="height-100 container d-flex justify-content-center align-items-center">
      
      <div class="card p-3">
          <div class="d-flex justify-content-between align-items-center">
          
              <h5 class="review-count">Views   :{course.view}</h5>
              <h5 class="review-count">Course Rate   :{course.Rating}</h5>
              <br/>
              <h5 class="review-count">Instructor Rate  :{course.instructor.Rating}</h5>

              
          </div>
          
          
          
          </div>
          </div>
          </div>
          </div>
          
      )
  }
  export default Registered