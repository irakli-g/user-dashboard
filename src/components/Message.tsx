import React from "react";
import { useAppContext } from "../context/context";
import { MessageStatus } from "../reducer/reducer";
import { AiOutlineWarning } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

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
    >
      <figure className="message-icon">
        {message.status === MessageStatus.SUCCESS ? (
          <BsCheckCircle className="react-icon check" />
        ) : message.status === MessageStatus.ERROR ? (
          <MdErrorOutline className="react-icon error" />
        ) : message.status === MessageStatus.WARNING ? (
          <AiOutlineWarning className="react-icon warning" />
        ) : null}
      </figure>
      <p className="message-content">{message?.content}</p>
    </div>
  );
};

export default Message;
