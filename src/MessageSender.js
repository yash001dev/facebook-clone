import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from './firebase';

function MessageSender() {
  const [{user},dispatch]=useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl,setImageUrl]=useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic:user.photoURL,
      username:user.displayName,
      image:imageUrl,
    })
    //some Clever db Stuff

    setInput("");
    setImageUrl("");
    
  };
  return (
    <div className="messageSender">
      <div class="meesageSender__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div class="messageSender__bottom">
          <div class="messageSender__option">
              <VideocamIcon style={{color:"red"}}/>
              <h3>Live Video</h3>
          </div>
          <div class="messageSender__option">
              <PhotoLibraryIcon style={{color:"green"}}/>
              <h3>Photo/Video</h3>
          </div>
          <div class="messageSender__option">
              <InsertEmoticonIcon style={{color:"orange"}}/>
              <h3>Feeling/Activity</h3>
          </div>
      </div>
    </div>
  );
}

export default MessageSender;
