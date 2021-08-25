import { css } from "@emotion/react";

export const flexcolum = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const modalBackground = css`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0%;
`;

export const chatLeaveContainer = css`
  width: 400px;
  height: 200px;
  background: white;
  box-shadow: 0px 0px 29px #fed8f3;
`;

export const buttonContainer = css`
  margin-top: 30px;

  & button {
    width: 140px;
    height: 40px;
    margin: 15px;
    cursor: pointer;
    background: #ffe2f7;

    :hover {
      background: #ff9fe4;
    }
  }
`;
