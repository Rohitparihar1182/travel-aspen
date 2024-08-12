import { motion } from "framer-motion";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaAngleDown, FaHeart, FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Image1 from "../assets/pexels-apasaric-1285625.jpg";
import Image2 from "../assets/pexels-asadphoto-1268855.jpg";
import Image3 from "../assets/pexels-elina-sazonova-1838554.jpg";
import Image4 from "../assets/pexels-salma-smida-594929-1375383.jpg";
import Image5 from "../assets/pexels-vince-2265876.jpg";
import { PiWifiHighLight } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Places = [
    {
        name: "Travel Aspen",
        plan: "2N/3D",
        image: Image4,
        ratings: 4.1,
        isLiked: false,
        id: 3
    },
    {
        name: "Stay in Aspen",
        plan: "2N/3D",
        image: Image5,
        ratings: 4.5,
        isLiked: true,
        id: 5
    },
    {
        name: "Explore Aspen",
        plan: "4N/5D",
        image: Image1,
        ratings: 3.9,
        isLiked: false,
        id: 1
    },
    {
        name: "Travel Aspen",
        plan: "2N/3D",
        image: Image2,
        ratings: 4.3,
        isLiked: true,
        id: 2
    },
    {
        name: "Explore Aspen",
        plan: "4N/5D",
        image: Image3,
        ratings: 3.7,
        isLiked: false,
        id: 3
    },
]


const Place = () => {
    const [descExpanded, setDescExpanded] = useState(false);

    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate magni est provident deleniti animi maxime ipsum illo blanditiis explicabo eum nobis ducimus tenetur delectus dicta eaque earum, fugiat rem quam ratione repellat? Doloribus fuga esse odit magnam. Qui molestiae vero ipsum quasi. Blanditiis minima porro inventore quidem totam harum!`

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    const data = Places.find(item => item.id === Number(id));

    return (
        <div className="p-6 md:p-8 mb-[100px]">
            <div className="relative">
                <img className="aspect-square rounded-2xl object-cover" src={data.image} alt={data.name} />
                <div className="absolute text-white text-xs font-bold z-10 right-4 -bottom-4 p-1 rounded-3xl bg-white">
                    <div className="p-1 rounded-3xl">{data.isLiked ? <FaHeart className="w-6 h-6 text-red-500" /> : <CiHeart className="w-6 h-6 text-red-500" />}</div>
                </div>
            </div>
            <div className="mt-10 flex justify-between">
                <div>
                    <h3 className="font-semibold text-2xl">{data.name}</h3>
                    <div className="mt-1 flex items-center gap-2">
                        <FaStar className="text-[#fcaa18]" />
                        <h4>{data.ratings} &nbsp; ({Math.floor(data.ratings * 100)} Reviews)</h4>
                    </div>
                </div>
                <div className="">
                    <a href="/" className="text-blue-500 font-bold">Show Map</a>
                </div>
            </div>
            <div className="mt-6">
                <motion.p
                    layout
                    transition={{ duration: 0.2, type: "just" }}
                    className="font-medium cursor-pointer"
                    onClick={() => setDescExpanded(!descExpanded)}
                >
                    <span className="text-base">

                        {!descExpanded ? description.slice(0, 150) + " ..." : description}
                    </span>
                </motion.p>
                <button onClick={() => setDescExpanded(prev => !prev)} className="flex items-center text-blue-500 font-bold mt-2 cursor-pointer">
                    <span>Read More</span>
                    <motion.div><FaAngleDown className="w-4 h-4" /></motion.div>
                </button>
            </div>
            <div className="mt-6">
                <div>
                    <h4 className="font-semibold text-xl">Facilities</h4>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-2 text-neutral-700 text-xs">
                    <div className="flex flex-col justify-center items-center aspect-square rounded-2xl gap-2 bg-blue-50">
                        <PiWifiHighLight className="w-8 h-8" />
                        <span>Wi-Fi</span>
                    </div>
                    <div className="flex flex-col justify-center items-center aspect-square rounded-2xl gap-2 bg-blue-50">
                        <MdDinnerDining className="w-8 h-8" />
                        <span>Dinner</span>
                    </div>
                    <div className="flex flex-col justify-center items-center aspect-square rounded-2xl gap-2 bg-blue-50">
                        <FaBath className="w-8 h-8" />
                        <span>1 Tub</span>
                    </div>
                    <div className="flex flex-col justify-center items-center aspect-square rounded-2xl gap-2 bg-blue-50">
                        <FaSwimmingPool className="w-8 h-8" />
                        <span>Pool</span>
                    </div>
                </div>
            </div>
            <div className="fixed left-0 right-0 bottom-0 p-6 rounded-t-2xl bg-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-xl font-semibold">Price</h4>
                        <p className="text-4xl font-bold text-emerald-500">$199</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white rounded-2xl h-full px-10 py-6 flex items-center gap-4 text-xl font-semibold">
                            Book Now
                            <FaArrowRightLong className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Place;