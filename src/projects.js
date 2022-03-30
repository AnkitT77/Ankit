import React, { useEffect } from "react";
import Splittext from "./utils/splittext";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import object from "./utils/decriptiontext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
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
		<div className="md:px-16 px-5 py-20" id="projects" ref={ref}>
			<motion.h1
				className=" text-6xl font-display  select-none text-text"
				animate={animation}
			>
				{inView && <Splittext text="Selected Projects"></Splittext>}
			</motion.h1>
			{/*main projects  */}
			<div className=" flex flex-col gap-y-20  mt-16">
				{object.map((obj, index) => (
					<div className="max-w-6xl sm:flex justify-center h-72 " key={index}>
						<Description object={obj} />
					</div>
				))}
			</div>
		</div>
	);
}

function Description({ object }) {
	return (
		<>
			<div className="sm:w-1/2 w-full relative border border-gray-500 hover:border-blue-300 hover:shadow-md sm:border-none sm:hover:shadow-none">
				<img
					src={object.image}
					className="w-full h-full"
					alt={object.title}
				></img>
				<div className="sm:hidden absolute top-0 w-full h-full bg-back opacity-90"></div>
				<div className="sm:hidden absolute top-0  z-10  w-full h-full  flex flex-col gap-y-5 items-start justify-center px-7">
					<a href={object.link} className="text-text text-xl font-semibold">
						{object.title}
					</a>

					<p className=" text-white ">{object.description}</p>
					<div className="flex gap-x-3 text-gray-300">
						{object.language.map((lang, i) => (
							<p key={i}> {lang}</p>
						))}
					</div>
					<div className="flex gap-x-3">
						<a href={object.githubLink} >
							<FaGithub size={25} color={"white"} />
						</a>
						{object.link && (
							<a href={object.link} >
								<BiLinkExternal size={25} color={"white"} />
							</a>
						)}
					</div>
				</div>
			</div>

			<div className="hidden sm:flex flex-col gap-y-5 sm:items-start justify-center sm:w-2/5 pl-4">
				<a href={object.link} className="text-text text-xl font-semibold">
					{object.title}
				</a>

				<p className=" text-white ">{object.description}</p>
				<div className="flex gap-x-3 text-gray-300">
					{object.language.map((lang, i) => (
						<p key={i}> {lang}</p>
					))}
				</div>
				<div className="flex gap-x-2">
					<a href={object.githubLink} >
						<FaGithub size={25} color={"white"} />
					</a>
					{object.link && (
						<a href={object.link} >
							<BiLinkExternal size={25} color={"white"} />
						</a>
					)}
				</div>
			</div>
		</>
	);
}
