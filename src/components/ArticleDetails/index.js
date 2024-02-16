import { Link } from 'react-router-dom';
import articleData from '../../data/article';
import { useParams } from 'react-router-dom';
import './index.css';

const ArticleDetails = () => {
  const { id } = useParams();
  console.log(id);
  const article = articleData.find(article => article.id === id);

  return (
    <div>
      <h1 className="article_details_head">Article Spotlight</h1>
      <div className="article-detail">
        <img src={article.imageUrl} alt="Article Thumbnail" className="article_thumbnail" />
        <h2 className="artitle_details_title">{article.title}</h2>
        <p className="article_details_content">{article.content}</p>
        <h1 className="article_author">
          Author: <span className="article_author_value">{article.author}</span>
        </h1>
        <h1 className="article_author">
          Published Date: <span className="article_author_value">{article.publishedDate}</span>
        </h1>
        <Link to="/browse" className="article_goback">Go Back</Link>
      </div>
    </div>
  );
}

export default ArticleDetails;
