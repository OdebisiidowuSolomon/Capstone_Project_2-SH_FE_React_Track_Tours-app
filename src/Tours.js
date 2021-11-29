import React, { useState } from "react";

export default function Tours({ tours: tourx }) {
  const [shortenText, setShortenText] = useState(true);
  const [tours, setTours] = useState(tourx);

  const handleText = (text) => {
    return shortenText ? `${text.slice(0, 200)} ...` : `${text.slice(0)}`;
  };

  const handleTextButton = () => (shortenText ? "Show more" : "Show Less");

  const handleDelete = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <>
      {tours.length > 0 ? (
        <>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>
          {tours.map((tour) => (
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
          ))}
        </>
      ) : (
        <div className="title">
          <h2>No More Tours Remaining</h2>
          <button className="btn" onClick={() => setTours(tourx)}>
            Refresh
          </button>
        </div>
      )}
    </>
  );
}
