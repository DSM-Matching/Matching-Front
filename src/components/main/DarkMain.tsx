/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { mainWrapper, modeContainer } from "../../utils/css/EmotionComponent";
import { blackModeIcon, whiteModeIcon } from "../assets";
import NickNameInput from "./NickNameInput";
import WaitItem from "./WaitItem";

const DarkMain = () => {
  const [changeComponent, setChangeComponent] = useState<boolean>(false);

  return (
    <>
      <div css={mainWrapper}>
        <div css={modeContainer}>
          <img src={whiteModeIcon} alt="화이트모드아이콘" />
          <img src={blackModeIcon} alt="다크모드아이콘" />
        </div>
        {changeComponent ? (
          <>
            <WaitItem />
          </>
        ) : (
          <>
            <NickNameInput setChangeComponent={setChangeComponent} />
          </>
        )}
      </div>
    </>
  );
};

export default DarkMain;
