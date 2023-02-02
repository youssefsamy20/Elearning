import React ,{useState }from 'react';
import { Link , useNavigate} from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import "../../css/signup.css";
import {showErrorMsg } from "../../Helpers/message"; 
import {showloading} from "../../Helpers/loading"; 
import {setAuthentication , isAusthenticated} from "../../Helpers/auth"


const login = ()=>{
    


    const navigate = useNavigate();
    
    


    const[formData ,  setFormData]=useState({

        email:'',
        password:'',
        errorMsg:false, 
        loading:false,
    })
    const { email , password , errorMsg,loading}  = formData;

    const handleChange = (evt) =>{
        setFormData({
            ...formData,  
            [evt.target.name] : evt.target.value,
            errorMsg:'',
            
        })

    };
    const handleSubmit = async (evt) =>{
        evt.preventDefault(); 
        console.log(formData);

        if( isEmpty(email) || isEmpty(password) ){
            setFormData({
                ...formData , errorMsg:'All fields are required'
            })
        }
        else if(!isEmail(email)){
            setFormData({
                ...formData , errorMsg:'invalid email'          
            })
        }
        
        
        else { 
             
            const admindata = {email,password}

            setFormData({...formData , loading:true});

            const response = await fetch("/signin/user",{
                method:'POST', 
                body:JSON.stringify(admindata),
                headers:{
                    "Content-Type":"application/json"
                }
            })
           
            const json = await response.json()



           if(!response.ok){
            setFormData({...formData , errorMsg:json.errorMessage,loading:false})

           }
           if(response.ok){
            setAuthentication( await json.token, await json.inst);
            if(isAusthenticated() && isAusthenticated().role===2){
                navigate("/individual/dashboard");
                window.location.reload()

            }

            setFormData({
                email:'',
                password:'', 
                loading:false, 
                errorMsg:'',   
                
    
        
            })
           }

        }


    }





const showLoginForm = () =>(

    <form className='signup-form' onSubmit={handleSubmit}  noValidate>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>


                    </span>
                </div>
                <input
                name = 'email'
                value = {email}
                className='form-control'
                placeholder='Email adress'
                type='email'
                onChange={handleChange}
                
                />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                name = 'password'
                value={password}
                className='form-control'
                placeholder='Create Password'
                type='password'
                onChange={handleChange}
                
                />
            </div>
            <div className='form-group'>
                <button type ='submit' className='btn btn-primary btn-block'>Signin</button>
            </div>
            <div className='row'>
            <p className='col-md-6 text-white'>Create Account ?<Link to ="../signup">Log in </Link>
            
            </p>
            <p className='col-md-6 text-white'> <Link to ="../signup">forgetpassword </Link>
            
            </p>
            </div>
    

</form>



)
        return(
            <div className='signin-container'>
            <div className='row px-3 vh-100  h-100 justify-content-center align-items-center'>
                <div className='col-md-5 mx-auto  align-items-center' >
                      {showLoginForm()}
                    {errorMsg && showErrorMsg(errorMsg)}
                     <div className='text-center'>{loading  && showloading()}</div> 
                                
                </div>
    
                
            </div>
                
                    </div>

            
        )
}

export default login ;