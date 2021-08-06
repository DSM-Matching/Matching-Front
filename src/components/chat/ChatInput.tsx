/** @jsxImportSource @emotion/react */

import React from "react";
import { useState } from "react";
import { inputItem, inputWrapper } from "../../utils/css/ChatEmotion";
import { imageIcon, sendIcon } from "../assets";

const ChatInput = () => {
  return (
    <>
      <div css={inputWrapper}>
        <ul css={inputItem}>
          <li>
            <img src={imageIcon} alt="사진 첨부 아이콘" />
          </li>
          <li>
            <input type="text" placeholder="전송하실 문장을 입력해주세요." />
          </li>
          <li>
            <img src={sendIcon} alt="전송 아이콘" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChatInput;
