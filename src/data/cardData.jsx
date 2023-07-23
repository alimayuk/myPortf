import React from 'react';

const Card = ({ href, backgroundImage, title, description, tags }) => (
  <><div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <p className="title">{title}</p>
    <div className="card-hidden">
      <p className="title-in">{title}</p>
      <p>{description}</p>
      <a className="button" href={href}>{tags}</a>
    </div>
  </div>
  <div className="card-border"></div></>
);

export default Card;