/** @jsxImportSource @emotion/react */

import React from "react";
import { chattingContainer } from "../../utils/css/ChattingEmotion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";

const Chatthing = () => {
  
  return(
    <>
      <div css={chattingContainer}>
        <ChatHeader/>
        <ChatOutput/>
        <ChatInput/>
      </div>
    </>
  )
}

export default Chatthing;