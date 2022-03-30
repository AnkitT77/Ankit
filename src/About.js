import React, { useEffect } from "react";
import Skill from "./skill";
import Splittext from "./utils/splittext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function About() {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce:true,
	});
	const animation = useAnimation();
	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1,
				},
			});
		}
		if (!inView) {
			animation.start({
				opacity: 0,
			});
		}
	}, [animation, inView]);
	return (
		<div className="py-16 md:px-16 px-5 " id="about" ref={ref}>
			<motion.h1
				className=" text-6xl font-display  select-none text-text"
				animate={animation}
			>
				{inView && <Splittext text="Me, Myself and I"></Splittext>}
			</motion.h1>

			<div className="flex items-center mt-4 md:flex-row flex-col gap-y-10 ">
				{/* left */}
				<div className="w-full md:mt-0 mt-8">
					<div className="flex flex-col gap-y-4 max-w-  fonr-body text-white text-lg ">
						<p>
							I'm a web developer with a focus on building{" "}
							<span className="text-text font-semibold">
								Web Technologies and Products
							</span>{" "}
							based on{" "}
							<span className="text-text font-semibold">MERN stack</span> and
							Mordern javascript framework like{" "}
							<span className="text-text font-semibold">React and Nextjs.</span>
						</p>
						<p>
							Well-organised person, Self-motivated, Problem Solver, Independent
							Employee with high attention to detail. Fan of Football, outdoor
							activities, Travelling.
						</p>
						<p>
							If you're looking for a developer to add to your team, I'd love to
							hear from you!
						</p>
					</div>
				</div>
				{/* right */}
				<div className="w-full  flex justify-center">
					<div className="h-80 w-96">
						<img
							src="../background.svg"
							className="w-full h-full"
							alt="hero back"
						></img>
					</div>
				</div>
			</div>
			<Skill />
		</div>
	);
}
