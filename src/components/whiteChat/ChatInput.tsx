/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import {
  chatInput,
  chatInputContainer,
  inputItem,
} from "../../utils/css/WhiteChattingEmotion";
import { whiteChatSendIcon, whitePhotoUploadIcon } from "../assets";

const ChatInput = ({ ws, setSendChatList, sendChatList }: any) => {
  const [chatState, setChatState] = useState<string>("");

  const sendChat = () => {
    ws.send(chatState);
    setSendChatList([...sendChatList, chatState]);
    setChatState("");
  };

  return (
    <>
      <div css={chatInputContainer}>
        <ul css={inputItem}>
          <li>
            <img src={whitePhotoUploadIcon} alt="이미지 업로드 아이콘" />
          </li>
          <li css={chatInput}>
              <input
                onChange={(e) => {
                  setChatState(e.target.value);
                }}
                value={chatState}
              />
          </li>
          <li>
            <img
              src={whiteChatSendIcon}
              alt="채팅 전송 아이콘"
              onClick={sendChat}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChatInput;
