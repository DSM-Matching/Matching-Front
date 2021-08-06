/** @jsxImportSource @emotion/react */

import React from "react";

import { chatContainer } from "../../utils/css/ChatEmotion";
import { ChatHeader, ChatOutput, ChatInput } from "../index";

const Chatting = () => {
  return (
    <>
      <section css={chatContainer}>
        <ChatHeader />
        <ChatOutput />
        <ChatInput />
      </section>
    </>
  );
};

export default Chatting;
