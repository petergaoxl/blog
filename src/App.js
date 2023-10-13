
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import ArticlePage from './Pages/ArticlePage'
import ArticleList from './Pages/ArticleList'
import HomePage from './Pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<HomePage />} />    
                    <Route path='/about' element={<About /> } />            
                    <Route path='/articles' element={<ArticleList />} />             
                    <Route path='/articles/:articleId' element={<ArticlePage />} />              
                </Routes>
            </div>
        </BrowserRouter>

    );
    }
export default App;
