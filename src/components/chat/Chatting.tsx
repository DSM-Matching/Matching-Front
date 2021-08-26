/** @jsxImportSource @emotion/react */

import React from "react";

import { chatContainer } from "../../utils/css/ChatEmotion";
import { ChatHeader, ChatOutput, ChatInput, ChatLeave } from "../index";

const Chatting = () => {
  return (
    <>
      <section css={chatContainer}>
        <ChatLeave />
        <ChatHeader />
        <ChatOutput />
        <ChatInput />
      </section>
    </>
  );
};

export default Chatting;
