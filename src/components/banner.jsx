import BgImage from "../assets/banner bg.jpg";

const Banner = ({ removeBanner }) => {
    return (
        <div className="relative overflow-hidden h-screen">
			<div className="absolute inset-0">
				<img
					src={BgImage}
					alt="bg"
					className="w-full h-full block object-cover"
				/>
			</div>
			<div className="relative z-10 p-8 flex flex-col justify-between h-full">
				<div className="">
					<h2
						style={{ fontFamily: "hiatus", fontSize: "120px" }}
						className="text-center text-white"
					>
						Aspen
					</h2>
				</div>
				<div
					className="text-white"
					style={{ fontFamily: "monospace", letterSpacing: "0.5px" }}
				>
					<h4 className="text-2xl font-light">Plan your</h4>
					<h3 className="text-4xl font-semibold">
						Luxurious
						<br /> Vacation
					</h3>
					<button onClick={removeBanner} className="bg-blue-500 block w-full md:w-auto md:px-12 mt-4 rounded-xl text-xl p-4">
						Explore
					</button>
				</div>
			</div>
		</div>
    )
}

export default Banner;