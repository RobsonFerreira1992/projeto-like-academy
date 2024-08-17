import { StaticImageData } from 'next/image'
import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import { Close } from '@styled-icons/material-outlined'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import SlickSlider from 'react-slick'

import { Image } from '@styled-icons/bootstrap/Image'
const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        draggable: true
      }
    }
  ]
}

const Gallery = ({ items, ambienteId }) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickImage = (index) => {
    const imagePosition = `imagem 0${index + 1}`

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'click_image_ai',
      image_position: imagePosition,
      ambiente_id: ambienteId
    })
  }

  return (
    <>
      <S.Wrapper>
        <S.ContentGallery>
          {items &&
            items.map((item, index) => (
              <S.ContentIa
                className="m-1"
                key={index}
                onClick={() => {
                  setIsOpen(true)
                  slider.current!.slickGoTo(index, true)
                  handleClickImage(index)
                }}
              >
                <div className="efeito-hover">
                  <Image size={48} color="#FFFFFF" />
                </div>
                <img
                  src={item}
                  width={200}
                  height={200}
                  alt={`imagem gerada pela IA ${index} `}
                />
              </S.ContentIa>
            ))}
        </S.ContentGallery>
      </S.Wrapper>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.ContentSlider>
          {items && items !== undefined && (
            <Slider ref={slider} settings={modalSettings}>
              {items.map((item, index) => (
                <Fragment key={index}>
                  {item && (
                    <img
                      className="image"
                      src={item}
                      alt={`imagem gerada pela IA ${index} `}
                    />
                  )}
                </Fragment>
              ))}
            </Slider>
          )}
        </S.ContentSlider>
      </S.Modal>
    </>
  )
}

export default Gallery
