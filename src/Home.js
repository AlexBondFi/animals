import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="grid">
        <Link to="/animals">
          <div className="home_card animals">
            <h2>Animals</h2>
          </div>
        </Link>
        <Link to="/birds">
          <div className="home_card birds">
            <h2>Birds</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;