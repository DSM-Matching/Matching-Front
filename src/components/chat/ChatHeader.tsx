/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { header } from "../../utils/css/ChatEmotion";
import { blackModeIcon, chatOutIcon, whiteModeIcon } from "../assets";

const ChatHeader = () => {
  const [dateState, setDateState] = useState<string>("오전");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");
  const hours = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");

  useEffect(() => {
    if (hours < 12) {
      setDateState("오전");
    } else {
      setDateState("오후");
    }
  }, [hours]);

  return (
    <header css={header}>
      <ul>
        <li>
          <img src={chatOutIcon} alt="채팅나가기아이콘" />
          <span>채팅 나가기</span>
        </li>
        <li className="date">
          <span className="date-time">
            {year}년 {month}월 {day}일
          </span>
          <span>
            {dateState} {hours} : {min}
          </span>
        </li>
        <li>
          <img src={whiteModeIcon} alt="화이트모드" />
          <img src={blackModeIcon} alt="다크모드" />
        </li>
      </ul>
    </header>
  );
};

export default ChatHeader;
