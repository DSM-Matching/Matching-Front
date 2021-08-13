/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { header } from "../../utils/css/ChatEmotion";
import { blackModeIcon, chatOutIcon, whiteModeIcon } from "../assets";
import moment from "moment";
import { modalOpenType } from "../../utils/interface/chatTypes";

const ChatHeader = ({ setModalOpen }: modalOpenType) => {
  const [dateState, setDateState] = useState<string>("오전");
  const [time, setTime] = useState<any>(moment());

  const date = new Date();
  const hours = date.getHours();

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(moment());
    }, 1000);

    if (hours < 12) {
      setDateState("오전");
    } else {
      setDateState("오후");
    }

    return () => {
      clearInterval(clock);
    };
  }, [hours]);

  return (
    <header css={header}>
      <ul>
        <li
          onClick={() => {
            setModalOpen(true);
            console.log(true);
          }}
        >
          <img src={chatOutIcon} alt="채팅나가기아이콘" />
          <span>채팅 나가기</span>
        </li>
        <li className="date">
          <span className="date-time">{time.format("YYYY년 M월 D일")}</span>
          <span>
            {dateState} {time.format("h : mm : ss")}
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
