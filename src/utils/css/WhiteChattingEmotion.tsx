import { css } from "@emotion/react";
import { whiteInputBackground } from "../color";

export const chattingContainer = css`
  width: 100%;
  height: 100vh;
`;

export const header = css`
  width: 100%;
  height: 80px;
  padding-top: 10px;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 0;

    & li {
      display: flex;
      align-items: center;

      & img {
        margin: 0px 10px 0px 10px;
      }
    }
  }
`;

export const leave = css`
  cursor: pointer;
`;

export const dateList = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const modeChange = css`
  margin-right: 30px;
  & img {
    width: 50px;
    height: 50px;
  }
`;

export const chatOutput = css`
  width: 100%;
`;

export const chatInputContainer = css`
  width: 100%;
  height: 68px;
  background: ${whiteInputBackground};
  box-shadow: 0px -11px 8px rgba(253, 171, 230, 0.8);
  bottom: 0%;
  position: absolute;
`;

export const inputItem = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    align-items: center;

    & img {
      margin: 0px 10px 0px 10px;
      cursor: pointer;
    }
  }
`;

export const chatInput = css`
  width: 85%;

  & input {
    width: 100%;
    height: 30px;
    padding: 10px;
    background: ${whiteInputBackground};
    font-size: 20px;
  }
`;
