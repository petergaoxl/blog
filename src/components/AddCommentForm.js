import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
// step 4.0.0

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();
    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(
            `/api/articles/${articleName}/comments`,
            {
                postedBy: name,
                text: commentText,
            }, {headers,}
        );
        const updatedArticle = response.data;
        // pass the updated data to the onArticleUpdated call back function
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');

    }
    return (
        <div id="add-comment-form">
            <h3>Add your comment</h3>
            {/* <label>Name:
                <input
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    type="text" />
            </label> */}
            {user && <p>You are posting as '<strong>{user.email}</strong>'</p>}
            <label>Comment:
                <textarea
                    value={commentText}
                    onChange={(e) => {
                        setCommentText(e.target.value)
                    }}
                    cols="4"
                    rows="5"></textarea>
            </label>
            <button onClick={addComment}>Comment</button>
        </div>
    );
}

export default AddCommentForm;
