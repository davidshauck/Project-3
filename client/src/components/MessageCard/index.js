import React from "react";
import { List, ListItem } from "../List"
import { FormBtn } from "../Form"
import "./messageCard.css";

function MessageCard(props) {

  console.log("MESSAGES ", props.messages)
  
  return (
    <div>
      <h3 className="messages-header">Messages</h3>
      <div className="results-box">

      {props.messages.length ? (
        
              <List>
                {props.messages.map(message => (
                  
                  <ListItem key={message.name}>
                      <div className="name">Name: <span className="plain">{message.name}</span></div>
                      <div className="name">Title: <span className="plain">{message.title}</span></div>
                      <div className="name">Message: <span className="plain">{message.message}</span></div>
                      <div className="name">Date: <span className="plain">{message.date}</span></div>
                      <FormBtn button={"Reply"} className="btn btn-secondary reply-archive" /> <FormBtn button={"Archive"} className="btn btn-secondary reply-archive" />
                  </ListItem>
                  
                ))}
              </List>
            ) : (
              <h3 className="no-messages">You have no messages</h3>
            )}
      </div>
    </div>
  );
}

export default MessageCard;
