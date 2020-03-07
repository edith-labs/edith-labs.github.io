import React from 'react';

function ProductDescription({ title, description, icon }) {
  return (
    <div class='column'>
      {icon}
      <h3 class='title is-size-4'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;