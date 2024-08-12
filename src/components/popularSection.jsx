import { Link } from "react-router-dom";
import Image1 from "../assets/pexels-apasaric-1285625.jpg";
import Image2 from "../assets/pexels-asadphoto-1268855.jpg";
import Image3 from "../assets/pexels-elina-sazonova-1838554.jpg";
import Image4 from "../assets/pexels-salma-smida-594929-1375383.jpg";
import Image5 from "../assets/pexels-vince-2265876.jpg";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const PopularPlaces = [
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


const PopularSection = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-2xl">Popular</h3>
                <div className="">
                    <a href="/" className="text-blue-500 font-semibold">See All</a>
                </div>
            </div>
            <div className="scrollbar-hidden grid grid-flow-col mt-4 gap-8 overflow-x-auto mb-4">
                {
                    PopularPlaces.map((item, idx) => {
                        return (
                            <Link to={`/place?id=${item.id}`} className="grow-1 min-w-[240px]" key={idx}>
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl aspect-[10/14] block" />
                                    <div className="absolute text-white text-xs font-bold z-10 left-4 right-4 bottom-4">
                                        <div className="bg-[#395451] w-fit p-1 px-3 rounded-3xl">
                                            <h4 className="font-semibold text-base">{item.name}</h4>
                                        </div>

                                        <div className="w-full mt-4 flex gap-4 items-center justify-between">
                                            <div className="bg-[#395451] p-1 px-3 rounded-3xl">
                                                <div className="flex items-center gap-2">
                                                    <FaStar className="text-[#fcaa18]" />
                                                    <h4>{item.ratings}</h4>
                                                </div>
                                            </div>
                                            <div className="bg-white p-2 rounded-full">
                                                {item.isLiked ? <FaHeart className="w-4 h-4 text-red-500" /> : <CiHeart className="w-4 h-4 text-red-500" />}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </Link>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default PopularSection;