import React from 'react'
import {
	FaGithub,
	FaLinkedinIn,
	FaHackerrank,
	FaWhatsapp,
	FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
   return (
			<div
				className="h-36 w-full border-t border-gray-700 flex sm:justify-around items-center justify-center sm:flex-row flex-col gap-y-5"
				id="contact"
			>
				<div className="flex gap-x-3">
					<a href="https://github.com/dharmik-18">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-nav transform hover:scale-110">
							<FaGithub size={25} color={"white"} />
						</div>
					</a>
					<a href="https://www.linkedin.com/in/dharmik-rathod/">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-blue-700 transform hover:scale-110">
							<FaLinkedinIn size={25} color={"white"} />
						</div>
					</a>
					<a href="https://www.hackerrank.com/Dharmik91">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-green-500 transform hover:scale-110">
							<FaHackerrank size={25} color={"white"} />
						</div>
					</a>

					<a href="https://www.instagram.com/rathoddharmik18/">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-pink-500 transform hover:scale-110">
							<FaInstagram size={25} color={"white"} />
						</div>
					</a>
					<a href="https://wa.me/919967950259">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-green-600 transform hover:scale-110">
							<FaWhatsapp size={25} color={"white"} />
						</div>
					</a>
					<a href="mailto:rathoddharmik9@gmail.com?subject=Mail from Our Site">
						<div className="p-3 rounded-full flex justify-center items-center bg-back border border-gray-700 hover:bg-red-500 transform hover:scale-110">
							<SiGmail size={25} color={"white"} />
						</div>
					</a>
				</div>
				<p className="text-gray-400">Designed and developed by Dharmik</p>
			</div>
		);
}
