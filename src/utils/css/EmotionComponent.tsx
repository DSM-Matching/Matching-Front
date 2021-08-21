import { css } from "@emotion/react";
import { whiteBackground } from "../../components/assets/index";

export const mainWrapper = css`
  width: 100%;
  height: 100vh;
  background-image: url(${whiteBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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

export const nicknameInputContainer = css`
  width: 500px;
  height: 200px;
`;

export const matchContainer = css`
  width: 500px;
  margin: auto;
  display: flex;
  text-align: center;
  flex-direction: column;

  & h1 {
    margin-top: 130px;
    font-family: Noto Sans KR;
    color: #f83bfc;
  }

  & img {
    width: 400px;
    margin: auto;
    margin-top: 50px;
  }
`;

export const matchLoadingBar = css`
  width: 400px;
  height: 5px;
  margin: auto;
  background: white;
  margin-top: 20px;
`;

export const matchButton = css`
  width: 300px;
  margin: auto;
  margin-top: 100px;
  font-family: Segoe Script;
  height: 70px;
  font-size: 30px;
  color: white;
  background: #ffb2b2;
  box-shadow: 0px 0px 20px #ffb2b2;
  border-radius: 15px;
  cursor: pointer;
`;
