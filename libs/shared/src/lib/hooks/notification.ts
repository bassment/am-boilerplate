import React from "react";
import { NotificationContext } from "../providers";

const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context.actions;
}

export { useNotification };