/** @jsxImportSource @emotion/react */

import React from "react";
import { Link } from "react-router-dom";
import {
  buttonContainer,
  chatLeaveContainer,
  flexcolum,
  modalBackground,
} from "../../utils/css/WhiteModalEmotion";

const ChatLeaveModal = ({ setLeaveModal }: any) => {
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
            <Link to="/">
              <button>나가기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatLeaveModal;
