import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>⚽ SoccerHub</h2>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home Feed</Link>
        <Link to="/create" className="nav-item">Create Post</Link>
      </div>
    </nav>
  );
};

export default Navigation;
