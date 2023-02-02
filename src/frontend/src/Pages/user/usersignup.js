import React ,{useState }from 'react';
import { Link } from 'react-router-dom';
import "../../css/signup.css";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {showErrorMsg , showSuccessMsg} from "../../Helpers/message"; 
import {showloading} from "../../Helpers/loading"; 




const signup =() =>{
    const [genderr, setGender] = useState('');


    const [agreement , setAgreement] = useState(false)
    const[formData ,  setFormData]=useState({

        username:'',
        firstname:'',
        lastname:'',
        gender:'',
        email:'',
        password:'',
        password2:'',
        successMsg:false,
        errorMsg:false, 
        loading:false


    })
        const {username ,firstname,lastname, email , password , password2 , successMsg , errorMsg,loading} = formData;

    const handleChange = (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            errorMsg:'',
            successMsg:'',
        })

    };
    const handleSubmit = async (evt) =>{
        evt.preventDefault(); 
        console.log(formData);

        if(isEmpty(username) || isEmpty(firstname) || isEmpty(lastname)  || isEmpty(genderr)|| isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData , errorMsg:'All fields are required'
            })
        }
        else if(!isEmail(email)){
            setFormData({
                ...formData , errorMsg:'invalid email'
            })
        }
        else if(!equals(password,password2)){
            setFormData({
                ...formData , errorMsg:'passwords do not match'
            })
        }
        else {
           
            const admindata = {username ,firstname,lastname,genderr,email,password}

            setFormData({...formData , loading:true});

            const response = await fetch('/signup/user',{
                method:'POST', 
                body:JSON.stringify(admindata),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()
           if(!response.ok){
            setFormData({...formData , errorMsg:json.errorMessage , loading:false})

           }
           if(response.ok){
            setFormData({...formData , successMsg:json.successMessage , loading:false})
            setFormData({
                username:'',
                firstname:'',
                lastname:'',
                gender:'',
                email:'',
                password:'',
                password2:'',
                loading:false, 
                errorMsg:'',
                
})
           }

        }


    }

    const showSignupForm =() =>(

        <form className='signup-form' onSubmit={handleSubmit}  noValidate>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = 'username'
                  value={username}
                  className='form-control'
                  placeholder='Name'
                  type='text'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = 'firstname'
                  value={firstname}
                  className='form-control'
                  placeholder='First Name'
                  type='text'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = 'lastname'
                  value={lastname}
                  className='form-control'
                  placeholder='Last Name'
                  type='text'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {genderr || 'Select gender'}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item"  onClick={() => setGender('Male')}>Male</a>
          <a className="dropdown-item"  onClick={() => setGender('Female')}>Female</a>
        </div>
        </div>
        <br/>
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
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                  name = 'password2'
                  value = {password2}
                  className='form-control'
                  placeholder='Confirm password'
                  type='password'
                  onChange={handleChange}
                  
                  />
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox"  id="flexCheckDefault" name="agreement" onChange={handelCheckChange}/>
                <label class="form-check-label " for="flexCheckDefault">
                    i have read <Link to="#policy" data-toggle="modal" data-target="#policy">terms and policy of this system and accept it</Link>
                           
                </label>
            </div>         
            <div className='form-group py-2'>
             
                <button type ='submit' className='btn btn-primary btn-block' disabled={!agreement}>Signup</button>
             </div>

            <p className='text-center text-white'>Have an account?<Link to ="../signin">Log in </Link>
            
            </p>
            

        </form>

        

)

const handelCheckChange=(evt)=>{
    setAgreement(evt.target.checked)


}
const showContract=()=>(
    <div className="modal fade" id="policy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Terms and policy</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    this system has a lot of courses paid and unpaid courses and allow you to access and know a lot of data for each course before register for it. however, if the course is a paid one and you enrolled to the course and need to refund you are able to do that but before completing more than 50% of the course progress as any refund request after that will be rejected.<br></br>
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handelAcceptance}>Accept</button>
                </div>
                </div>
            </div>
            </div>  

    
)
const handelAcceptance= ()=>{
    alert("you have accepted the terms and polices")

}
return( 
    <div className='signup-container'>
        <div className='row px-3 vh-100  h-100 justify-content-center align-items-center'>
            <div className='col-md-5 mx-auto  align-self-center' >
                {showSignupForm()}
                {showContract()}
                {successMsg && showSuccessMsg(successMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                 <div className='text-center'>{loading && showloading()}</div> 
                            
            </div>
                 </div>
                    </div>

)}

export default signup;