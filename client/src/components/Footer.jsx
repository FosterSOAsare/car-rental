import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

import { TiSocialFacebookCircular, TiSocialTwitter } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<h3>Ritz Car Hire</h3>
				<nav className={styles.footer__navigation}>
					<Link href="/">Home</Link>
					<Link href="/">Catalogue</Link>
					<Link href="/">Hire</Link>
					<Link href="/">Contact Us</Link>
				</nav>
				<div className={styles.footer__socials}>
					<TiSocialFacebookCircular />
					<BsInstagram />
					<TiSocialTwitter />
				</div>
				<p>&#169; 2023 All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
