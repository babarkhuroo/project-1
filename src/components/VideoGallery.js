import { StyledVideo } from './styles/VideoGallery.styled'
import video1 from '../assets/pexels_2.mp4'
import video2 from '../assets/pexels.mp4'
import video3 from '../assets/pexels_3.mp4'
import video4 from '../assets/pexels_4.mp4'
import video5 from '../assets/pexels_5.mp4'

function VideoGallery() {
  const handleMouseOver = (e) => {
    e.target.play()
  }
  const handleMouseLeave = (e) => {
    e.target.pause()
    e.target.currentTime = 0
  }

  return (
    <StyledVideo>
      <div className='video-container'>
        <div className='videos grid-1'>
          <video
            muted
            src={video1}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            muted
            src={video2}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            muted
            src={video3}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            muted
            src={video4}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            muted
            src={video5}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </StyledVideo>
  )
}

export default VideoGallery
