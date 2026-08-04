import { useState } from "react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVolumeUp,
  FaPause,
  FaPhoneSlash,
} from "react-icons/fa";

import "./InterviewControls.css";

function InterviewControls() {

  const [mic, setMic] = useState(true);

  return (

    <div className="controls-wrapper">

      <div className="controls-bar">

        <button
          className={`control-btn ${mic ? "active" : ""}`}
          onClick={() => setMic(!mic)}
        >
          {mic ? <FaMicrophone /> : <FaMicrophoneSlash />}
        </button>

        <button className="control-btn active">
          <FaVolumeUp />
        </button>

        <button className="control-btn">
          <FaPause />
        </button>

        <button className="end-interview">
          <FaPhoneSlash />
          End Interview
        </button>

      </div>

    </div>

  );
}

export default InterviewControls;