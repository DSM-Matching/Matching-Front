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
  align-items: center;
`;

export const inputTopItem = css`
  width: 100%;
  height: 200px;
  background: #18002c;
  box-shadow: 0px 0px 29px rgba(0, 178, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span {
    margin-bottom: 20px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 30px;
    color: white;
  }

  & input {
    background-color: transparent;
    text-align: center;
    font-family: Roboto;
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
  font-family: Roboto;
  font-weight: bold;
  font-size: 27px;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.6s;
`;

export const matchingLine = css`
  background-color: white;
  width: 400px;
  height: 5px;
`;

export const matchingLineCheck = css`
  background-color: #8f00ff;
  width: 100px;
`;

export const matchingButton = css`
  width: 300px;
  height: 80px;

  background: #8f00ff;
  box-shadow: 0px 0px 20px #00b2ff;
  border-radius: 15px;
`;
