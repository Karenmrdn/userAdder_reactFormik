import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const ErrorModal = ({ title, message, onModalClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onModalClose={onModalClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
