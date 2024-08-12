import { FaHome } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className="fixed left-0 right-0 bottom-0 p-6 rounded-t-2xl bg-blue-50">
            <ul className="flex gap-2 justify-around">
                <li>
                    <a href="/"><FaHome className="w-6 h-6 text-blue-500" /></a>
                </li>
                <li>
                    <a href="/data-visualize"><FaWpexplorer className="w-6 h-6 text-blue-500" /></a>
                </li>
                <li>
                    <a href="/"><CiHeart className="w-6 h-6 text-blue-500" /></a>
                </li>
                <li>
                    <a href="/"><RxAvatar className="w-6 h-6 text-blue-500" /></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar