import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
	return (
		<div id={Component.name}>
			{/* <Header /> */}
			<Component {...pageProps} />
			{/* <Footer /> */}
		</div>
	);
}
