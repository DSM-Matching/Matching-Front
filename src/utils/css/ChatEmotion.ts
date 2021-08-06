import { css } from "@emotion/react";
import { darkInputBackground, darkMode } from "../color";

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

export const chatOutput = css`
  width: 100%;
`;

export const inputWrapper = css`
  width: 100%;
  height: 68px;
  background-color: ${darkInputBackground};
  box-shadow: 0px -11px 8px rgba(0, 178, 255, 0.25);
`;

export const inputItem = css`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
`;
