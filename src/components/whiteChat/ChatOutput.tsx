/** @jsxImportSource @emotion/react */

import React from "react";
import { chatOutput } from "../../utils/css/WhiteChattingEmotion";

const ChatOutput = ({ sendChatList, receptionChatList }: any) => {
  return (
    <>
      <div css={chatOutput}>
        {sendChatList.map((value: string, index: number) => {
          return <p>{value}</p>;
        })}
        {receptionChatList.map((value: string, index: number) => {
          return <p>{value}</p>;
        })}
      </div>
    </>
  );
};

export default ChatOutput;
