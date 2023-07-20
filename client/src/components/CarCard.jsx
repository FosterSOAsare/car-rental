import React from "react";
import styles from "../styles/car_card.module.scss";
import Image from "next/image";
import Link from "next/link";

import AirConditioned from "../assets/images/air-conditioned.png";
import DriveType from "../assets/images/type.png";
import PeopleImage from "../assets/images/people.png";

const CarCard = ({ image, seats, doors, transmission, name, loading, id }) => {
	return (
		<Link href={`/catalogue/${id}`} className={styles.car__card}>
			<div className={styles.card__image}>
				<Image src={image} alt={name} priority="high" />
			</div>
			<div className={styles.card__text}>
				<h3>{name}</h3>
				<div className={styles.car__pros}>
					<div>
						<Image src={PeopleImage} alt="Seats illustration" loading={loading} />
						<p>{seats} seats</p>
					</div>
					<div>
						<Image src={AirConditioned} alt="Air conditioner illustration" loading={loading} />
						<p> Air-Conditioned</p>
					</div>
					<div>
						<Image src={PeopleImage} alt="People illustration" loading={loading} />
						<p> {doors} Doors</p>
					</div>
					<div>
						<Image src={DriveType} alt="Drive type illustration" loading={loading} />
						<p> {transmission}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CarCard;
