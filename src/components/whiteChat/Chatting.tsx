/** @jsxImportSource @emotion/react */

import React from "react";
import { chattingContainer } from "../../utils/css/WhiteChattingEmotion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatLeaveModal from "./ChatLeaveModal";
import ChatOutput from "./ChatOutput";

const Chatthing = () => {
  return (
    <>
      <div css={chattingContainer}>
        <ChatHeader />
        <ChatOutput />
        <ChatInput />
        <ChatLeaveModal />
      </div>
    </>
  );
};

export default Chatthing;
