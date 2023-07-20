import React from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "../pages/catalogue/Catalogue.module.scss";

const Range = ({ value, index, percent, color }) => {
	return (
		<article>
			<div className={styles.range}>
				<div className={styles.range__stars}>
					<AiFillStar className="star-empty" style={{ fontSize: "24px" }} />
					<p>{index + 1}</p>
				</div>
				<div className={styles.bar} style={{ width: percent === 0 ? "10px" : percent + "%", background: color, display: "block" }}>
					<p style={{ visibility: "hidden" }}>a</p>
				</div>
				<p>{value}</p>
			</div>
		</article>
	);
};

export default Range;
