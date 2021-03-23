import React, { forwardRef } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { useTransition, animated } from "react-spring";

const Modal = forwardRef(
  ({ show, modalClosed, children, colors, title }, ref) => {
    const animations = useTransition(show, null, {
      ref: ref,
      from: { opacity: 0, transform: "translate(-50%, -60%)" },
      enter: { opacity: 1, transform: "translate(-50%, -50%)" },
      leave: { opacity: 0, transform: "translate(-50%, -60%)" },
    });

    const background = colors.tertiary ? colors.tertiary : "#adadad";

    return (
      <>
        <Backdrop show={show} clicked={modalClosed} />
        {animations.map(({ item, key, props }) => {
          return (
            item && (
              <animated.div key={key} style={{ ...props }} className={"modal"}>
                <div
                  className="modal__title"
                  style={{
                    backgroundColor: background,
                    color: colors.secondary ? colors.secondary : "#dfdfdf",
                  }}
                >
                  {title ? title : "About me"}
                </div>
                <div
                  className="modal__text"
                  style={{ border: `10px solid ${background}` }}
                >
                  {children}
                </div>
              </animated.div>
            )
          );
        })}
      </>
    );
  }
);

export default Modal;
