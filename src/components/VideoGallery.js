import { StyledVideo } from './styles/VideoGallery.styled'
import video from '../assets/pexels.mp4'

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
        <div className='videos'>
          <video
            height='200'
            src={video}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            height='200'
            src={video}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            height='200'
            src={video}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            height='200'
            src={video}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='videos'>
          <video
            height='200'
            src={video}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </StyledVideo>
  )
}

export default VideoGallery
