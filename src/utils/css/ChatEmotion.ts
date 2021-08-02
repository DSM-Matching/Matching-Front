import { css } from "@emotion/react";
import { darkMode } from "../color";

export const chatContainer = css`
  width: 100vw;
  height: 100vh;
  background-color: ${darkMode};
`;

export const header = css`
  width: 100%;
  height: 60px;
  border: 1px solid red;

  & ul {
    display: flex;
    flex-direction: row;
  }

  & li {
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
  }

  .date {
    flex-direction: column;
  }
`;

export const date = css``;
