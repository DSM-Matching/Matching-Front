
/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router-dom';
import { matchContainer, matchLoadingBar, matchButton } from '../../utils/css/WhiteEmotionComponent';
import { matchingImg } from '../assets';

const MatchWait = ({nickname} : any) => {
  const history = useHistory();

  return(
    <div css={matchContainer}>
      <h1>Hi {nickname}님!</h1>
      <img src={matchingImg} alt="매칭이미지"/>
      <div css={[matchLoadingBar]}/>
      <button css={matchButton} onClick={() => history.push(`/chatting/${nickname}`)}>Matching</button>
    </div>
  )
}

export default MatchWait;