import React from 'react';

const Details = (props) => {
  return (
      <div className="details" key={props.info.id}>
        <div className="avatar"><img src={props.info.avatar} alt=""/></div>
        <div className="name">{props.info.name}</div>
        <div className="city">{props.info.details.city}</div>
        <div className="company">{props.info.details.company}</div>
        <div className="position">{props.info.details.position}</div>
      </div>
  );
};

export default Details;