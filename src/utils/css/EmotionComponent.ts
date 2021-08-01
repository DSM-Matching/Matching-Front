import { css } from "@emotion/react";
import { blackBackground } from "../../components/assets";

const darkMode = "#18002c";

export const mainWrapper = css`
  width: 100vw;
  height: 100vh;
  background: ${darkMode};
  background-image: url(${blackBackground});
  background-repeat: none;
  background-size: 100%100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const title = css`
  color: white;
  font-family: Segoe Script;
  position: absolute;
  top: 150px;
`;

export const modeContainer = css`
  position: absolute;
  top: 0;
  right: 0;

  & img {
    margin: 10px;
    cursor: pointer;
  }
`;

export const inputContainer = css`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const inputTopItem = css`
  width: 100%;
  height: 200px;
  background: #18002c;
  border: 1px solid #8b00ff;
  box-shadow: 0px 0px 29px rgba(0, 178, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-family: Segoe Script;
    font-weight: bold;
    font-size: 30px;
    color: white;
  }

  & input {
    background-color: transparent;
    text-align: center;
    font-family: Nova Slim;
    font-size: 30px;
    color: white;

    ::placeholder {
      color: white;
    }
  }
`;

export const inputBottomItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  color: white;
  font-family: Segoe Script;
  font-weight: bold;
  font-size: 27px;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.6s;
`;
