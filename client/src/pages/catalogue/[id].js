import React, { useEffect, useMemo, useState } from "react";
import styles from "./Catalogue.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import cars from "@/assets/data/cars";

import CarCard from "@/components/CarCard";
import MainPage from "@/assets/layout/MainPage";
import Rating from "@/components/Rating";
import Range from "@/components/Range";
import UserRating from "@/components/UserRating";

import ChevroletTrailblazer from "@/assets/images/chevrolet-trailblazer.png";
import Gear from "@/assets/images/gear.png";
import Gear2 from "@/assets/images/gear2.png";
import Steering from "@/assets/images/steering.png";

import { HiTrendingUp } from "react-icons/hi";
import ratings from "@/assets/data/car_ratings";

const SingleCarPage = () => {
	const { query } = useRouter();
	let [carDetails, setCarDetails] = useState({ properties: {} });
	useEffect(() => {
		if (query.id) {
			let data = cars.find((car) => car.id == query.id);
			if (data) {
				let { name, seats, doors, image, transmission, id, trending } = data;
				data = {
					name,
					id,
					trending,
					image,
					properties: {
						availability: query.id % 2 === 0 ? "Currently available" : "Not available",
						transmission,
						doors,
						seats,
						"fuel Type": "Gas",
						"fuel capacity": Math.floor(Math.random() * 50) + "L",
						"air conditioned": "Yes",
					},
				};
			}

			setCarDetails(data);
		}
	}, [query?.id]);

	return (
		<MainPage>
			<main className={`${styles.catalogue} ${styles.single}`}>
				<section className={styles.car__details}>
					<article className={styles.details}>
						<h3>Details</h3>
						<ul>
							{Array.from(Object.keys(carDetails?.properties)).map((detail, index) => (
								<li key={index}>
									<p>{detail}</p>
									<p
										className={styles.value}
										style={{ color: index === 0 ? (carDetails?.properties[detail] === "Currently available" ? "green" : "red") : "rgba(194, 194, 194, 1)" }}>
										{carDetails?.properties[detail]}
									</p>
								</li>
							))}
						</ul>
						<Link href={`/hire?id=${query?.id}`} className={styles.hire}>
							Hire now
						</Link>
					</article>
					<article className={styles.images}>
						<h1>{carDetails?.name}</h1>
						<div className={styles.lead__image}>
							<div className={styles.inner}>
								<Image src={carDetails?.image} alt={carDetails?.name} fill sizes="200" />
							</div>
						</div>
						<div className={styles.support__images}>
							<div className={styles.support__image}>
								<Image src={Gear2} fill alt="" sizes="200" loading="lazy" />
							</div>
							<div className={styles.support__image}>
								<Image src={Steering} fill alt="" sizes="200" loading="lazy" />
							</div>

							<div className={styles.support__image}>
								<Image src={Gear} fill alt="" sizes="200" loading="lazy" />
							</div>
						</div>
					</article>
				</section>
				<section id={styles.reviews}>
					<div className={styles.top}>
						<h1>Reviews</h1>
						<div>March 2021- February 2022</div>
					</div>
					<div className={styles.metrics}>
						<div className={styles.metric}>
							<h3>Total Reviews</h3>
							<div className={styles.values__container}>
								<p className={styles.value}>10.0k</p>
								<div className={styles.review}>
									<p>21%</p>

									<HiTrendingUp className="text-3xl" />
								</div>
							</div>
							<p className={styles.desc}>Growth in reviews on this year</p>
						</div>

						<div className={styles.metric}>
							<h3>Average Rating</h3>
							<div className={styles.values__container}>
								<p className={styles.value}>4.0</p>
								<Rating rating={4} />
							</div>
							<p className={styles.desc}>Average rating in this year</p>
						</div>
						<div className={styles.metric}>
							{[
								{ value: "2k", color: "#3EB69F" },
								{ value: "1k", color: "#D985F8" },
								{ value: 500, color: "#EEBE50" },
								{ value: 200, color: "#37BFEA" },
								{ value: "Ok", color: "#E18239" },
							].map((range, index, arr) => (
								<Range key={index} index={index} {...range} percent={(arr.length - index - 1) * 25} />
							))}
						</div>
					</div>
					<section className={styles.user_rating}>
						{ratings.map((rating, index) => (
							<UserRating key={index} {...rating} />
						))}
					</section>
				</section>
				<section id={styles.recommendations}>
					<div className={styles.recommendations__container}>
						<h1>You may also like</h1>
						<article>
							{cars
								.filter((car) => car.trending)
								.map((e, index) => {
									return <CarCard {...e} key={index} loading="lazy" />;
								})}
						</article>
					</div>
				</section>
			</main>
		</MainPage>
	);
};

export default SingleCarPage;
