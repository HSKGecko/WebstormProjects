import React from 'react';
import Profile1 from "./images/pic1.jpg";

const SingleComment = () => {
    return(
        <div className="comment">
            <a href="/" className='avatar'>
                <img src={Profile1} alt="profile picture"/>
            </a>
            <div className="content">
                <a href="/" className='author'>
                    Ethan
                </a>
                <div className="metadata">
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    <div className="text">
                        It's amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;