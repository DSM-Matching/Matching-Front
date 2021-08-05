/** @jsxImportSource @emotion/react */

import React from "react";

import { chatContainer } from "../../utils/css/ChatEmotion";
import { ChatHeader, ChatOutput } from "../index";

const Chatting = () => {
  return (
    <>
      <section css={chatContainer}>
        <ChatHeader />
        <ChatOutput />
      </section>
    </>
  );
};

export default Chatting;
