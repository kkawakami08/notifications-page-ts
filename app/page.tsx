// weight medium/extrabold
"use client";
import Nav from "./components/Nav";
import NotificationCard from "./components/NotificationCard";
import type { RootState, AppDispatch } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
//import action types

export default function Home() {
  const notifications = useSelector((state: RootState) => state.notifications);
  const dispatch = useDispatch<AppDispatch>();

  const notificationArray = notifications.map((item) => {
    return <p key={item.id}>{item.friendName}</p>;
  });

  return (
    <div className="px-5 py-10 flex flex-col gap-7">
      <Nav />
      <main className="flex flex-col gap-3">
        <NotificationCard />
        <NotificationCard />
      </main>
    </div>
  );
}
