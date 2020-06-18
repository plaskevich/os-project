import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="row" style={{margin: 0}}>
        <Link className="banner1 col">
          <p className="banner-text">EXPAND YOUR AUDIENCE</p>
        </Link>
        <Link className="banner2 col">
          <p className="banner-text align-self-center">DISCOVER NEW MUSIC</p>
        </Link>
      </div>
      <div className="bottom col">
        <p className="bottom-header">
        THERE IS MUCH MORE MUSIC THAN YOU CAN THINK OF
        </p>
        <p className="bottom-text">
        JOIN NOW OUR COMMUNITY OF UNDERGROUND MUSIC
        </p>
      </div>
    </div>
  );
}

export default Home;
