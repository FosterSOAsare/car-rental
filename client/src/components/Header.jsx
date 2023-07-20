import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
	const { pathname } = useRouter();

	return (
		<header className={styles.header} id="header">
			<div className={styles.header__container}>
				<Link href="/">Ritz Car Hire</Link>
				<nav className={styles.header__navigation}>
					<Link href="/" className={pathname === "/" ? styles.active : ""}>
						Home
					</Link>
					<Link href="/catalogue" className={pathname === "/catalogue" ? styles.active : ""}>
						Catalogue
					</Link>
					<Link href="/hire" className={pathname === "/hire" ? styles.active : ""}>
						Hire
					</Link>
					<Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
						Contact Us
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
