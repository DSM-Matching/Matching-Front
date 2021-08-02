/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {
  firstContainer,
  inputBottomItem,
  inputContainer,
  inputTopItem,
} from "../../utils/css/EmotionComponent";

interface NickNameProps {
  setChangeComponent?: any;
}

const NickNameInput = ({ setChangeComponent }: NickNameProps) => {
  const [inputState, setInputState] = useState<boolean>(false);

  return (
    <div css={[inputContainer, firstContainer]}>
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
        onClick={() => setChangeComponent(true)}
        css={[inputTopItem, inputBottomItem]}
        style={{ boxShadow: inputState ? "0px 0px 29px #00b2ff" : "none" }}
      >
        join
      </div>
    </div>
  );
};

export default NickNameInput;
