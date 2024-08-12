import { useState } from "react";
import Filter from "./filter";

const filters = [
    "Location",
    "Hotels",
    "Food",
    "Adventure",
    "Travel",
    "Stay",
    "Motel",
    "Placeholder",
]

const Topbar = () => {
    const [activeFilter, setActiveFilter] = useState(0);

    const changeActiveFilter = (idx) => {
        setActiveFilter(idx);
    }

    return (
        <div className="p-6">
            <div className="flex justify-between">
                <div>
                    <h2>
                        <span className="font-medium text-sm">Explore</span>
                        <br />
                        <span className="font-semibold text-3xl">Aspen</span>
                    </h2>
                </div>
                <div>
                    <Filter handleClick={() => { }} activeOption={"Aspen, USA"} options={["Aspen, USA", "Chicago, USA", "Colombia, USA"]} />
                </div>
            </div>
            <div className="mt-6">
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Find things to do"
                            className="w-full rounded-full border-neutral-500 bg-blue-50/60 text-xs px-4 py-4 outline-none"
                        />
                    </div>
                </form>
            </div>
            <div className="scrollbar-hidden flex mt-8 gap-5 overflow-x-auto">
                {
                    filters.map((item, idx) => (
                        <div onClick={() => changeActiveFilter(idx)} className={`rounded-full p-2 px-6 bg-slate-100 flex items-center justify-center cursor-pointer ${activeFilter === idx ? "bg-blue-100 text-blue-500" : ""} `} key={idx}>
                            <p href="/" className="text-xs font-medium">{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Topbar;