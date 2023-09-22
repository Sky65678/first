import {useState} from 'react';
import './button.css'
function Button() {
    let [likes, setlikes]= useState(0);
    function like(){
      setlikes(likes+1);
    }
    function dislike(){                
      setlikes(likes-1);
    }
    return (
      <div className="App">
        <p>{likes}</p>
        <button onClick={like} className='like'>likes</button>
        <button onClick={dislike} className='dislike'>Dislikes</button>
      </div>
    );
  }

  export default Button;