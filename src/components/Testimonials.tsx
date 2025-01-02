import { motion } from "motion/react";
import { TESTIMONIALS_CONTENT } from "../constants";

const testimonialVariants = {
	hidden: { opacity: 0, y: 50 },
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

const Testimonials = () => {
	return (
		<section id="testimonials">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<motion.div
					className="text-center mb-12 border-t border-neutral-800"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter py-3 bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-900  bg-clip-text text-transparent">
						{TESTIMONIALS_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4 text-neutral-400">
						{TESTIMONIALS_CONTENT.sectionDescription}
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
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{TESTIMONIALS_CONTENT.reviews.map((item, index) => (
						<motion.div
							key={index}
							custom={index}
							variants={testimonialVariants}
							className="mt-10 flex flex-col justify-center items-center overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10"
						>
							<p className="mb-4 text-neutral-200">
								{item.review}
							</p>
							<div className="flex items-center mt-4">
								<img
									src={item.image}
									alt="Image"
									className="h-12 w-12 rounded-full mr-4"
								/>
								<div>
									<p className="text-sm font-semibold text-white">
										{item.name}
									</p>
									<p className="text-sm text-gray-500">
										{item.title}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
