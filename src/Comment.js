import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => 
    <li>
        {text} <span>votes: {votes}</span> 
        <button className={'up'} onClick={() => thumbUpComment(id)}><i className={"fa fa-thumbs-up"} aria-hidden="true"></i>
</button>
        <button className={'down'} onClick={() => thumbDownComment(id)}><i className={"fa fa-thumbs-down"} aria-hidden="true"></i>
</button>
        <button className={'remove'} onClick={() => removeComment(id)}> x </button>
    </li>;

export default Comment;