import React from "react";
import { notifications } from "../../notificationData";
import Image from "next/image";

// {
//   friendName: "Mark Webber";
//   friendPic: "url";
//   id: 1;
//   notificationType: "reacted to your recent post";
//   notificationValue: "My first tournament today!";
//   read: false;
//   time: "1m";
// }

export default function NotificationCard() {
  const {
    friendName,
    friendPic,
    notificationType,
    notificationValue,
    read,
    time,
  } = notifications[0];
  return (
    <div className="flex bg-veryLightGrayishBlue rounded-lg gap-4  p-4">
      <div className="w-14">
        <Image
          src={friendPic}
          width={500}
          height={500}
          alt={`Picture of ${friendName}`}
        />
      </div>
      <div className="text-darkGrayishBlue leading-5 text-sm">
        <span className="text-black font-extrabold">{friendName} </span>
        <span>{notificationType} </span>
        <span className="font-extrabold">{notificationValue}</span>
        <div className="bg-red-600 h-3 w-3 rounded-full inline-block ml-1 "></div>
        <p className="text-grayishBlue">{time} ago</p>
      </div>
    </div>
  );
}
