import React , {Fragment, useState} from 'react'; 
import {json, Link , useNavigate} from 'react-router-dom'

import {isAusthenticated , logOut} from "../Helpers/auth"
import equals from 'validator/lib/equals';
import {showErrorMsg, showSuccessMsg } from "../Helpers/message";
import {showloading} from "../Helpers/loading";
import axios from 'axios' ; 
import { Alert } from '@mui/material';
import { set } from 'mongoose';



const authHead = ()=>{

    const {_id} = isAusthenticated()

    const {role} = isAusthenticated()


    const [data,setData]=useState({
        old:"" , 
        password:"", 
        password2:"",
        errorMsg:"",
        successMsg:"", 
        loading:false,



    })

    const {old , password ,password2, errorMsg,successMsg,loading} = data

    const handelChange =(evt)=>{
        setData({
            ...data ,[evt.target.name]:evt.target.value,
            errorMsg:"",successMsg:"",loading:false

        })


    }

    const handelSubmit =async (evt)=>{
        evt.preventDefault(); 
        console.log(data)

        if(!equals(password,password2)){
            setData({
                ...data , errorMsg:'passwords do not match'
            })
        }
        else {
            const sendData = {old , password}
            setData({...data , loading:true})

            if(role ===2){
                const response = await fetch(`/change/user/${_id}` , {
                    method:'PUT', 
                    body:JSON.stringify(sendData),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
                
                 )     
                 const json = response.json()
    
                 if(!response.ok){
    
                    setData({...data , errorMsg:json.errorMessage , loading:false})
                 }
                 if(response.ok){
    
                    setData({...data , successMsg:json.successMessage , loading:false})
    
                    setData({
                        old:"" ,     
                        password:"", 
                        password2:"",
                        errorMsg:"",
                        loading:false,
    
                        
                    })  
                 }
                
                


            }
            else if (role ===0){
                const response = await fetch(`/change/admin/${_id}` , {
                    method:'PUT', 
                    body:JSON.stringify(sendData),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
                
                 )
                 const json = response.json()
    
                 if(!response.ok){
    
                    setData({...data , errorMsg:json.errorMessage , loading:false})
                 }
                 if(response.ok){
    
                    setData({...data , successMsg:json.successMessage , loading:false})
    
                    setData({
                        old:"" , 
                        password:"", 
                        password2:"",
                        errorMsg:"",
                        loading:false,
    
                        
                    })  
                 }
            }
            else if(role===1){
                const response = await fetch(`/change/instructor/${_id}` , {
                    method:'PUT', 
                    body:JSON.stringify(sendData),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
                
                 )
                 const json = response.json()
    
                 if(!response.ok){
    
                    setData({...data , errorMsg:json.errorMessage , loading:false})
                 }
                 if(response.ok){
    
                    setData({...data , successMsg:json.successMessage , loading:false})
    
                    setData({
                        old:"" , 
                        password:"", 
                        password2:"",
                        errorMsg:"",
                        loading:false,
    
                        
                    })  
                 }
            }
            else if(role===4){
                const response = await fetch(`/change/cortrainee/${_id}` , {
                    method:'PUT', 
                    body:JSON.stringify(sendData),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
                
                 )
                 const json = response.json()
    
                 if(!response.ok){
    
                    setData({...data , errorMsg:json.errorMessage , loading:false})
                 }
                 if(response.ok){
    
                    setData({...data , successMsg:json.successMessage , loading:false})
    
                    setData({
                        old:"" , 
                        password:"", 
                        password2:"",
                        errorMsg:"",
                        loading:false,
    
                        
                    })  
                 }
            }

        }

    }
    const handelBio=(evt) =>{
        setBio({...bio , [evt.target.name]:evt.target.value})

        
    }
    const send = {_id,bio:Bio}
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handelBioSumbit = async(evt)=>{
        evt.preventDefault(); 

    console.log( {_id,Bio})
        const response = await fetch("/instructor/bio" , 
            {
                method:'PUT', 
                body:JSON.stringify({_id,Bio}),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        const res = await response.json()
        if(!response.ok){

            setBio({...bio,errorMsg:json.errorMessage})
        }
        if(response.ok){
            setBio(res.bio)
            setSuccess(res.success)
            console.log(res)

        }


    }

    const [bio , setBio] = useState({

        Bio:""
    })
    const {Bio} = bio 
    var help ;

    const getbio =async(evt)=>{
        axios.get(`/instructor/getbio/${_id}`)
        .then(response => {
     const bio = response.data;
     setSuccess("")
     setError("")
    // set the value of the textarea to the bio text
    document.getElementById('bio-textarea').value = bio.bio;
  })
  .catch(error => {
    console.log(error);
  });

    }
    
    const editBio=()=>(
        <div id ="editbio" className='modal fade'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handelBioSumbit} noValidate >
                    <div className='modal-header bg-warning text-white' >
                         <h5 className='modal-title'>Edit Bio</h5>
                            
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>
                                <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}
                               
                        
                                <div className='my-2' >  
                             <label className='text-secondary' for ='form18'>Bio</label>   </div>     
                            <textarea type='text' cols="50" rows='6' label="bio" id='bio-textarea' name="Bio" onChange={handelBio}/>
                          
                           
                    </div>
                    <div className='modal-footer'>
                    {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}

                        <button className='btn btn-secondary ' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-warning text-white' > Edit</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>

    )
    const getEmail= async()=>{
        axios.get(`/instructor/getemail/${_id}`)
        .then(response => {
     const bio = response.data;
     setSuccess("")
     setError("")
     // set the value of the textarea to the bio text
    document.getElementById('emailInput').value = bio.email;
  })
  .catch(error => {
    console.log(error);
  });



    }

    const [EMAIL , SETEMAIL] = useState({

        newEmail:""
    })
    const {newEmail}=EMAIL

    const handelEmailChange = (evt)=> {

        SETEMAIL({...EMAIL , [evt.target.name]:evt.target.value})
        console.log(newEmail)
    }

    const handelEmailsubmit = async (evt)=>{

        evt.preventDefault(); 
        const response = await fetch(`/instructor/editemail/${_id}`, 
        {
            method:'PUT', 
            body:JSON.stringify({newEmail}),
            headers:{
                'Content-Type':'application/json'
            }
        }
    )
    const res = await response.json()
    if(!response.ok){

        SETEMAIL({...EMAIL,errorMsg:json.errorMessage})
    }
    if(response.ok){
        setSuccess(res.success)
        console.log(res)

    }




    }

    const editEmail=()=>(
        <div id ="editemail" className='modal fade'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handelEmailsubmit} noValidate >
                    <div className='modal-header bg-warning text-white' >
                         <h5 className='modal-title'>Email</h5>
                            
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>
                                <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}
                               
                        
                             <label className='text-secondary' for ='form18'>Email</label>   <br/>   
                            <input type='text' label="email" id='emailInput' name="newEmail" onChange={handelEmailChange}/>
                            </div>
                          
                           
                    <div className='modal-footer'>
                    {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}

                        <button className='btn btn-secondary ' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-warning text-white' > Edit</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>

    )


    const showChangePassword=()=>(
        <div id ="changepass" className='modal'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handelSubmit} noValidate >
                    <div className='modal-header bg-warning text-white' >
                         <h5 className='modal-title'>Change Password</h5>
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>

                          
                                <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}
                        
                                        <label className='text-secondary'> Old password </label>
                                            <input
                                            name="old"
                                            type='password'
                                            className='form-control'
                                            onChange={handelChange}
                                            value={old}
                                            />
                                            <label className='text-secondary'> New Password </label>
                                            <input
                                            name ="password"
                                            type='password'
                                            className='form-control'
                                            onChange={handelChange}
                                            value={password}
                                            />
                                            <label className='text-secondary'> Confirm new password </label>
                                            <input
                                            name ="password2"
                                            vaue={password2}
                                            onChange={handelChange}
                                            type='password'
                                            className='form-control'
                                            />
                          
                           
                    </div>
                    <div className='modal-footer'>

                        <button className='btn btn-secondary ' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-warning text-white'> Change</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>



    )



    const handelLogout = evt =>{



        logOut()
    }


    const showNavi = () =>(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to ="/" className="navbar-brand" >ACL MASTERS ACADMY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">


                    {isAusthenticated() && role===0 &&(



                        <Fragment>
                            <li className="nav-item">
                                <Link to ="individual/dashboard" className="nav-link" >
                                   <i className='fas fa-home'/> Dashboard</Link>
                                </li>
                                
                             
                    

                        </Fragment>
 )}
                     {isAusthenticated() && role===1 &&(

                        

                            <Fragment>
                                <li className="nav-item">
                                    <Link to ="instructor/dashboard" className="nav-link" >
                                    <i className='fas fa-home'/> Dashboard</Link>
                                </li>
                               

                                

                            
                                


                            </Fragment>
                            )}
                            {isAusthenticated() && role===2 &&(



                                <Fragment>
                                    <li className="nav-item">
                                        <Link to ="individual/dashboard" className="nav-link" >
                                        <i className='fas fa-home'/> Dashboard</Link>
                                        </li>



                                </Fragment>
                                )}
                                {isAusthenticated() && role===4 &&(      
  


                                    <Fragment>
                                        <li className="nav-item">
                                            <Link to ="cortrainee/dashboard" className="nav-link" >
                                            <i className='fas fa-home'/> Dashboard</Link>
                                            </li>
                                           
                                        


                                    </Fragment>
                                    )}
                                    {isAusthenticated() && role===3 &&(



                                            <Fragment>
                                                <li className="nav-item">
                                                    <Link to ="guest/dashboard" className="nav-link" >
                                                    <i className='fas fa-home'/> Dashboard</Link>
                                                    </li>
                                                    
                                                


                                            </Fragment>
                                            )}
                                            {isAusthenticated()&&(


                                            <Fragment> 
                                                <li className="nav-item">
                                                <Link to ="/home " className="nav-link active" aria-current="page" onClick={handelLogout}>
                                                <i className='fas fa-sign-out-alt'/> Logout</Link>
                                                </li>
                                                <li className="nav-item">
                                                <button className='btn btn-link text-dark text-decoration-none pl-0' data-toggle='modal'  data-target='#changepass'>
                                                <i className='fas fa-wrench'/> changePassword</button >
                                                </li>
                                               
                                             </Fragment>



                                            )}
                                            {isAusthenticated() && role===1 &&(
                                                <div>
                                                <li className="nav-item">
                                                <button className='btn btn-link text-dark text-decoration-none pl-0' data-toggle='modal'  data-target='#editbio' type='button' onClick={getbio}>
                                                 <i className='fas fa-wrench'/> Bio</button>
                                             </li>
                                              <li className="nav-item">
                                              <button className='btn btn-link text-dark text-decoration-none pl-0' data-toggle='modal'  data-target='#editemail' type='button' onClick={getEmail}>
                                               <i className='fas fa-wrench'/> email</button>
                                           </li>
                                           </div>
                                            )}
             



                    
                </ul>


                
                </div>
                    
                </div>



           




        </nav>

        

        


    );

    //render 
        return (
        <section>
        <header id = 'header'>{showNavi()}</header>
        {showChangePassword()}
        {editBio()}
        {editEmail()}
        </section>
        )
                                                
            
    
       


};


export default authHead;