import { css } from "@emotion/react";

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBackground = css`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.31);
  position: absolute;
`;

export const ModalItem = css`
  width: 400px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 0px 29px #00b2ff;
`;

export const buttonContainer = css`
  margin-top: 30px;

  & button {
    background: rgba(143, 0, 255, 0.3);
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    width: 140px;
    height: 34px;
    margin: 15px;
    color: white;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      background: #8f00ff;
    }
  }
`;
