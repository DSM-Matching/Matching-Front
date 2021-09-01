/** @jsxImportSource @emotion/react */

import { useHistory } from "react-router-dom";
import {
  ModalBackground,
  ModalItem,
  flexColumn,
  buttonContainer,
} from "../../utils/css/ModalEmotion";
import { modalOpenType } from "../../utils/interface/chatTypes";

const ChatLeave = ({
  modalOpen,
  setModalOpen,
  socket,
  nickname,
}: modalOpenType) => {
  const history = useHistory();

  return (
    <>
      <section
        style={{ display: modalOpen ? "flex" : "none" }}
        css={[ModalBackground, flexColumn]}
      >
        <div css={[flexColumn, ModalItem]}>
          <div css={[flexColumn]}>
            <strong>{nickname}님</strong>
            <span>채팅 나가기를 하면 내용이 사라집니다.</span>
          </div>
          <div css={buttonContainer}>
            <button onClick={() => setModalOpen(false)}>유지하기</button>
            <button
              onClick={() => {
                history.push("/dark");
                socket.close();
              }}
            >
              채팅 나가기
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatLeave;
