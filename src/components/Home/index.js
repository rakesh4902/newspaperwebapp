import { Link } from 'react-router-dom';
import article from '../../data/article';
import './index.css';

const Home = () => (
  <div className="home">
    <div className="head_news_bg">
      <h1 className="head_news">Welcome to Our News Hub</h1>
      <p className="head_news_desc">Stay informed with the latest news and articles from around the world. Explore diverse topics ranging from technology, politics, and economics to culture, science, and entertainment. Whether you're interested in global affairs, cutting-edge innovations, or thought-provoking analyses, our platform offers a wide array of content to satisfy your curiosity and keep you up-to-date with the ever-changing landscape of information.</p>
    </div>
    <div className="cta_section">
      <h2 className="cta_heading">Why Choose Our News Hub?</h2>
      <p className="cta_description">Our platform offers curated content from reputable sources, ensuring accuracy and reliability in every article you read. Whether you're looking for breaking news or in-depth analysis, we've got you covered.</p>
      <Link to="/browse" className="browse_article">Browse Articles</Link>
    </div>
    <>
    <h2 className="feature_heading">Featured Articles</h2>
    <div className="feature_section">
      <div className="feature_article">
        <img src={article[0].imageUrl} alt="Featured Article Thumbnail" className="feature_image" />
        <div className="feature_content">
          <h3 className="article_title">Exploring the Wonders of the Universe</h3>
          <p className="article_summary">Join us on a journey through the cosmos as we uncover the mysteries of black holes, distant galaxies, and the origins of the universe.</p>
          <Link to="/article/1" className="browse_article">Read More</Link>
        </div>
      </div>
      <div className="feature_article">
        <img src={article[1].imageUrl} alt="Featured Article Thumbnail" className="feature_image" />
        <div className="feature_content">
          <h3 className="article_title">Innovations Shaping the Future of Technology</h3>
          <p className="article_summary">Discover groundbreaking technologies and visionary ideas that are revolutionizing industries and shaping the world of tomorrow.</p>
          <Link to="/article/2" className="browse_article">Read More</Link>
        </div>
      </div>
    </div>
    </>
  </div>
 

);

export default Home;
