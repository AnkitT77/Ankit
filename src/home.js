import React from "react";
import { Particle } from "./utils/particle";
import Splittext from "./utils/splittext";

export default function Home() {
	return (
		<>
			<div className="relative w-full h-screen " id="#home">
				<Particle />
			
				<div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:max-w-lg items-center  flex flex-col text-center gap-y-8">
					<h1 className=" text-5xl sm:text-7xl font-display  select-none text-white">
						<Splittext text="Hi, I'm, Dharmik Web developer"></Splittext>
					</h1>
					<a
						href="../Dharmik.pdf"
						download
						className="hover:bg-text transition duration-150 ease-in hover:text-back  px-5 py-3 text-text border border-text max-w-xs font-body tracking-wide"
					>
						Download My Resume
					</a>
				</div>
			</div>
		</>
	);
}
