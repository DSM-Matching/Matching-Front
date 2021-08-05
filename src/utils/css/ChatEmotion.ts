import { css } from "@emotion/react";
import { darkMode } from "../color";

export const chatContainer = css`
  width: 100vw;
  height: 100vh;
  background-color: ${darkMode};
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

export const chatOutput = css``;
