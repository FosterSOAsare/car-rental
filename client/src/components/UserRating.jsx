import React from "react";
import Image from "next/image";

import styles from "../styles/user_rating.module.scss";
import Rating from "./Rating";

const UserRating = ({ name, reviews, spent, rating, comment, reply, image }) => {
	return (
		<article className={styles.user_rating}>
			<div className={styles.user_details}>
				<div className={styles.image}>
					<Image src={image} alt="User Image" fill sizes="200" />
				</div>
				<article className={styles.details}>
					<h3>{name}</h3>
					<p>
						Total Spent: <span>${spent}</span>
					</p>
					<p>
						Total Reviews: <span>{reviews}</span>
					</p>
				</article>
			</div>
			<article className={styles.user_comment}>
				<div className={styles.comment_info}>
					<div>
						<Rating rating={rating} />
					</div>
					<p>24-10-2022</p>
				</div>
				<p className={styles.comment}>{comment}</p>

				{!reply && <button className={styles.reply_comment}>Reply Comment</button>}

				{reply && (
					<article className={styles.comment_reply}>
						<p>
							<span>Admin Reply ~ </span> <br /> {reply}
						</p>
					</article>
				)}
			</article>
		</article>
	);
};

export default UserRating;
