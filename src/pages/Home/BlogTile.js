import { Link } from 'gatsby';
import React from 'react';

function BlogTile({ title, excerpt, permalink }) {
  return (
    <Link to={permalink} className="tile is-child is-info is-bold notification tile-link">
      <p className="title">{title}</p>
      <p>{excerpt}</p>
    </Link>
  );
}

export default BlogTile;
