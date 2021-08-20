
/** @jsxImportSource @emotion/react */

import { matchContainer, matchLoadingBar, matchLoadingCheckBar } from '../../utils/css/EmotionComponent';
import { matchingImg } from '../assets';

const MatchWait = () => {
  return(
    <div css={matchContainer}>
      <h1>Hi 김지민님!</h1>
      <img src={matchingImg} alt="매칭이미지"/>
      <div css={[matchLoadingBar, matchLoadingCheckBar]}/>
    </div>
  )
}

export default MatchWait;