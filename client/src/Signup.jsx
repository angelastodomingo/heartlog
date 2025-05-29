// Signup.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import './form.css'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then (result => {console.log(result)
         navigate('/login')   
    
        })

        .catch(err => console.log(err))
    }



  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" 
        placeholder="Enter your name" required 
        onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input type="email" 
        placeholder="Enter your email" required 
        onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input type="password" 
        placeholder="Enter your password" required 
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="primary-btn">Register</button>
        <a href="/login" className="secondary-btn">Login</a>
      </form>
    </div>
  );
}

export default Signup;
