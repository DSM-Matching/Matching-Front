/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { chattingContainer } from "../../utils/css/WhiteChattingEmotion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatLeaveModal from "./ChatLeaveModal";
import ChatOutput from "./ChatOutput";

const Chatthing = () => {
  const [leaveModal, setLeaveModal] = useState<boolean>(false);

  return (
    <>
      <div css={chattingContainer}>
        <ChatHeader setLeaveModal={setLeaveModal} />
        <ChatOutput />
        <ChatInput />
        {leaveModal && <ChatLeaveModal setLeaveModal={setLeaveModal} />}
      </div>
    </>
  );
};

export default Chatthing;
