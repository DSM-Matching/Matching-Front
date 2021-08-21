/** @jsxImportSource @emotion/react */

import {
  inputContainer,
  inputTopItem,
  nicknameinput,
} from "../../utils/css/EmotionComponent";

const NicknameInput = () => {
  return (
    <div css={inputContainer}>
      <div css={nicknameinput}>
        <div css={inputTopItem}>
          <span>Please enter a nickname.</span>
          <input type="text" placeholder="your nickname"/>
        </div>
      </div>
    </div>
  );
};

export default NicknameInput;
