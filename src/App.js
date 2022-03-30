import "./App.css";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import Home from "./home";
import Navbar from "./navbar";
import About from "./About";
import Projects from "./projects";
import Footer from "./footer";
import loader from "./utils/loder.json";


function App() {
		const [state, setstate] = useState(true);

	 const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: loader,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};
	useEffect(() => {
			setstate(false);
	}, []);

	return (
		<>
			{state ? (
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
					//isStopped={state}
				/>
			) : (
				<div className="w-full   bg-back">
					<Navbar />
					<Home />
					<About />
					<Projects />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;

