import { HiOutlineLogin } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Button } from './Globals/Globals'
import { StyledHeader } from './styles/Header.styled'
import { useGlobalContext } from './context'

function Header() {
  const { setIsLogin } = useGlobalContext()

  return (
    <StyledHeader>
      <nav>
        <Button onClick={() => setIsLogin(true)}>
          <HiOutlineLogin size='2.5rem' />
        </Button>
        <ul>
          <li>
            <a href='/' className='fb'>
              <FaFacebook size='2.5rem' />
            </a>
          </li>
          <li>
            <a href='/' className='twttr'>
              <FaTwitter size='2.5rem' />
            </a>
          </li>
          <li>
            <a href='/' className='ig'>
              <FaInstagram size='2.5rem' />
            </a>
          </li>
        </ul>
      </nav>
      <div className='marquee'>
        <p>محمد بن سلمان</p>
      </div>
    </StyledHeader>
  )
}

export default Header
