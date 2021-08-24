/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from "react";
import {
  ModalBackground,
  ModalItem,
  flexColumn,
  buttonContainer,
} from "../../utils/css/ModalEmotion";
import { modalOpenType } from "../../utils/interface/chatTypes";

const ChatLeave = ({ modalOpen, setModalOpen }: modalOpenType) => {
  //const [modal, setModal] = useState<boolean>(false);
  const test = useRef<boolean>(false);

  const click = () => {
    console.log(test.current);
  };

  return (
    <>
      <section
        style={{ display: modalOpen ? "flex" : "none" }}
        css={[ModalBackground, flexColumn]}
        onClick={click}
      >
        <div css={[flexColumn, ModalItem]}>
          <div css={[flexColumn]}>
            <strong>김지민님</strong>
            <span>채팅 나가기를 하면 내용이 사라집니다.</span>
          </div>
          <div css={buttonContainer}>
            <button onClick={() => setModalOpen(false)}>유지하기</button>
            <button>채팅 나가기</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatLeave;
