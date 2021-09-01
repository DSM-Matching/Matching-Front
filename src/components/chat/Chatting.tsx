/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { chatContainer } from "../../utils/css/ChatEmotion";
import { ChatHeader, ChatOutput, ChatInput, ChatLeave } from "../index";

const Chatting = ({ match }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const nickname = match.params.nickname;

  const socket = new WebSocket(`ws://172.20.10.6:8000/ws/${nickname}`);

  socket.onmessage = function (event) {
    console.log(event.data.nickname);
  };

  return (
    <>
      <section css={chatContainer}>
        <ChatLeave
          nickname={nickname}
          socket={socket}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <ChatHeader setModalOpen={setModalOpen} />
        <ChatOutput nickname={nickname} />
        <ChatInput socket={socket} />
      </section>
    </>
  );
};

export default Chatting;
