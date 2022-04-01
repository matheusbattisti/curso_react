import "./ErrorMessage.css";

import { BsXLg } from "react-icons/bs";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error">
      <BsXLg />
      <p className="error">{error}</p>
    </div>
  );
};

export default ErrorMessage;
