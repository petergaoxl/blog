import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';

const ArticlePage = () => {
    // 1.1 Retrieve the articleId from the route parameters.
    const params = useParams();
    const articleId = params.articleId;
    const article = articles.find(article => article.name === articleId);

    // 5.5 Retrieve user information (possibly for authentication).
    const { user } = useUser();

    // 2.1 Initialize state for article information and fetch data from the server.
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [],canUpvote:false });
    // 
    const {canUpvote} = articleInfo;
    useEffect(() => {
        const loadArticleInfo = async () => {
            // 9.7 Check for user authentication and set headers accordingly.
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, [articleId, user]);

    // 3.1 Function to handle upvoting an article.
    const addUpvote = async () => {
        // 9.9 Check for user authentication and set headers accordingly.
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    // Check if the article exists, and display a "Not Found" page if it doesn't.
    if (!article) {
        return <NotFoundPage />
    }

    // Render the article page with article details, upvoting, comments, and more.
    return (
        <div>
            {/* Display article information from local data. */}
            <h1>{article.title}</h1>
            <div className='upvotes-section'>
                {/* Check user authentication to allow or prompt for upvoting. */}
                {user
                    // ? <button onClick={addUpvote}>Favour it</button>
                    ?  <button onClick={addUpvote}>{canUpvote ? 'Favour it' : 'Voted!'}</button>
                    : <button>Log in to upvote</button>
                }
                <p>This article has <strong style={{ color: 'green' }}>{articleInfo.upvotes}</strong> Upvote(s)</p>
            </div>
            {/* Display article content and comment form. */}
            <div >{article.content.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}</div>
            {user ? <AddCommentForm
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
            /> : <button>Log in to add comment</button>}
            <CommentsList comments={articleInfo.comments} />
        </div>
    );
}

export default ArticlePage;
