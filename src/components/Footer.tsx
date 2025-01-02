import { FOOTER_CONTENT } from "../constants";
import { motion } from "motion/react";

const Footer = () => {
	return (
		<footer className="mt-20 text-neutral-400">
			<div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
					{FOOTER_CONTENT.sections.map((item, index) => (
						<div key={index}>
							<h2 className=" text-white font-medium mb-4">
								{item.title}
							</h2>
							<ul className="space-y-2">
								{item.links.map((link, index) => (
									<motion.li
										key={index}
										whileHover={{ scale: 1.01 }}
									>
										<a
											className="hover:text-white "
											href={link.url}
										>
											{link.text}
										</a>
									</motion.li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
					<div className="flex justify-between">
						<motion.p
							whileHover={{ scale: 1.02 }}
							className="text-sm hover:text-white "
						>
							{FOOTER_CONTENT.platformsText}
						</motion.p>
						<motion.p
							whileHover={{ scale: 1.02 }}
							className="text-sm hover:text-white "
						>
							{FOOTER_CONTENT.copyrightText}
						</motion.p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
