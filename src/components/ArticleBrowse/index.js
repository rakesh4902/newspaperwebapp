import { Link } from 'react-router-dom';
import articles from '../../data/article'
import './index.css'

const ArticleBrowse = () => (
  <div className='articles_page'>
    <>
    <h1 className='article_head'>Welcome to Our Article Browser</h1>
    <p className='article_para'>Explore our curated collection of news and articles below</p>
    <Link to="/" className="home_page">Go To Home Page</Link>
    </>
    <div className="articles_browse">
      {articles.map(article => (
        <ul key={article.id} className="article">
          <img src={article.imageUrl} alt="Article Thumbnail" className='article_image'/>
          <h1 className='article_title'>{article.title}</h1>
          <p className="article_summary">{article.summary}</p>
          <Link to={`/article/${article.id}`} className="article_readmore">Read More</Link>
        </ul>
      ))}
    </div>
  </div>
);

export default ArticleBrowse;
