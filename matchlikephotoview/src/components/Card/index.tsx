import * as S from './styles'
import { Dislike } from '@styled-icons/boxicons-regular/Dislike'
import { Like } from '@styled-icons/boxicons-regular/Like'

const Card = ({ url, likes, dislikes, id }) => {
  return (
    <S.Wrapper id={id}>
      <div className="box-image">
        <img src={url} alt="imagem gerada" />
      </div>
      <div className="box">
        <div>
          <Like size={26} color="green" />
          <p>{likes}</p>
        </div>
        <div>
          <Dislike size={26} color="red" />
          <p>{dislikes}</p>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Card
