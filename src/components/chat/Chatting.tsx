/** @jsxImportSource @emotion/react */

import React, { useState } from "react";

import { chatContainer } from "../../utils/css/ChatEmotion";
import { ChatHeader, ChatOutput, ChatInput, ChatLeave } from "../index";

const Chatting = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <section css={chatContainer}>
        <ChatLeave modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <ChatHeader setModalOpen={setModalOpen} />
        <ChatOutput />
        <ChatInput />
      </section>
    </>
  );
};

export default Chatting;
