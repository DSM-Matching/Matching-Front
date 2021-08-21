/** @jsxImportSource @emotion/react */

import React, { FC, useState } from "react";
import { mainWrapper, modeContainer } from "../../utils/css/EmotionComponent";
import { whiteModeDarkIcon, whiteModeWhiteIcon } from "../assets";
import MatchWait from "./MatchWait";
import NicknameInput from "./NicknameInput";

const WhiteMain = () => {
  const [changeComponent, setChangeComponent] = useState<boolean>(false);

  return (
    <>
      <div css={mainWrapper}>
        <div css={modeContainer}>
          <img src={whiteModeWhiteIcon} alt="화이트모드" />
          <img src={whiteModeDarkIcon} alt="다크모드" />
        </div>
        {changeComponent ? <MatchWait /> : <NicknameInput />}
      </div>
    </>
  );
};

export default WhiteMain;
