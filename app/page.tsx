// weight medium/extrabold
"use client";

import type { RootState } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
//import action types

export default function Home() {
  const notifications = useSelector((state: RootState) => state.notifications);
  const dispatch = useDispatch();

  const notificationArray = notifications.map((item) => {
    return <p key={item.id}>{item.friendName}</p>;
  });

  return (
    <main>
      <h1>Hello</h1>
      {notificationArray}
    </main>
  );
}
