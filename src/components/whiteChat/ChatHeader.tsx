/** @jsxImportSource @emotion/react */

import {
  dateList,
  header,
  leave,
  modeChange,
} from "../../utils/css/WhiteChattingEmotion";

import {
  whiteModeChatOutIcon,
  whiteModeDarkIcon,
  whiteModeWhiteIcon,
} from "../assets";

import Clock from "react-live-clock";

const ChatHeader = ({ setLeaveModal }: any) => {
  return (
    <div css={header}>
      <ul>
        <li
          onClick={() => {
            setLeaveModal(true);
          }}
          css={leave}
        >
          <img src={whiteModeChatOutIcon} alt="나가기 아이콘" />
          <span>나가기</span>
        </li>
        <li css={dateList}>
          <Clock format={"YYYY년 MM월 DD일"} ticking={true} />
          <Clock format={"h:mm a"} ticking={true} />
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
