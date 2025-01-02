import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";

const App = () => {
	return (
		<main className="text-sm text-neutral-300 antialiased">
			<Navbar />
			<Hero />
			<HowItWorks />
			<KeyFeatures />
			<Price />
			<Testimonials />
			<Footer />
		</main>
	);
};
export default App;
