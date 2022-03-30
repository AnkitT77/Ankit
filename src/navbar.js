import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
export default function Navbar() {
	const container = {
		close: {
			opacity: 0,
			x: 100,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: { type: "tween", staggerChildren: 0.3, delayChildren: 0.2 },
		},
		exit: {
			opacity: 0,
			x: 100,
			transition: {
				type: "tween",
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};
	const item = {
		show: { opacity: 1, y: { stiffness: 1000, velocity: -100 } },
		close: { opacity: 0, y: { stiffness: 1000 } },
	};
	const [show, setshow] = useState(true);
	return (
		<div className="">
			<div className=" p-4 fixed top-3 z-30 right-5 ">
				<div
					className="cursor-pointer"
					onClick={() => setshow((prev) => !prev)}
				>
					<IconContext.Provider
						value={{ className: "", size: "35", color: "white" }}
					>
						{show && (
							<div>
								<HiOutlineMenuAlt4 />
							</div>
						)}
					</IconContext.Provider>
				</div>
			</div>
			{!show && (
					<>
						<div
							className="fixed right-0 top-0 z-30 px-10 py-8 cursor-pointer"
							onClick={() => setshow((prev) => !prev)}
						>
							<CgClose size={30} color={"white"} />
						</div>
						<motion.div
							className="md:w-1/4 z-20 sm:w-2/5 w-full right-0 fixed h-full bg-nav top-0 flex flex-col items-center justify-center font-display overflow-hidden"
							variants={container}
							initial="close"
							animate="show"
							exit="exit"
						>
							<motion.div variants={item}>
								<a
									href="/"
									className="link text-gray-500 hover:text-text"
									onClick={() => setshow((prev) => !prev)}
								>
									Home
								</a>
							</motion.div>
							<motion.div variants={item}>
								<a
									href="#about"
									className="link text-gray-500 hover:text-text"
									onClick={() => setshow((prev) => !prev)}
								>
									About
								</a>
							</motion.div>
							<motion.div variants={item}>
								<a
									onClick={() => setshow((prev) => !prev)}
									href="#projects"
									className="link text-gray-500 hover:text-text"
								>
									Projects
								</a>
							</motion.div>

							<motion.div variants={item}>
								<a
									onClick={() => setshow((prev) => !prev)}
									href="#contact"
									className="link text-gray-500 hover:text-text"
								>
									Contact
								</a>
							</motion.div>
						</motion.div>
					</>
				)}

		</div>
	);
}
