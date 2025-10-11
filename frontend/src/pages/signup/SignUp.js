import './SignUp.scss'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


const SignUp = () => {

    const [values, setValues] = useState({
        account_name:"",
        account_email:"",
        account_password:"",
    })

   
    const handleSignUp = (e, values) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/user`, values)
        .then((res) => {
            console.log(`Successfully added the following: ${res}`)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='signup-main'>
                 
            <form className='signup-form' onSubmit={(e) => {handleSignUp(e, values)}}>

                <h2>CREATE YOUR STOCKAGE ACCOUNT</h2>

                <label for='name'>Account Name</label> 
                <input name='name' id='name' placeholder='Enter account name..' 
                onChange={(e) => {setValues({...values, account_name: e.target.value})}}></input>

                <label for='email'>Email</label> 
                <input type='email' name='email' id='email' placeholder='Enter your email address..'
                onChange={(e) => {setValues({...values, account_email: e.target.value})}}></input>

                <label for='password'>Password</label> 
                <input type='password'name='password' id='password' placeholder='Enter your password..'
                onChange={(e) => {setValues({...values, account_password: e.target.value})}}></input>

                <label for='confirmpassword'>Confirm Password</label> 
                <input type='password' name='confirmpassword' id='confirmpassword' placeholder='Confirm password..'
                ></input>

                <hr></hr>

                <button>SIGN UP</button>
                <p>Already have an account? <br></br>Log in
                <NavLink to='/login'>here</NavLink>
                </p>
            </form>
    
    
        </div>
    )
}

export default SignUp