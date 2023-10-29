
import './App.css';
import React from 'react'



import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import ArticlePage from './Pages/ArticlePage'
import ArticleList from './Pages/ArticleList'
import HomePage from './Pages/HomePage';
import NavBar from './NavBar';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div id='app-body'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/articles' element={<ArticleList />} />
                        <Route path='/articles/:articleId' element={<ArticlePage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;


