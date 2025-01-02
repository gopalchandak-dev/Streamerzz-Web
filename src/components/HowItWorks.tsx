import { HOW_IT_WORKS_CONTENT } from "../constants";
import { motion } from "motion/react";

const stepsVariants = {
	hidden: { opacity: 0.25, y: 50 },
	visible: (i: any) => ({
		opacity: 1,
		y: 0,
		transtition: {
			duration: 0.6,
			delay: i * 0.3,
			ease: "easeOut",
		},
	}),
};
const HowItWorks = () => {
	return (
		<section id="works">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					className="border-t border-neutral-800 mb-16 text-center"
				>
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-r from-neutral-50 via-neutral-300 to-neutral-900  bg-clip-text text-transparent">
						{HOW_IT_WORKS_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4 text-neutral-400 max-w-xl mx-auto  ">
						{HOW_IT_WORKS_CONTENT.sectionDescription}
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{HOW_IT_WORKS_CONTENT.steps.map((item, index) => (
						<motion.div
							variants={stepsVariants}
							custom={index}
							className="bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col justify-between"
							key={index}
						>
							<div>
								<h3 className="text-xl mb-4 font-semibold">
									{item.title}
								</h3>
								<p className="text-neutral-400 mb-4">
									{item.description}
								</p>
							</div>
							<div className="flex justify-center">
								<img
									src={item.imageSrc}
									alt={item.imageAlt}
									className="rounded-lg"
								/>
							</div>
							{item.users && (
								<div className="flex justify-between items-center mt-4">
									<div className="flex -space-x-2">
										{item.users.map((item1, index) => (
											<img
												key={index}
												src={item1}
												alt={`Person ${index + 1}`}
												className="h-8 w-8 rounded-full border-2 border-black"
											/>
										))}
									</div>
									<button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white rounded-lg">
										Connect
									</button>
								</div>
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default HowItWorks;
