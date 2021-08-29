/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import {
  inputContainer,
  inputTopItem,
  joinButton,
} from "../../utils/css/WhiteEmotionComponent";

interface NicknameProps {
  setChangeComponent?: any;
  setNickname?: any;
  nickname: string;
}

const NicknameInput = ({
  setChangeComponent,
  setNickname,
  nickname,
}: NicknameProps) => {

  const onchangeNickname = (e: any) => {
    setNickname(e.target.value);
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
          boxShadow: nickname.length !== 0 ? "0px 0px 29px #F897DC" : "none",
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
