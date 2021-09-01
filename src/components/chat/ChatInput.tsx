/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import {
  inputItem,
  inputWrapper,
  textInput,
} from "../../utils/css/ChatEmotion";
import { inputBottomItem } from "../../utils/css/EmotionComponent";
import { chatInputProps } from "../../utils/interface/chatTypes";
import { imageIcon, sendIcon } from "../assets";

const ChatInput = ({ socket }: chatInputProps) => {
  const [input, setInput] = useState<string>("");

  const onSubmit = () => {
    socket.send(input);
    console.log(input);
    setInput("");
  };

  return (
    <>
      <form css={inputWrapper}>
        <ul css={inputItem}>
          <li>
            <label htmlFor="input-file">
              <img src={imageIcon} alt="사진 첨부 아이콘" />
            </label>
            <input type="file" id="input-file" style={{ display: "none" }} />
          </li>
          <li css={textInput}>
            <input
              type="text"
              name="text"
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
              placeholder="전송하실 문장을 입력해주세요."
            />
          </li>
          <li>
            <img src={sendIcon} alt="전송 아이콘" onClick={onSubmit} />
          </li>
        </ul>
      </form>
    </>
  );
};

export default ChatInput;
