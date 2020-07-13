import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
 
class SearchEmoji extends React.Component{
        constructor(){
          super();
          this.inputRef=React.createRef();
          console.log("for refernjde"+this.inputRef);
        }
        render(){
          let emoji=this.props.emoji; 
          return(
            <>
            <h1>Hy my name is romil</h1>
            <input placeholder="search Emoji...." className="input" maxlength="25" ref={this.inputRef}></input>
                <button className="inputButton" onClick={()=>{
                    if(this.inputRef.current.value)
                   emoji(this.inputRef.current.value);
                }}>Search</button>
            </>
          )
        }
}
export default SearchEmoji;