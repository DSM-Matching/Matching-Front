/** @jsxImportSource @emotion/react */

import {
  inputContainer,
  inputTopItem,
  joinButton,
  nicknameinput
} from "../../utils/css/EmotionComponent";

const NicknameInput = () => {
  return (
    <div css={inputContainer}>
      <div css={nicknameinput}>
        <div css={inputTopItem}>
          <span>Please enter a nickname.</span>
          <input type="text" placeholder="your nickname"/>
        </div>
        <button css={joinButton}>join</button>
      </div>
    </div>
  );
};

export default NicknameInput;
