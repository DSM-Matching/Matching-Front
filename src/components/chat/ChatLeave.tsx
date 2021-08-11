/** @jsxImportSource @emotion/react */

import React from "react";
import {
  ModalBackground,
  ModalItem,
  flexColumn,
} from "../../utils/css/ModalEmotion";

const ChatLeave = () => {
  return (
    <>
      <section css={[ModalBackground, flexColumn]}>
        <div css={[flexColumn, ModalItem]}>
          <div css={[flexColumn]}>
            <strong>김지민님</strong>
            <span>채팅 나가기를 하면 내용이 사라집니다.</span>
          </div>
          <div>
            <button>유지하기</button>
            <button>채팅 나가기</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatLeave;
