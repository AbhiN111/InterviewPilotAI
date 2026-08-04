import {
  FaRobot,
  FaUser,
  FaCircle,
} from "react-icons/fa";

import "./InterviewChat.css";

function InterviewChat() {

  const messages = [
    {
      sender: "ai",
      text: "Hello Abhishek 👋 Welcome to InterviewPilot AI.",
    },
    {
      sender: "ai",
      text: "Tell me about yourself and explain your background in software development.",
    },
    {
      sender: "user",
      text: "I'm a Computer Engineering student passionate about Java, MERN Stack and Artificial Intelligence.",
    },
  ];

  return (

    <div className="chat-card">

      <div className="chat-top">

        <div>

          <h2>Live Interview</h2>

          <p>AI Mock Interview Session</p>

        </div>

        <div className="live-badge">

          <FaCircle />

          LIVE

        </div>

      </div>

      <div className="chat-messages">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`message-row ${msg.sender}`}
          >

            <div className="avatar">

              {msg.sender === "ai"
                ? <FaRobot />
                : <FaUser />
              }

            </div>

            <div className="message-content">

              <div className="message-name">

                {msg.sender === "ai"
                  ? "InterviewPilot AI"
                  : "You"
                }

              </div>

              <div className="message-bubble">

                {msg.text}

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="typing-area">

        <div className="typing">

          <span></span>

          <span></span>

          <span></span>

        </div>

        <p>AI is listening...</p>

      </div>

    </div>

  );

}

export default InterviewChat;