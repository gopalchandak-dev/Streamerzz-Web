import { motion } from "motion/react";
import { KEY_FEATURES_CONTENT } from "../constants";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			when: "beforeChildren",
		},
	},
};

const featureVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const KeyFeatures = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 mt-20">
			<div className="border-t border-neutral-800 text-center mb-12">
				<h2 className="mt-20 text-3xl lg:text-5xl  tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-900 text-transparent bg-clip-text py-3">
					{KEY_FEATURES_CONTENT.sectionTitle}
				</h2>
				<p className="mt-4 text-gray-400">
					{KEY_FEATURES_CONTENT.sectionDescription}
				</p>
			</div>
			<motion.div
				className="flex flex-wrap justify-between"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				{KEY_FEATURES_CONTENT.features.map((item) => (
					<motion.div
						key={item.id}
						className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6"
						variants={featureVariants}
					>
						<div className="flex justify-center items-center mb-4">
							{item.icon}
						</div>
						<h3 className="text-xl">{item.title}</h3>
						<p className="mt-2 text-neutral-400">
							{item.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default KeyFeatures;
