import { useState, useEffect } from 'react'
import { images } from '../Images'
import { StyledSlider } from './styles/Slider.styled'

function Slider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let slideFunc = setInterval(() => {
      setIndex(index + 1)
    }, 7000)
    if (index < 0) {
      setIndex(images.length - 1)
    }
    if (index > images.length - 1) {
      setIndex(0)
    }
    return () => clearInterval(slideFunc)
  }, [index])

  return (
    <StyledSlider>
      <div className='img-container'>
        {images.map((img, idx) => {
          const { id, url } = img
          let position = 'next'
          if (idx === index) {
            position = 'active'
          }
          if (idx === index - 1 || (index === 0 && idx === images.length - 1)) {
            position = 'prev'
          }
          return (
            <img
              key={idx}
              className={`img ${position}`}
              src={url}
              alt={`img-${id}`}
            />
          )
        })}
      </div>
      <div className='indicator-container'>
        {images.map((img, idx) => {
          let active = null
          if (idx === index) {
            active = 'active'
          } else {
            active = null
          }
          return (
            <div
              key={idx}
              className={`indicator ${active}`}
              onClick={() => setIndex(idx)}
            ></div>
          )
        })}
      </div>
    </StyledSlider>
  )
}

export default Slider
