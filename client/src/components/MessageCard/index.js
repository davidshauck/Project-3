import React from "react";
import { List, ListItem } from "../List"
import "./messageCard.css";

function MessageCard(props) {
  
  console.log("REVIEW CARD", props)
  return (
    <div>
      <h3 className="messages-header">Messages</h3>
      <div className="results-box">

      {props.messages.length ? (
        
              <List>
                {props.messages.map(message => (
                  
                  <ListItem key={message.name}>
                      <div class="name">Name: <span class="plain">{message.name}</span></div>
                      <div class="name">Title: <span class="plain">{message.title}</span></div>
                      <div class="name">Message: <span class="plain">{message.message}</span></div>
                      <hr />               
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 class="no-messages">You have no messages</h3>
            )}
      </div>
    </div>
  );
}

export default MessageCard;
