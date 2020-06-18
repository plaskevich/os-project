import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import SC from 'soundcloud';


function Browse() {
  const [track, setTrack] = useState(0);
  const [artist, setArtist] = useState(0);
  SC.get('/tracks/304941680').then(function(response){
    setTrack(response);
    setArtist(response.user.username);
  });
  
  return (
    <div>
      <div className="suggested">
        <ul className="list-inline">
          <li className="list-inline-item suggested-text">
            <p>SUGGESTED FOR YOU</p>
          </li>
          <li className="list-inline-item float-right mt-2">
            <Link to="/" className="show-more">show more</Link>
          </li>
        </ul>
        <img src={track.artwork_url} alt="artwork" ></img>
        <p>{track.title}</p>
        <p>{artist}</p>
      </div>
      <div className="genres">
        <ul className="list-inline">
          <li className="list-inline-item suggested-text">
            <p>GENRES</p>
          </li>
          <li className="list-inline-item float-right mt-2">
            <Link to="/" className="show-more">show more</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Browse;