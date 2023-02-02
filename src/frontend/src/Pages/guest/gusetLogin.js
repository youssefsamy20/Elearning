import React ,{useState }from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

import {showErrorMsg } from "../../Helpers/message"; 
import {showloading} from "../../Helpers/loading"; 
import {setAuthentication , isAusthenticated} from "../../Helpers/auth"

const gusetLogin = ()=>{
    const [gender, setGender] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Send the selected gender to the backend using an AJAX request
    fetch('/guest/createguest', {
      method: 'POST',
      body: JSON.stringify({ gender }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        window.location.href = '../guest/dashboard';
      });
  }
return (  
    <form onSubmit={handleSubmit}>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {gender || 'Select gender'}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={() => setGender('male')}>Male</a>
          <a className="dropdown-item" href="#" onClick={() => setGender('female')}>Female</a>
        </div>
      </div>
      <br />
      <br />
      <button type="submit" className="btn btn-primary">  
        Login
      </button>
    </form>

 )
}
export default gusetLogin ;