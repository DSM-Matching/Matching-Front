/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { useEffect } from "react";
import { chatContainer, header } from "../../utils/css/ChatEmotion";
import {
  blackBackground,
  blackModeIcon,
  chatOutIcon,
  whiteModeIcon,
} from "../assets";

const Chatting = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");
  const hours = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");

  const [dateState, setDateState] = useState<string>("오전");

  console.log(hours + ":" + min);

  useEffect(() => {
    if (hours < 12) {
      setDateState("오전");
    } else {
      setDateState("오후");
    }
  }, [hours]);

  return (
    <>
      <section css={chatContainer}>
        <header css={header}>
          <ul>
            <li>
              <img src={chatOutIcon} alt="채팅나가기아이콘" />
              <span>채팅 나가기</span>
            </li>
            <li className="date">
              <span>
                {year}년 {month}월 {day}일
              </span>
              <span>
                {dateState} {hours} : {min}
              </span>
            </li>
            <li>
              <img src={whiteModeIcon} alt="" />
              <img src={blackModeIcon} alt="" />
            </li>
          </ul>
        </header>
      </section>
    </>
  );
};

export default Chatting;
