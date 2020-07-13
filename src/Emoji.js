import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import SearchEmoji from "./SearchEmoji";
class Emoji extends React.Component{
    constructor(){
        super();
       
    };

   emoji= (value) => {
    const [chosenEmoji, setChosenEmoji] = useState(null);
   
    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    }
}

    render(){
        return(
        <>
        <SearchEmoji emoji={this.emoji}></SearchEmoji>
      {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} /> */}
    </>
        )
    }
}

export default Emoji;