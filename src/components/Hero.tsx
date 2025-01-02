import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero.jpg";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { straggerChildren: 0.2 } },
};
const fadeInUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.9 } },
};
const Hero = () => {
	return (
		<motion.section
			id="hero"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="pt-28 lg:pt-36"
		>
			<div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center ">
				<motion.div
					variants={fadeInUpVariants}
					initial="hidden"
					animate="visible"
					className="mb-8 border-neutral-800 px-3 py-2  rounded-full text-sm border"
				>
					{HERO_CONTENT.badgeText}
				</motion.div>
				<motion.h1
					variants={fadeInUpVariants}
					initial="hidden"
					animate="visible"
					className="text-5xl lg:text-8xl my-4 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
				>
					{HERO_CONTENT.mainHeading.split("\n").map((item, index) => (
						<span key={index}>
							{item} <br />
						</span>
					))}
				</motion.h1>
				<motion.p
					variants={fadeInUpVariants}
					initial="hidden"
					animate="visible"
					className="mt-6 max-w-xl text-neutral-400"
				>
					{HERO_CONTENT.subHeading}
				</motion.p>
				<motion.div
					variants={fadeInUpVariants}
					initial="hidden"
					animate="visible"
					className="mt-6 space-x-1"
				>
					<Link to="hero" smooth={true} duration={500} offset={-40}>
						<motion.p
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.05 }}
							className="inline-block bg-blue-500 hover:bg-blue-600 font-medium px-6 py-3 rounded-lg text-white mb-4"
						>
							{HERO_CONTENT.callToAction.primary}
						</motion.p>
					</Link>

					<Link to="hero" smooth={true} duration={500} offset={-40}>
						<motion.p
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.05 }}
							className="inline-block border border-gray-500 px-6 py-3 rounded-lg font-medium text-white hover:border-gray-400"
						>
							{HERO_CONTENT.callToAction.secondary}
						</motion.p>
					</Link>
				</motion.div>
				<div className="py-10">
					<motion.p
						variants={fadeInUpVariants}
						initial="hidden"
						animate="visible"
						className="mb-8 text-center text-gray-400"
					>
						{HERO_CONTENT.trustedByText}
					</motion.p>
					<motion.div
						variants={fadeInUpVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-wrap justify-center gap-8"
					>
						{BRAND_LOGOS.map((item, index) => (
							<motion.img
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								key={index}
								src={item.src}
								alt={item.alt}
								className=" h-8"
							/>
						))}
					</motion.div>
				</div>
				<motion.div
					variants={fadeInVariants}
					initial="hidden"
					whileInView="visible"
					className="mt-12"
				>
					<img
						src={heroImage}
						alt="heroImage"
						className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Hero;
