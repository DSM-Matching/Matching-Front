/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import {
  inputContainer,
  inputTopItem,
  joinButton,
} from "../../utils/css/EmotionComponent";

interface NicknameProps {
  setChangeComponent?: any;
}

const NicknameInput = ({ setChangeComponent }: NicknameProps) => {
  const [inputState, setInputState] = useState<boolean>(false);

  const onchangeNickname = (e: any) => {
    e.target.value.length === 0 ? setInputState(false) : setInputState(true);
  };

  return (
    <div css={inputContainer}>
      <div css={inputTopItem}>
        <span>Please enter a nickname.</span>
        <input
          type="text"
          placeholder="your nickname"
          onChange={onchangeNickname}
        />
      </div>
      <button
        css={joinButton}
        style={{
          boxShadow: inputState ? "0px 0px 29px #F897DC" : "none",
        }}
        onClick={() => {
          setChangeComponent(true);
        }}
      >
        join
      </button>
    </div>
  );
};

export default NicknameInput;
