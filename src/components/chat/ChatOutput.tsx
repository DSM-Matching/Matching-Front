/** @jsxImportSource @emotion/react */

import React from "react";
import {
  chatOutputWrapper,
  chatItem,
  chatText,
} from "../../utils/css/ChatEmotion";

const ChatOutput = ({ nickname }: any) => {
  return (
    <div css={chatOutputWrapper}>
      <div css={chatItem}>
        <span>{nickname}</span>
        <div css={chatText}>
          <p>오후</p>
          <div className="text">
            안녕하세요 저는 강은빈입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatOutput;
