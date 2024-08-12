import { useState } from "react";
import Navbar from "../components/navbar";
import PopularSection from "../components/popularSection";
import RecommendedSection from "../components/recommendedSection";
import Topbar from "../components/topbar";
import Banner from "../components/banner";

const Home = () => {
    const [showBanner, setShowBanner] = useState(true);

    const removeBanner = () => {
        setShowBanner(false);
    };
    return (
        <>
            {showBanner ? <Banner removeBanner={removeBanner} /> : <div>

                <div className="isolate relative mb-[72px]">
                    <Topbar />
                    <PopularSection />
                    <RecommendedSection />
                </div>
                <Navbar />
            </div>}

        </>
    )
}


export default Home;