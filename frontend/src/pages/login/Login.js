import './Login.scss'
import {NavLink} from 'react-router-dom'

const UserLogin = () => {
    return (
        <diV className='login-main'>
            <form className='login-form'>

                <h2>LOGIN TO YOUT STOCKAGE ACCOUNT</h2>

                <label for='email'>Email</label> 
                <input name='email' id='email' placeholder='Enter your email address..'></input>

                <label for='password'>Password</label> 
                <input name='password' id='password' placeholder='Enter your password..'></input>

                <hr></hr>

                <button>LOGIN</button>
                <p>Don't have an account yet? <br></br>Create an account 
                <NavLink to='/signup'>here</NavLink>
                </p>
            </form>
        </diV>
    )
}

export default UserLogin