/** @jsxImportSource @emotion/react */

import {
  inputContainer,
  matchingButton,
  matchingLine,
  matchingLineCheck,
  title,
} from "../../utils/css/EmotionComponent";
import { chating1 } from "../assets";

const WaitItem = () => {
  return (
    <>
      <h1 css={title}>Hi! 김지민님 안녕하세요.</h1>
      <div css={inputContainer}>
        <img src={chating1} alt="채팅1" />
        <div css={matchingLine}>
          <div css={[matchingLine, matchingLineCheck]}></div>
        </div>
        <button css={matchingButton}>Matching</button>
      </div>
    </>
  );
};

export default WaitItem;
