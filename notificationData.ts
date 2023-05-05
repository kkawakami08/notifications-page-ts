import { useId } from "react";

interface NotificationType {
  friendName: String;
  friendPic: String;
  notificationType: String;
  notificationValue: String;
  read: Boolean;
  time: string;
  id: string;
}

export const notifications: NotificationType[] = [
  {
    friendName: "Mark Webber",
    friendPic: "url",
    notificationType: "reacted to your recent post",
    notificationValue: "My first tournament today!",
    read: false,
    time: "1m",
    id: useId(),
  },
  {
    friendName: "Angela Gray",
    friendPic: "url",
    notificationType: "followed you",
    notificationValue: "",
    read: false,
    time: "5m",
    id: useId(),
  },
  {
    friendName: "Jacob Thompson",
    friendPic: "url",
    notificationType: "has joined your group",
    notificationValue: "Chess Club",
    read: false,
    time: "1 day",
    id: useId(),
  },
  {
    friendName: "Rizky Hassanuddin",
    friendPic: "url",
    notificationType: "sent you a private message",
    notificationValue:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: false,
    time: "5 days",
    id: useId(),
  },
  {
    friendName: "Kimberly Smith",
    friendPic: "url",
    notificationType: "commented on your picture",
    notificationValue: "pic URL",
    read: false,
    time: "1 week",
    id: useId(),
  },
  {
    friendName: "Nathan Peterson",
    friendPic: "url",
    notificationType: "reacted to your recent post",
    notificationValue: "5 end-game strategies to increase your win rate",
    read: false,
    time: "2 weeks",
    id: useId(),
  },
  {
    friendName: "Anna Kim",
    friendPic: "url",
    notificationType: "left the group group",
    notificationValue: "Chess Club",
    read: false,
    time: "2 weeks",
    id: useId(),
  },
];
