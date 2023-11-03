import React from 'react';

const CommentsList = ({comments}) => (
        <div>
            <h3>Comments:</h3>
            {comments.map(comment => (
                // <div className='comment' key={comment.postedBy + ': '+ Math.ceil(Math.random() * 10) + comment.text}>
                <div className='comment' key={comment.postedBy + ': '+ Math.ceil(Math.random() * 10) + comment.time}>
                <h4>{comment.postedBy}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );


export default CommentsList;
