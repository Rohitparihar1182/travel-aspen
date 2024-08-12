import { Link } from "react-router-dom";
import Image1 from "../assets/pexels-apasaric-1285625.jpg";
import Image2 from "../assets/pexels-asadphoto-1268855.jpg";
import Image3 from "../assets/pexels-elina-sazonova-1838554.jpg";
import Image4 from "../assets/pexels-salma-smida-594929-1375383.jpg";
import Image5 from "../assets/pexels-vince-2265876.jpg";

const RecommendedPlaces = [
    {
        name: "Explore Aspen",
        plan: "4N/5D",
        image: Image1,
        id: 1
    },
    {
        name: "Travel Aspen",
        plan: "2N/3D",
        image: Image2,
        id: 2
    },
    {
        name: "Explore Aspen",
        plan: "4N/5D",
        image: Image3,
        id: 3
    },
    {
        name: "Travel Aspen",
        plan: "2N/3D",
        image: Image4,
        id: 4
    },
    {
        name: "Stay in Aspen",
        plan: "2N/3D",
        image: Image5,
        id: 5
    },
]
const RecommendedSection = () => {
    return (
        <div className="p-6">
            <h3 className="font-semibold text-2xl">Recommended</h3>
            <div className="scrollbar-hidden grid grid-flow-col mt-4 gap-8 overflow-x-auto mb-4">

                {
                    RecommendedPlaces.map((item, idx) => {
                        return (
                            <Link to={`/place?id=${item.id}`} className="grow-1 min-w-[240px]" key={idx}>
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full object-cover rounded-2xl aspect-video block" />
                                    <div className="absolute text-white text-xs font-bold z-10 right-4 -bottom-4 p-1 rounded-3xl bg-white">
                                        <div className="p-2 rounded-3xl bg-[#395451]"><span>{item.plan}</span></div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold text-base">{item.name}</h4>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RecommendedSection