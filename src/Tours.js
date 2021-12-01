import React, { useState } from "react";
import Tour from "./Tour";

export default function Tours({ tours: tourx }) {
  const [tours, setTours] = useState(tourx);

  const handleDelete = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  const handleRefresh = () => {
    //Reset the tour with the data gotten
    setTours(tourx);
  };

  return tours.length === 0 ? (
    <div className="title">
      <h2>No More Tours Remaining</h2>
      <button className="btn" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  ) : (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => (
        <Tour tour={tour} key={tour.id} handleDelete={handleDelete} />
      ))}
    </>
  );
}
