import React from 'react';

const Card = ({ href, bgImg, title, description, tags }) => (
  <div className="card-grid-space">
    <a className="card"  href={href} target='_blank' style={{ '--bg-img': `url(${bgImg})` }}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <div className="tag" key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </a>
  </div>
);

export default Card;