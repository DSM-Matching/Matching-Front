/** @jsxImportSource @emotion/react */

import React from "react";
import {
  chatInput,
  chatInputContainer,
  inputItem,
} from "../../utils/css/WhiteChattingEmotion";
import { whiteChatSendIcon, whitePhotoUploadIcon } from "../assets";

const ChatInput = () => {
  return (
    <>
      <div css={chatInputContainer}>
        <ul css={inputItem}>
          <li>
            <img src={whitePhotoUploadIcon} alt="이미지 업로드 아이콘" />
          </li>
          <li css={chatInput}>
            <input />
          </li>
          <li>
            <img src={whiteChatSendIcon} alt="채팅 전송 아이콘" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChatInput;
