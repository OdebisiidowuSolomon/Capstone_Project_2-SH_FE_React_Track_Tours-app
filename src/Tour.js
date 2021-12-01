import React, { useState } from "react";

export default function Tour({ tour, handleDelete }) {
  const [shortenText, setShortenText] = useState(true);

  const handleText = (text) => {
    return shortenText ? `${text.slice(0, 200)} ...` : `${text.slice(0)}`;
  };

  const handleTextButton = () => (shortenText ? "Show more" : "Show Less");

  return (
    <div className="single-tour" key={tour.id}>
      <img src={tour.image} alt="tourImage" className="img" />
      <div className="tour-content">
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <div className="tour-price">
            <h4>{tour.price}</h4>
          </div>
        </div>
        <div className="tour-body">
          {handleText(tour.info)}
          <button onClick={() => setShortenText((prev) => !prev)}>
            {handleTextButton()}
          </button>
        </div>
      </div>
      <footer>
        <button
          className="delete-btn"
          onClick={handleDelete.bind(this, tour.id)}
        >
          Not Interested
        </button>
      </footer>
    </div>
  );
}
