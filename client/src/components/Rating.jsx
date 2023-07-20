import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating }) => {
	const [stars, setStars] = useState([]);
	useEffect(() => {
		setStars([]);
		let diff = [];
		if (rating > 5) rating = 5;
		if (rating < 0) rating = 0;

		for (let i = 0; i < 5; i++) {
			diff.push(i + 1 <= rating ? "filled" : "empty");
		}
		setStars(diff);
	}, []);
	return (
		<>
			{stars.map((star, index) => {
				return star === "filled" ? <AiFillStar key={index} className="star-filled" /> : <AiFillStar key={index} className="star-empty" />;
			})}
		</>
	);
};

export default Rating;
