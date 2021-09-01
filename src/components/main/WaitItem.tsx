/** @jsxImportSource @emotion/react */

import { useHistory } from "react-router-dom";
import {
  inputContainer,
  matchingButton,
  matchingLine,
  matchingLineCheck,
  title,
} from "../../utils/css/EmotionComponent";
import { chating1 } from "../assets";

const WaitItem = ({ nickname }: any) => {
  const history = useHistory();

  return (
    <>
      <h1 css={title}>Hi! {nickname}님 안녕하세요.</h1>
      <div css={inputContainer}>
        <img src={chating1} alt="채팅1" />
        <div css={matchingLine}>
          <div css={[matchingLine, matchingLineCheck]}></div>
        </div>
        <button
          css={matchingButton}
          onClick={() => history.push(`/dark/chatting/${nickname}`)}
        >
          Matching
        </button>
      </div>
    </>
  );
};

export default WaitItem;
