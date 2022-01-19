import { useGlobalContext } from './context'
import { StyledLoginPage } from './styles/LoginPage.styled'
import { FaTimes } from 'react-icons/fa'

function LoginPage() {
  const { setIsLogin } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledLoginPage>
      <div className='hero'>
        <div className='blue'>
          <h2>Login/signup</h2>
        </div>
        <div className='container'>
          <form className='form'>
            <p>
              <label htmlFor='username'>Username:</label>
              <input className='input username' id='username' type='text' />
            </p>
            <p>
              <label htmlFor='password'>Password:</label>
              <input className='input password' id='password' type='password' />
            </p>
            <div className='forgot'>
              <a href='/'>Forgot Password?</a>
            </div>
            <hr />
            <button className='btn' onClick={handleSubmit}>
              Login
            </button>
            <hr />
            <div className='create'>
              <a href='/'>Create account</a>
            </div>
          </form>
          <FaTimes size='3rem' onClick={() => setIsLogin(false)} />
        </div>
      </div>
    </StyledLoginPage>
  )
}

export default LoginPage
