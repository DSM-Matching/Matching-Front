/** @jsxImportSource @emotion/react */

import React, { FC, useState } from "react";
import {
  inputBottomItem,
  inputContainer,
  inputTopItem,
  mainWrapper,
} from "../../utils/css/EmotionComponent";

const DarkMain = () => {
  const [inputState, setInputState] = useState<boolean>(false);
  return (
    <>
      <div css={mainWrapper}>
        <div css={inputContainer}>
          <div css={inputTopItem}>
            <p>Please enter a nickname.</p>
            <input
              type="text"
              placeholder="your nickName"
              onChange={
                (e) =>
                  e.target.value.length === 0
                    ? console.log("false") /* setInputState(false) */
                    : console.log("히히") /* setInputState(true) */
              }
            />
          </div>
          <div css={[inputTopItem, inputBottomItem]}>join</div>
        </div>
      </div>
    </>
  );
};

export default DarkMain;
