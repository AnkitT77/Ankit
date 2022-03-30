// Complete React Code
import React from "react";
import Particles from "react-tsparticles";

export function Particle() {
	return (
		<div className="App absolute top-0 left-0 w-full h-full">
			<Particles
				id="tsparticles"
				options={{
					background: {
						color: {
							value: "#1d1d1d",
						},
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "grab",
								parallax: { enable: false, force: 2, smooth: 10 },
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 10,
							},
							connect: {
								distance: 100,
								lineLinked: { opacity: 0.5 },
								radius: 60,
							},
							grab: { distance: 200, lineLinked: { opacity: .5 } },

							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#68D9B5",
						},
						links: {
							color: "#68D9B5",
							distance: 150,
							enable: true,
							opacity: 0.4,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 30,
						},
						opacity: {
							value: 0.3,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
}
