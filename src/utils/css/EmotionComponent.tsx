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

export const inputContainer = css`
  width: 500px;
  margin: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const nicknameinput = css`
  width: 500px;
  height: 200px;
  background: white;
`;

export const inputTopItem = css`
  width: 100%;
  height: 200px;
  border: 1px solid #FFB2B2;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 29px rgba(255, 178, 178, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & span {
    font-family: Segoe Script;
    font-weight: bold;
    font-size: 30px;
    color: #FFB2B2;
    margin-bottom: 20px;
  }

  & input{
    width: 200px;
    height: 40px;
    font-family: Indie Flower;
    font-size: 30px;
    color: #FFB2B2;
    text-align: center;

    ::placeholder{
      color: #FFB2B2;
    }
  }
`;

export const inputBottomItem = css`
  
`
