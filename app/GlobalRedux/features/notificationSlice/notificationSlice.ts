"use client";

import { createSlice } from "@reduxjs/toolkit";
import { notifications } from "@/notificationData";

export interface NotificationState {
  friendName: String;
  friendPic: String;
  notificationType: String;
  notificationValue: String;
  read: Boolean;
  time: string;
  id: number;
}

const initialState: NotificationState[] = notifications;

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    // toggleRead:
    // toggleOpen:
    // markAllRead:
  },
});

export const { toggleRead, toggleOpen, markAllRead } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
