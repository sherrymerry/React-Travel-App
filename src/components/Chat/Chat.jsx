import React, { useEffect } from "react";
import "./chat.css";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      chat-icon="https:&#x2F;&#x2F;protoinfrastack-myfirstbucketb8884501-fnnzvxt2ee5v.s3.amazonaws.com&#x2F;EqX7WYx2MmX9CxZtsl8TKNG9u4GMOVh2T1Oy.png"
      // chat-icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ArJ-M_QGI0CAcxG9M8N4WUO9kFY5iRI7sQ&amp;s" // Custom chat icon URL
      intent="WELCOME"
      chat-title="🌍 Travel_Bot 🧳"
      agent-id="b8e0895d-9623-4d82-a783-99a7c9bb40d1"
      language-code="en"
    ></df-messenger>
  );
};

export default Chat;
