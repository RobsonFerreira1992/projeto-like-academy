import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrappers = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .boxSliders {
    ${media.lessThan('medium')`
    width: 100%;
  `}
  }
`
export const ContentBox = styled.div`
  max-width: 500px;
`

export const BoxActions = styled.div`
  ${({ theme }) => css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: none;
      background: transparent;
      border-radius: 50px;
      border: 1px solid ${theme.colors.primary};
      padding: ${theme.spacings.xxsmall};
      margin: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
    }
    #like {
      fill: ${theme.colors.white};
      stroke: ${theme.colors.primary};
      transition: all 0.5s;
      &.active {
        animation: like 0.5s;
        fill: ${theme.colors.primary};
        stroke: none;
      }
    }
    #deslike {
      fill: ${theme.colors.white};
      stroke: ${theme.colors.primary};
      transition: all 0.5s;
      &.active {
        animation: like 0.5s;
        fill: ${theme.colors.primary};
        stroke: none;
      }
    }
    @-webkit-keyframes like {
      0% {
        transform: scale(1);
      }
      90% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1.1);
      }
    }
  `}
`

export const BoxIcon = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const BoxButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primary};
    }
  `}
`
