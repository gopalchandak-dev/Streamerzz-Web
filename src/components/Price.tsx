import { motion } from "motion/react";
import { PLANS_CONTENT } from "../constants";

const childVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: (i: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * i,
			duration: 0.6,
			ease: "easeIn",
		},
	}),
};
const Price = () => {
	return (
		<section id="pricing">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<motion.div
					className="text-center mb-12 border-t border-neutral-800"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duraiotn: 0.6, ease: "easeOut" }}
				>
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-6 bg-clip-text text-transparent">
						{PLANS_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4 text-neutral-400">
						{PLANS_CONTENT.sectionDescription}
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={{
						visible: {
							transition: { staggerChildren: 0.5 },
						},
					}}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{PLANS_CONTENT.plans.map((item, index) => (
						<motion.div
							custom={index}
							variants={childVariants}
							className={`p-8 rounded-xl shadow-lg bg-neutral-950 ${
								item.popular
									? "border border-blue-900/80"
									: "border border-neutral-800"
							}`}
							key={index}
						>
							{item.popular && (
								<div className="text-center mb-4">
									<span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-full uppercase">
										{PLANS_CONTENT.popularBadge}
									</span>
								</div>
							)}
							<h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
								{item.name}
							</h3>
							<p className="text-neutral-400 mb-6">
								{item.description}
							</p>
							<div className="text-2xl lg:text-3xl font-medium mb-6">
								{item.price}
							</div>
							<ul className="mb-6 space-y-2 text-neutral-400">
								{item.features.map((fea, index) => (
									<li
										key={index}
										className="flex items-center"
									>
										<span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
										{fea}
									</li>
								))}
							</ul>
							<button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white">
								{PLANS_CONTENT.ctaText}
							</button>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Price;
