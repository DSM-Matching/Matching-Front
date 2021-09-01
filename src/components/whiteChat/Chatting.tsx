/** @jsxImportSource @emotion/react */

import { WSAEACCES } from "constants";
import React, { useEffect, useState } from "react";
import { chattingContainer } from "../../utils/css/WhiteChattingEmotion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatLeaveModal from "./ChatLeaveModal";
import ChatOutput from "./ChatOutput";

const Chatthing = ({ match }: any) => {
  const [leaveModal, setLeaveModal] = useState<boolean>(false);
  const [sendChatList, setSendChatList] = useState<string[]>([]);
  const [receptionChatList, setReceptionChatList] = useState<string[]>([]);
  const [ws, setWs] = useState<any>();

  useEffect(() => {
    console.log("connect");
    setWs(new WebSocket(`ws://172.20.10.6:8000/ws/${match.params.nickname}`));
  }, [match.params.nickname]);

  ws.onmessage = (e: any) => {
    console.log(e);
    setReceptionChatList([...receptionChatList, e.data]);
  };

  return (
    <>
      <div css={chattingContainer}>
        <ChatHeader setLeaveModal={setLeaveModal} />
        <ChatOutput
          sendChatList={sendChatList}
          receptionChatList={receptionChatList}
        />
        <ChatInput
          ws={ws}
          setSendChatList={setSendChatList}
          sendChatList={sendChatList}
        />
        {leaveModal && <ChatLeaveModal setLeaveModal={setLeaveModal} ws={ws} />}
      </div>
    </>
  );
};

export default Chatthing;
