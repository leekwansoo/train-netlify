import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  

  const loginHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/login"
    axios.post(url, {id:id, pw:pw}).then((response) => {
      if(response?.status === 200)
      navigate('/main')
      console.log(response)
    })
    .catch(err=> console.log(err))
  }
 

  return (
    <>    
      
      <h2>Sign In</h2>
  
    <div className="container mt-3">
        <form onSubmit= {loginHandler} >
          <div>
              <label>username</label>
              <input type="text"  id="username" value = {id} onChange = { (e) => {setId (e.target.value)}} />
          </div>
          <br />
          <label>password</label>
              <input type="text"  id ="password" value = {pw} onChange = { (e) => {setPw (e.target.value)}} />
          <button className="btn btn-danger" >Login</button>
        </form>
      </div>
  
    </>
  )
  }
export default Login
