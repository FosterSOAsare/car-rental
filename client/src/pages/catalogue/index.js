import React, { useState } from "react";
import styles from "./Catalogue.module.scss";
import { useRouter } from "next/router";

import cars from "@/assets/data/cars";
import filters from "@/assets/data/filters";

import CarCard from "@/components/CarCard";
import MainPage from "@/assets/layout/MainPage";
import { Main } from "next/document";

const Catalogue = () => {
	const router = useRouter();
	const { query } = router;

	let [limit, setLimit] = useState(9);
	let [filter, setFilter] = useState(
		filters.map((e) => {
			return { [e.title.toLowerCase()]: [] };
		})
	);
	function loadMoreCars() {
		setLimit((prev) => (prev + 3 < cars.length ? prev + 3 : cars.length));
	}

	function filterCars(e) {
		e.preventDefault();
		console.log(filter);
	}

	function toggleFilterOption(type, value) {
		type = type.toLowerCase();
		setFilter((prev) => {
			return [
				...prev.map((e) => {
					return e[type] ? { ...e, [type]: e[type].includes(value) ? e[type].filter((option) => option !== value) : [...e[type], value] } : e;
				}),
			];
		});
	}
	return (
		<MainPage>
			<main className={styles.catalogue}>
				<aside id={styles.filters}>
					<h3 className={styles.catalogue__title}>FILTERS</h3>
					<form onSubmit={filterCars}>
						{filters.map((filter, index) => (
							<div key={index} className={styles.catalogue__filter}>
								<h3>{filter.title}</h3>
								{filter.options.map((option, index) => (
									<div className={styles.filter__option} key={index}>
										<input
											type="checkbox"
											id={option.toLowerCase()}
											name={filter.title.toLowerCase()}
											// value={option.toLowerCase()}
											onChange={() => toggleFilterOption(filter.title, option)}
										/>
										<label htmlFor={option.toLowerCase()}>{option}</label>
									</div>
								))}
							</div>
						))}
						<button>Filter</button>
					</form>
				</aside>
				<section id={styles.content}>
					<h3 className={styles.content__title}>CATALOGUE</h3>
					<p className={styles.content__desc}>Showing {limit} of 20 cars</p>
					<article className={styles.content__catalogue}>
						{cars.map((car, index) => {
							if (index + 1 <= limit) {
								return <CarCard {...car} key={index} loading="lazy" />;
							}
						})}
					</article>

					{limit < cars.length && (
						<button className="loadMore" onClick={() => loadMoreCars()}>
							See More
						</button>
					)}
				</section>
			</main>
		</MainPage>
	);
};

export default Catalogue;
