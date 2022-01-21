import { useGlobalContext } from './context'
import { StyledLoginPage } from './styles/LoginPage.styled'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLogin } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClose = (e) => {
    if (e.target.id === 'login') {
      setIsLogin(false)
    }
  }

  const handleLabel = (e) => {
    e.target.labels[0].classList.add('click')
  }

  const handleLoss = (e) => {
    if (!e.target.value) {
      e.target.labels[0].classList.remove('click')
    }
  }

  return (
    <StyledLoginPage onClick={handleClose} id='login'>
      <div className='hero'>
        <div className='blue'>
          <h2>سجل الدخول</h2>
        </div>
        <div className='container'>
          <h2>سجل الدخول</h2>
          <form className='form'>
            <p>
              <label htmlFor='username'>ادخل رقم المستخدم</label>
              <input
                className='input username'
                id='username'
                type='text'
                autoFocus
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleLabel}
                onBlur={handleLoss}
              />
            </p>
            <p>
              <label htmlFor='password'>ادخل كلمة السر</label>
              <input
                className='input password'
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleLabel}
                onBlur={handleLoss}
              />
            </p>
            <div className='forgot'>
              <a href='/'>نسيت كلمة السر</a>
            </div>
            <hr />
            <button className='btn' onClick={handleSubmit}>
              سجل الدخول
            </button>
            <hr />
            <div className='create'>
              <a href='/'>عمل حساب</a>
            </div>
          </form>
        </div>
        <FaTimes size='3rem' onClick={() => setIsLogin(false)} />
      </div>
    </StyledLoginPage>
  )
}

export default LoginPage
