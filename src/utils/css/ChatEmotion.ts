import { css } from "@emotion/react";
import { darkChatItemColor, darkInputBackground, darkMode } from "../color";

export const chatContainer = css`
  width: 100vw;
  height: 100vh;
  background-color: ${darkMode};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const header = css`
  width: 100%;
  height: 80px;

  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & li {
      margin: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;

      & img {
        margin: 10px;
        cursor: pointer;
      }
    }
  }

  .date {
    flex-direction: column;
  }

  .date-time {
    font-size: 18px;
  }
`;

export const chatOutputWrapper = css`
  width: 100%;
`;

export const chatItem = css`
  width: auto;
  height: auto;
  color: white;
  span {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const chatText = css`
  p {
    font-size: 14px;
    line-height: 20px;
  }

  .text {
    box-sizing: border-box;
    display: inline-block;
    max-width: 50%;
    padding: 10px;
    font-size: 18px;
    overflow: hidden;
    height: auto;
    color: white;
    background-color: ${darkChatItemColor};
    background: #8f00ff;
    box-shadow: 0px 0px 13px rgba(0, 178, 255, 0.29);
    border-radius: 15px;
  }
`;

export const inputWrapper = css`
  width: 100%;
  height: 68px;
  background-color: ${darkInputBackground};
  box-shadow: 0px -11px 8px rgba(0, 178, 255, 0.25);
`;

export const inputItem = css`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
    & img {
      margin: 10px;
      cursor: pointer;
    }
  }
`;

export const textInput = css`
  width: 95%;

  & input {
    width: 95%;
    height: 30px;
    padding: 10px;
    font-size: 18px;
    color: white;
    background-color: transparent;

    ::placeholder {
      color: white;
    }
  }
`;
