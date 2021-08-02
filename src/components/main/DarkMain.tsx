/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {
  inputBottomItem,
  inputContainer,
  inputTopItem,
  mainWrapper,
  modeContainer,
  title,
} from "../../utils/css/EmotionComponent";
import { blackModeIcon, whiteModeIcon } from "../assets";
import WaitItem from "./WaitItem";

const DarkMain = () => {
  const [inputState, setInputState] = useState<boolean>(false);

  return (
    <>
      <div css={mainWrapper}>
        <div css={modeContainer}>
          <img src={whiteModeIcon} alt="화이트모드아이콘" />
          <img src={blackModeIcon} alt="다크모드아이콘" />
        </div>
        <h1 css={title}>즐거운 Matching 시작</h1>
        <WaitItem />
        {/*  <div css={inputContainer}>
          <div css={inputTopItem}>
            <span>Please enter a nickname.</span>
            <input
              type="text"
              placeholder="your nickname"
              onChange={(e) =>
                e.target.value.length === 0
                  ? setInputState(false)
                  : setInputState(true)
              }
            />
          </div>
          <div
            css={[inputTopItem, inputBottomItem]}
            style={{ boxShadow: inputState ? "0px 0px 29px #00b2ff" : "none" }}
          >
            join
          </div>
        </div> */}
      </div>
    </>
  );
};

export default DarkMain;
