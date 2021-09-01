/** @jsxImportSource @emotion/react */

import React from "react";
import { useHistory } from "react-router-dom";
import {
  buttonContainer,
  chatLeaveContainer,
  flexcolum,
  modalBackground,
} from "../../utils/css/WhiteModalEmotion";

const ChatLeaveModal = ({ setLeaveModal, ws }: any) => {
  const history = useHistory();

  return (
    <>
      <div css={[modalBackground, flexcolum]}>
        <div css={[chatLeaveContainer, flexcolum]}>
          <b>김지민님</b>
          <span>채팅 나가기를 하면 내용이 사라집니다.</span>
          <div css={buttonContainer}>
            <button
              onClick={() => {
                setLeaveModal(false);
              }}
            >
              유지하기
            </button>
            <button
              onClick={() => {
                ws.close();
                history.push("/");
              }}
            >
              나가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatLeaveModal;
