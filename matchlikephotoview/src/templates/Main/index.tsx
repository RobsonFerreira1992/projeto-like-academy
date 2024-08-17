import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import { Fragment, useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Heart } from '@styled-icons/evaicons-solid/Heart'
import {
  dislikeImages,
  likeImages,
  obterHistory,
  obterImages
} from 'service/requests'
import Card from 'components/Card'

const commonSettings: SliderSettings = {
  infinite: true,
  arrows: false
}

const Main = () => {
  const slider = useRef<SlickSlider | null>(null)
  const [items, setItems] = useState<any[]>([])
  const [itemsHistory, setItemsHistory] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const settings = {
    ...commonSettings,
    slidesToShow: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex)
    },
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 1,
          draggable: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          draggable: true
        }
      },
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
  async function getImages() {
    try {
      const response = await obterImages()
      if (response) {
        setItems(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function GetDisLike() {
    try {
      const currentImage = items[currentIndex]

      if (currentImage) {
        const response = await dislikeImages(currentImage.id)
        if (response) {
          animetionDeslike()
          slider.current?.slickNext()
          getHistorico()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function GetLike() {
    try {
      const currentImage = items[currentIndex]

      if (currentImage) {
        await likeImages(currentImage.id)
        animetionLike()
        slider.current?.slickNext()
        getHistorico()
      }
    } catch (e) {
      console.log(e)
    }
  }

  function animetionDeslike() {
    const like = document.querySelector('#deslike')
    like?.classList.add('active')
    setTimeout(() => {
      like?.classList.remove('active')
    }, 300)
  }

  function animetionLike() {
    const like = document.querySelector('#like')
    like?.classList.add('active')
    setTimeout(() => {
      like?.classList.remove('active')
    }, 300)
  }

  async function getHistorico() {
    try {
      const response = await obterHistory()
      if (response) {
        setItemsHistory(response.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <S.Wrappers>
            <Fragment>
              {items.length > 0 && (
                <div className="boxSliders">
                  <S.ContentBox>
                    <Slider ref={slider} settings={settings}>
                      {items.map((item, index) => (
                        <img
                          key={`${index}+${item.id}`}
                          src={item.url}
                          id={item.id.toString()} // Certifique-se de que o ID é uma string
                        />
                      ))}
                    </Slider>
                  </S.ContentBox>
                  <S.BoxActions>
                    <S.BoxButton>
                      <button onClick={GetDisLike}>
                        <CloseOutline size={26} id="deslike" />
                      </button>
                      <span>Não gosto</span>
                    </S.BoxButton>

                    <S.BoxButton>
                      <button onClick={GetLike}>
                        <Heart id="like" size={26} />
                      </button>
                      <span>Gosto</span>
                    </S.BoxButton>
                  </S.BoxActions>
                </div>
              )}
            </Fragment>
          </S.Wrappers>
        </Col>
        <Col lg={6}>
          <Row className="mt-5">
            {itemsHistory &&
              itemsHistory.map((item, index) => (
                <Col key={index} lg={6}>
                  <Card
                    id={item.id}
                    url={item.url}
                    dislikes={item.dislikes}
                    likes={item.likes}
                  />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
