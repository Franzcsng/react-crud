import './SignUp.scss'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import Input from '../../components/common/input/Input.js'
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

                <Input
                    label='Account Name'
                    name='name'
                    type='text'
                    placeholder='Enter account name..'
                    setData={(e) => setValues({...values, account_name: e.target.value})}
                />

                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter your email address..'
                    setData={(e) => setValues({...values, account_email: e.target.value})}
                />

                <Input
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter your password..'
                    setData={(e) => setValues({...values, account_password: e.target.value})}
                />

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