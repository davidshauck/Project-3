import React from "react";
import "./VideoBtn.css";

const VideoBtn = props => (
  <button className={`video-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default VideoBtn;
