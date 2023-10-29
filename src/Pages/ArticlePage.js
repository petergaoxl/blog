import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import CommentsList from '../components/CommentsList';


const ArticlePage = () => {
    // useState and useEffect
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
            // const{articleId} = useParams();
            const params = useParams();

    const articleId = params.articleId;
    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;

            // setArticleInfo({upvote:Math.ceil(Math.random() * 10),comments:[]});
            console.log(newArticleInfo.upvotes);
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, [articleId]);


    const article = articles.find(article => article.name === articleId);
    if (!article) {
        return <NotFoundPage />
    }
    return (
        <div>
            {/* article info from local */}
            <h1>{article.title}</h1>
            {/* Get data from server */}
            <p>This article has <strong style={{ color: 'green' }}>{articleInfo.upvotes}</strong> Upvote(s)</p>
            <p >{article.content.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}</p>
            <CommentsList comments={articleInfo.comments} />
        </div>
    );
}

export default ArticlePage;
