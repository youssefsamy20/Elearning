import React, { Fragment } from 'react'
import { useState , useEffect } from 'react'
import {showErrorMsg, showSuccessMsg } from "../../Helpers/message";
import {showloading} from "../../Helpers/loading"; 
import isEmpty from 'validator/lib/isEmpty'; 
import {isAusthenticated} from "../../Helpers/auth"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const  mongoose  = require("mongoose");


 
const instructorDashboard = () =>{
    const [insts , setInst] = useState([])
    const [myArr,setmyArr] = useState([])
    const [question , setQuestion] = useState({
        theQuestion : "", 
        firstAnswer: "", 
        secondAnswer:"", 
        thirdAnswer:"", 
        fourthAnswer:"",
        rightAnswer :"",
 })
 const [questionArray , setQuestionArray] = useState([])

const {temp} = myArr

    const arr = []; 
    var sub_id ;
     var tr = 1




    const instrucotList = async ()=>{


        await axios.get("/instructor/get").then(
            (res) => {

                const insts = res.data 
                setInst(insts)
            }
        )  




    }

    
 
    const [formData ,setcourse]=useState({
        Title:'',
        TotalHours:0,
        ShortSummary:'',
        previewLink:"",
        Price:0,
        Subject:'',
        errorMsg:'',
        successMsg:'',          
        loading:false , 
    })  
    
    const {Title,TotalHours,ShortSummary, Price,Subject,errorMsg,successMsg,loading,previewLink} = formData
    const{theQuestion , firstAnswer , secondAnswer , thirdAnswer , fourthAnswer ,rightAnswer}=question

    const [subjects , setSubjects]=useState(null)
    useEffect(() =>{

        const loadSubjects = async () =>{
         const response = await fetch('/admin/getsubject')
         const json = await response.json()
         if(response.ok){
             setSubjects(json)
             console.log(subjects)
     
     
         }
 
 
        }
        loadSubjects()
     },[])






const [subTitles , setSubtitles] = useState({
    firstTitle:'',
    firstVideo:'', 
    firstDescription:'',
    th:"",
    
})

const {
    firstTitle,
    firstVideo, 
    firstDescription,
    th,
   

} = subTitles

const handelQuestionChange = (evt)=>{

setQuestion({

    ...question,[evt.target.name]:evt.target.value
})

}

const handelSubtitleChange = (evt)=>{

    setSubtitles({
        ...subTitles,[evt.target.name]:evt.target.value
    })

   
}
var ExamId;

const handelQuestionSubmit = async (evt)=>{
    evt.preventDefault(); 
    
    const data = {theQuestion , firstAnswer ,secondAnswer , thirdAnswer , fourthAnswer , rightAnswer}

     const response = await fetch("/question" , 
    
    {
        method:'POST', 
        body:JSON.stringify(data), 
        headers:{
            'Content-Type':'application/json'
        }
}
    )
    const json = await response.json()
    if(!response.ok){
        setQuestion({
            ...question , errorMsg:json.errorMessage
        })
    }
    if(response.ok){
        setQuestion({

            theQuestion : "", 
            firstAnswer: "", 
            secondAnswer:"", 
            thirdAnswer:"", 
            fourthAnswer:"",
            rightAnswer :"",

        })

        setQuestionArray(questionArray.concat(json._id))
        console.log(questionArray)
    }


}

const [EXAM, setExamID] = useState({})

const handelSubtitleSubmit = async (evt) =>{
    evt.preventDefault(); 

    const wholeData = {
        weekOne: {title:firstTitle , video:firstVideo , videoDescription:firstDescription },EXAM,TotalHours:th
       
    }
    console.log(JSON.stringify(wholeData))
    const response = await fetch("/instructor/addsubtitle" , 
    {
        method:'POST',
        body:JSON.stringify(wholeData),
        headers:{
            'Content-Type':'application/json'
        }
}
)

    const json = await response.json()

        if(!response.ok){
            setSubtitles({
                ...subTitles,errorMsg:json.errorMessage
            })
        }
        if(response.ok){
            setSubtitles({
                firstTitle:'',
                firstVideo:'', 
                firstDescription:'',
                th:"",
                
            })

            console.log(json)
            setMyExam({});
             sub_id = {sub_id: json._id}
              setmyArr(myArr.concat(json._id))
              

 

              }
               

  
}  
const [myExam , setMyExam] =useState(null) 
//const {EXAM}= myExam
var h;
const handelExamSubmit = async(evt)=>{
    evt.preventDefault(); 

const wholeExam  = {questionArray}
console.log(questionArray)
 const response = await fetch("/exam/show" , 
                            {
                                method:'POST',
                                body:JSON.stringify(wholeExam),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }   
)

        const json = await response.json()

        if(!response.ok){

            setMyExam({...myExam , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setMyExam(json._id)
            ExamId = json._id
            setExamID(json._id)
            console.log(JSON.stringify(EXAM))
            console.log(json._id)

             }
             setQuestionArray([])
 }



   
 
   
    const handelChange = (evt) =>{

        setcourse({
            ...formData,
            [evt.target.name] : evt.target.value,
})  

    }
    const handelcourseSubmit = async(evt) => {
        evt.preventDefault(); 
        const {_id} = isAusthenticated();

        const course = {Title , TotalHours , ShortSummary ,previewLink, Price,Subject,_id ,myArr}
     

 
        const response = await fetch("/instructor/addcourse" , 
                            {
                                method:'POST',
                                body:JSON.stringify(course),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)

        const json = await response.json()
        console.log(json)

        if(!response.ok){

            setcourse({...formData , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setcourse({
                Title:'',
                TotalHours:0,
                ShortSummary:'',
                Price:0,
                Subject:'',
                errorMsg:'' ,
                previewLink:""
            })
            console.log("new workout added: " ,json )


        }




    }


    const showHeader = ()=>(

        <div className='bg-dark text-white py-4'>
            <div className='container'>
                 <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> Dashboard</i>
                        </h1>
                    </div>
                </div>

            </div>

         </div>

    )



    const showActionButtons = () => (

        <div className='bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal'  data-target='#addcourse'  onClick={intialize} >
                            <i className='fas fa-plus' aria-hidden='true'> Add course</i>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <Link to="/mycourses"role ='button' className='btn btn-outline-info btn-block' >
                            <i className='fas fa-brain' aria-hidden='true'> View my courses</i>
                        </Link>
                       
                        
                    </div>
                    <div className='col-md-4'>
                        <Link to="/allcourses" role ='button' className='btn btn-outline-info btn-block'>
                            <i className='fas fa-brain' aria-hidden='true'> view all courses</i>
                        </Link>
                    </div>
                    <div className='col-md-4 py-2'>
                        <button className='btn btn-outline-warning btn-block' data-toggle='modal'  data-target='#contract'>
                            <i className='fas fa-warning' aria-hidden='true'> view Contract</i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
        )

        const intialize = ()=>{

            setmyArr([]);

        }



const {_id}=isAusthenticated()
        const showContract=()=>(
            <div className="modal fade" id="contract" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">The Contract</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            this contract to inform you that you will gane bla bla bla
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handelAcceptance}>Accept</button>
                        </div>
                        </div>
                    </div>
                    </div>  

            
        )




const handelAcceptance= async()=>{

    alert("you have accepted the contract")
    const response = await fetch(`/instructor/contract/${_id} `, 
                            {
                                method:'PUT',}   
)

const res= await res.json()

}
    


  

        const showcourses = () => (
                
            <div id ="addcourse" className='modal' data-backdrop='static' >
                    <div className='modal-dialog modal-dialog-center modal-lg'>
                        <div className='modal-content'>
                        <form onSubmit={handelcourseSubmit}>
                            <div className='modal-header bg-info text-white' >
                                 <h5 className='modal-title'>Add Course</h5>
                                 <button className='close' data-dismiss='modal'>
                                    <span> <i className='fas fa-times'></i></span>
                                 </button>
                                  </div>

                                  
                            <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}


                                {
                                    loading ? (
                                         showloading()
                                    ) :(
                                        <Fragment>
                                    <label className='text-secondary'> Course Title </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelChange}
                                    name='Title'
                                    value={Title}
                                    />

                                    <button type='button' className='btn btn-outline-dark btn-block  my-2' data-toggle='modal'  data-target='#addSubtitle' >
                                                                <i className='fas fa-plus' aria-hidden='true'>course SubTitles</i>
                                                            </button>
                                    



                                     <label className='text-secondary py-1'> TotalHours </label>
                                    <input
                                    type='number'
                                    className='form-control'
                                    onChange={handelChange}
                                    name="TotalHours"
                                    value={TotalHours}
                                    min='0'
                                    />
                                    <label className='text-secondary py-1'> Subject </label>
                                  
                                    <select className='custom-select mr-sm-2' onChange={handelChange} name="Subject" value={Subject}>
                                        <option>Choose one..</option>
                                        {subjects && subjects.map(s =>(
                                            <option key = {s._id} value={s._id}>
                                                {s.subject}
                                            </option>
                                        ))}
                                       
                                    </select>
                                    <label className='text-secondary py-1'> Price </label>
                                    <input
                                    type='number'
                                    className='form-control'
                                    onChange={handelChange}
                                    name='Price'
                                    value={Price}
                                    min='0'
                                    />
                                    <label className='text-secondary py-1'> Preview Link </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelChange}
                                    name='previewLink'
                                    value={previewLink}
                                    />
                                    <label className='text-secondary py-1'> Short Summary </label>
                                    <textarea
                                    rows="3"
                                    type='text'
                                    className='form-control'
                                    onChange={handelChange}
                                    name = "ShortSummary"
                                    value={ShortSummary}>
                                    </textarea>
                                    
                                    </Fragment>


                                    )
                                    




                                }
                                     
                            </div>
                            <div className='modal-footer'>

                                <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                                <button type = 'submit'className='btn btn-info '> Add course</button>




                            </div>
                            </form>
                        </div>

                    </div>
            </div>
                
                )

        const showSubtitles = ()=> (
            <div id ="addSubtitle" className='modal fade'  data-backdrop='static' aria-labelledby="staticBackdropLabel" aria-hidden="true" tabIndex="-1">
                    <div className='modal-dialog modal-dialog-center modal-lg'>
                        <div className='modal-content'>
                        <form onSubmit={handelSubtitleSubmit}>
                            <div className='modal-header bg-info text-white' >
                                 <h5 className='modal-title'>Add Course Subtitles</h5>
                                 <button className='close' data-dismiss='modal'>
                                    <span> <i className='fas fa-times'></i></span>
                                 </button>
                                  </div>

                                  
                            <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}


                                {
                                    loading ? (
                                         showloading()
                                    ) :(
                                        <Fragment>
                                    <label className='font-weight-bold my-2'><h3>Add SubTitle</h3></label><br></br>

                                    <label className='text-secondary py-1'> Title </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelSubtitleChange}
                                    name='firstTitle'
                                    value={firstTitle}
                                    
                                    />
                                    <label className='text-secondary py-1'> TotalHours </label>
                                    <input
                                    type='number'
                                    className='form-control'
                                    onChange={handelSubtitleChange}
                                    name="th"
                                    value={th}
                                    min='0'
                                    />
                                    <label className='text-secondary py-1'> VideoLink </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelSubtitleChange}
                                    name='firstVideo'
                                    value={firstVideo}
                                    
                                    />
                                    <label className='text-secondary py-1'> Video Description </label>
                                    <textarea
                                    type='text'
                                    className='form-control'
                                    onChange={handelSubtitleChange}
                                    name='firstDescription'
                                    value={firstDescription}
                                    ></textarea>
                                    <button type='button'  className='btn btn-outline-dark btn-block  my-4' data-toggle='modal'  data-target='#addExam' data-backdrop="false" >
                                                                <i className='fas fa-plus' aria-hidden='true'>Add Exam</i>
                                                            </button>
 </Fragment>


                                    )
                                    




                                }
                                     
                            </div>
                          
                            <div className='modal-footer'>
                             
                                
                                <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                                <button type = 'submit'className='btn btn-info '> Add</button>
                                
                            




                            </div>
                            </form>
                        </div>

                    </div>
            </div>
                




        )
       

    const showExam = ()=> (
        <div id ="addExam" className='modal fade' data-backdrop="static">
                <div className='modal-dialog modal-dialog-center modal-lg'>
                    <div className='modal-content'>
                    <form onSubmit={handelExamSubmit}>
                        <div className='modal-header bg-danger text-white' >
                             <h5 className='modal-title'>Exam</h5>
                             <button className='close' data-dismiss='modal'>
                                <span> <i className='fas fa-times'></i></span>
                             </button>
                              </div>
                              <div className='modal-body my-2'>
                            {errorMsg&& showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}


                            {
                                loading ? (
                                     showloading()
                                ) :(
                                    <Fragment>
                               <button type='button' className='btn btn-outline-dark btn-block  my-2' data-toggle='modal'  data-target='#addquestion' >
                                                                <i className='fas fa-plus' aria-hidden='true'>Question</i>
                                </button>
</Fragment>


                                )
                             }
                                 
                        </div>
                        <div className='modal-footer'>
                           
                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-danger '> Sumbit</button>
                             </div>
                        </form>
                    </div>

                </div>
        </div>
            



    )
  

   

    const showQuestion = ()=> (
        <div id ="addquestion" className='modal fade' data-backdrop="static">
                <div className='modal-dialog modal-dialog-center modal-lg'>
                    <div className='modal-content'>
                    <form onSubmit={handelQuestionSubmit}>
                        <div className='modal-header bg-warning text-white' >
                             <h5 className='modal-title'>Question</h5>
                             <button className='close' data-dismiss='modal'>
                                <span> <i className='fas fa-times'></i></span>
                             </button>
                              </div>
                              <div className='modal-body my-2'>
                            {errorMsg&& showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}


                            {
                                loading ? (
                                     showloading()
                                ) :(
                                    <Fragment>
                                        <label className='font-weight-bold my-2'><h3>Add Question</h3></label><br></br>

                                            <label className='text-secondary py-1'>The Question </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='theQuestion'
                                            value={theQuestion}
                                            />
                                             <label className='text-secondary py-1'> Choose 1 </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='firstAnswer'
                                            value={firstAnswer}
                                            />
                                             <label className='text-secondary py-1'> Choose 2  </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='secondAnswer'
                                            value={secondAnswer}
                                            />
                                             <label className='text-secondary py-1'> Choose 3  </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='thirdAnswer'
                                            value={thirdAnswer}
                                            />
                                             <label className='text-secondary py-1'> Choose 4 </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='fourthAnswer'
                                            value={fourthAnswer}
                                            />
                                             <label className='text-secondary py-1'> Right Answer </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelQuestionChange}
                                            name='rightAnswer'
                                            value={rightAnswer}
                                            />
                                            
</Fragment>


                                )
                             }
                                 
                        </div>
                        <div className='modal-footer'>
                           
                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-warning '> Sumbit Questoin</button>
                             </div>
                        </form>
                    </div>

                </div>
        </div>
            



    )


                


    return (
        <section>
            {showHeader()};
            {showActionButtons()};
            {showcourses()}
            {errorMsg && showErrorMsg(errorMsg)}
            {showSubtitles()}
            {showExam()}
            {showQuestion()}
            {showContract()}
         </section>
    )
}
  
export default instructorDashboard;