import React from "react";
import { FaReact, FaGitAlt, FaGithubSquare, FaCcStripe } from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiNodejs } from "react-icons/di";
import {
	SiNextDotJs,
	SiFirebase,
	SiStrapi,
	SiRedux,
	SiPostman,
} from "react-icons/si";
export default function Skill() {
	return (
		<div className="max-w-4xl mx-auto mt-16">
			<h2 className="text-2xl text-white text-center my-10">
				Tools & Technology
			</h2>
			<div className="flex gap-5 justify-center flex-wrap">
				<div className="border border-blue-300  items-center flex py-3 px-8  hover:border-text transform  ease-in duration-100 hover:scale-110">
					<DiJavascript1 size={50} color={"white"}></DiJavascript1>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<DiNodejs size={50} color={"white"}></DiNodejs>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<FaReact size={50} color={"white"}></FaReact>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<SiNextDotJs size={50} color={"white"}></SiNextDotJs>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<SiRedux size={50} color={"white"}></SiRedux>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<DiMongodb size={50} color={"white"}></DiMongodb>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<SiStrapi size={50} color={"white"}></SiStrapi>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<FaCcStripe size={50} color={"white"}></FaCcStripe>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<FaGitAlt size={50} color={"white"}></FaGitAlt>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<FaGithubSquare size={50} color={"white"}></FaGithubSquare>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<SiPostman size={50} color={"white"}></SiPostman>
				</div>
				<div className="border border-blue-300  items-center flex py-3  px-8 hover:border-text transform  ease-in duration-100 hover:scale-110">
					<SiFirebase size={50} color={"white"}></SiFirebase>
				</div>
			</div>
		</div>
	);
}
