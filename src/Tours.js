import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tours() {
	const [tour, setTour] = useState("");

	const getAllTourInfo = () => {
		const url = "https://course-api.com/react-tours-project";
		axios
			.get(url)
			.then((res) => {
				const tour = res.data;
				setTour(tour);
			})
			.catch((error) => console.error(`Error: ${error}`));
	};

	useEffect(getAllTourInfo, []);

	const handleRefresh = () => {
		//Reset the tour with the data gotten
	};

	const removeTour = (id) => {
		let currentTour = tour.filter((t) => t.id !== id);
		setTour(currentTour);
	};

	return tour.length === 0 ? (
		<>
			<h2>No more Tours remaining</h2>
			<div className="btn" onClick={handleRefresh}>
				Refresh
			</div>
		</>
	) : (
		<>
			<h2>Our Tours</h2>

			{tour.map((tour) => (
				<div className="">
					<img src={tour.image} alt={tour.name} />
					<div className="">
						<div className="">
							<h4> {tour.name} </h4>
							<div className="">
								<h4>{tour.price} </h4>
							</div>
							<div className="">{tour.info}</div>
						</div>
					</div>
					<footer>
						<button className="" onClick={() => removeTour(tour.id)}>
							Not Interested
						</button>
					</footer>
				</div>
			))}
		</>
	);
}
