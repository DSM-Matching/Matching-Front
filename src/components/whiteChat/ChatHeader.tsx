/** @jsxImportSource @emotion/react */

import {
  dateList,
  header,
  modeChange,
} from "../../utils/css/WhiteChattingEmotion";
import {
  whiteModeChatOutIcon,
  whiteModeDarkIcon,
  whiteModeWhiteIcon,
} from "../assets";

const ChatHeader = () => {
  return (
    <div css={header}>
      <ul>
        <li>
          <img src={whiteModeChatOutIcon} alt="나가기 아이콘" />
          <span>나가기</span>
        </li>
        <li css={dateList}>
          <span>2021년 8월 22일</span>
          <span>오후 09:54</span>
        </li>
        <li css={modeChange}>
          <img src={whiteModeWhiteIcon} alt="화이트모드" />
          <img src={whiteModeDarkIcon} alt="다크모드" />
        </li>
      </ul>
    </div>
  );
};

export default ChatHeader;
