/** @jsxImportSource @emotion/react */

import React, { FC, useState } from "react";
import { mainWrapper, modeContainer } from "../../utils/css/WhiteEmotionComponent";
import { whiteModeDarkIcon, whiteModeWhiteIcon } from "../assets";
import MatchWait from "./MatchWait";
import NicknameInput from "./NicknameInput";

const WhiteMain = () => {
  const [changeComponent, setChangeComponent] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  return (
    <>
      <div css={mainWrapper}>
        <div css={modeContainer}>
          <img src={whiteModeWhiteIcon} alt="화이트모드" />
          <img src={whiteModeDarkIcon} alt="다크모드" />
        </div>
        {changeComponent ? (
          <>
            <MatchWait nickname={nickname} />
          </>
        ) : (
          <>
            <NicknameInput setChangeComponent={setChangeComponent} setNickname={setNickname} nickname={nickname}/>
          </>
        )}
      </div>
    </>
  );
};

export default WhiteMain;
  