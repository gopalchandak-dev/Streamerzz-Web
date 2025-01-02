import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div className="fixed top-4 m-2 left-0 right-0 z-50">
			<div className="text-neutral-400 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl  border border-neutral-800">
				<Link to="hero" smooth={true} duration={500}>
					<img src={logo} alt="logo" className="w-28 h-[1.7rem]" />
				</Link>

				<div className="hidden  md:flex  space-x-6">
					<Link
						to="works"
						smooth={true}
						offset={-40}
						duration={500}
						className="cursor-pointer hover:text-neutral-200"
					>
						<motion.p whileHover={{ scale: 1.05 }}>
							How it works
						</motion.p>
					</Link>
					<Link
						to="pricing"
						smooth={true}
						duration={500}
						offset={-40}
						className="cursor-pointer hover:text-neutral-200"
					>
						<motion.p whileHover={{ scale: 1.05 }}>
							Pricing
						</motion.p>
					</Link>
					<Link
						to="testimonials"
						smooth={true}
						duration={500}
						offset={-40}
						className="cursor-pointer hover:text-neutral-200"
					>
						<motion.p whileHover={{ scale: 1.05 }}>
							Testimonials
						</motion.p>
					</Link>
				</div>

				<div className="hidden md:flex space-x-4 items-center">
					<Link to="hero" smooth={true} duration={500} offset={-40}>
						<motion.p
							whileHover={{ scale: 1.05 }}
							className="hover:text-neutral-200 cursor-pointer"
						>
							Login
						</motion.p>
					</Link>
					<Link to="hero" smooth={true} duration={500} offset={-40}>
						<a
							href="#"
							className="border border-neutral-700 text-white px-4 py-2  hover:bg-neutral-700 rounded-lg transition"
						>
							Get a Demo
						</a>
					</Link>
					<Link to="hero" smooth={true} duration={500} offset={-40}>
						<a
							href="#"
							className="bg-blue-600 text-white px-4 py-2   hover:bg-blue-500 rounded-lg transition"
						>
							Start Free Trial
						</a>
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={toggleOpen}
						className="text-white focus:outline-none"
						aria-label={isOpen ? "Close Menu" : "Open Menu"}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.5 }}
						>
							{isOpen ? (
								<RiCloseFill size={24} />
							) : (
								<RiMenu3Fill size={24} />
							)}
						</motion.div>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="md:hidden w-full bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2"
				>
					<div className="flex flex-col space-y-4">
						<Link
							to="works"
							smooth={true}
							offset={-40}
							duration={500}
							className="cursor-pointer hover:text-neutral-200"
						>
							<motion.p whileTap={{ scale: 0.95 }}>
								How it works
							</motion.p>
						</Link>
						<Link
							to="pricing"
							smooth={true}
							duration={500}
							offset={-40}
							className="cursor-pointer hover:text-neutral-200"
						>
							<motion.p whileTap={{ scale: 0.95 }}>
								Pricing
							</motion.p>
						</Link>
						<Link
							to="testimonials"
							smooth={true}
							duration={500}
							offset={-40}
							className="cursor-pointer hover:text-neutral-200"
						>
							<motion.p whileTap={{ scale: 0.95 }}>
								Testimonials
							</motion.p>
						</Link>

						<Link
							to="hero"
							smooth={true}
							duration={500}
							offset={-40}
							className="w-full"
						>
							<motion.p
								whileTap={{ scale: 0.95 }}
								className="text-start border border-neutral-700 text-white px-4 py-2 hover:bg-neutral-700 rounded-lg transition w-full r"
							>
								Get a Demo
							</motion.p>
						</Link>
						<Link
							to="hero"
							smooth={true}
							duration={500}
							offset={-40}
							className="w-full"
						>
							<motion.p
								whileTap={{ scale: 0.95 }}
								className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 rounded-lg transition w-full text-start"
							>
								Start Free Trial
							</motion.p>
						</Link>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default Navbar;
