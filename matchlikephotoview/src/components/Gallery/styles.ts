import styled, { css } from 'styled-components'

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentGallery = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 430px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  `}
`
export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};
    ${isOpen && modalModifiers.open()};
    ${!isOpen && modalModifiers.close()};
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`
export const ContentSlider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: min(120rem, 100%);
    max-height: 80rem;
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }
  `}
`
export const Msg = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const ContentIa = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  width: 200px;
  height: 200px;
  cursor: pointer;
  .efeito-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
    z-index: 1;
    cursor: pointer;
  }

  &:hover {
    .efeito-hover {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Legend = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.containerGray};
    width: 42px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1%;
    left: 4%;
    span {
      color: ${theme.colors.primary};
      font-weight: 300;
      font-size: 16px;
    }
  `}
`
