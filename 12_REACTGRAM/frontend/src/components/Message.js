import "./Message.css";

import { BsXLg } from "react-icons/bs";

const Message = ({ msg, type }) => {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
