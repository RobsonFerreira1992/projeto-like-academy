import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .box-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
