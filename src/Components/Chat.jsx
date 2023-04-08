import React from "react";
import Messages from "./Messages.jsx";
import Input from "./Input";

const Chat = () => {
    return (
        <div className="Chat">
            <div className="ChatInfo">
                <span className="ChatParner">Jane</span>
                <div className="ChatIcon">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat