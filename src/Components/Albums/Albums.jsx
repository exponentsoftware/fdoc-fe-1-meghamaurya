import React from "react";
import Album from "../Album/Album";
import "./styles.css";
const Albums = (props) => {
  return (
    <div>
      <h2 className="heading">Albums</h2>
      <div className="card-container">
        {props.albums.map((item) => (
          <Album key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
