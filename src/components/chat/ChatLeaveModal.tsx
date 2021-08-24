/** @jsxImportSource @emotion/react */

import React from "react";
import { chatLeaveContainer, flexcolum, modalBackground } from "../../utils/css/ModalEmotion";

const ChatLeaveModal = () => {
  return(
    <>
      <div css={[modalBackground, flexcolum]}>
        <div css={chatLeaveContainer}>
          <span>김지민님</span>
          <span>채팅 나가기를 하면 내용이 사라집니다.</span>
        </div>
      </div>
    </>
  );
}

export default ChatLeaveModal;