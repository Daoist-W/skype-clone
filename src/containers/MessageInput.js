import "./MessageInput.css";
import React from "react";
import store from "../store";
import { sendMessage, setTypeValue } from "../actions";

//supporting functions



// main export
const MessageInput = ({ value }) => {
    const state = store.getState();  
    
    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        console.log(state, "handleSubmit");
        store.dispatch(sendMessage(typing, activeUserId));
    };

    const handleChange = e => {
        store.dispatch(setTypeValue(e.target.value));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message" 
            />
        </form>
    );
};

export default MessageInput;