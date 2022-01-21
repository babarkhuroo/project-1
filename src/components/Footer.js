import { StyledFooter } from './styles/Footer.styled'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <StyledFooter>
      <h2>تواصل معنا</h2>
      <div className='underline'></div>
      <section>
        <p className='map'>طريق الملك فهد، العليا، الرياض 12313</p>
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
      </section>
      <h5>&copy; حقوق النشر</h5>
    </StyledFooter>
  )
}

export default Footer
