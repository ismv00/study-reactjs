
import './login.css';

export default function Login() {
    return (
        <div className='container'>
        <div className='area-text'>
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form className='area-input'>
            <input type="text" placeholder='Enter your e-mail'/>
            <input type="text" placeholder='Enter your password'/>

            <button>Sign In</button>
            
        </form>
      </div>
    )
}