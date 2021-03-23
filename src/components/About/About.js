import React, { forwardRef } from "react";
import { useSpring, a } from "react-spring";
import "./About.css";

const About = forwardRef(({ animate, onClick, index }, ref) => {
  const animation = useSpring({
    ref: ref,
    from: { transform: "translate(0px, 0px)", opacity: 1 },
    transform: animate ? "translate(0px, -100px)" : "translate(0px, 0px)",
    opacity: animate ? 0 : 1,
  });

  return (
    <a.div
      className="about"
      style={animation}
      onClick={() => onClick({ type: "OPEN_MODAL", index: index })}
    >
      <div className="about__text">About me</div>
    </a.div>
  );
});

export default About;
