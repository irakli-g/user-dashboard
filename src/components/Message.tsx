import React from "react";
import { useAppContext } from "../context/context";
import { MessageStatus } from "../reducer/reducer";

const Message: React.FC = () => {
  const { message } = useAppContext();

  return (
    <div
      className={
        message.status === MessageStatus.SUCCESS
          ? "message-modal success"
          : message.status === MessageStatus.ERROR
          ? "message-modal error"
          : message.status === MessageStatus.WARNING
          ? "message-modal warning"
          : "message-modal"
      }
    ></div>
  );
};

export default Message;
