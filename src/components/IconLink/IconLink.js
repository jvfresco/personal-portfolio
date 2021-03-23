import React from "react";
import "./IconLink.css";

const IconLink = ({ href, image, alt, color }) => {
  return href ? (
    <a href={href} className={"iconlink"} rel="noreferrer" target="_blank">
      <img
        src={image}
        className={"iconlink__image"}
        style={{ filter: color }}
        alt={alt}
      />
    </a>
  ) : null;
};

export default IconLink;
