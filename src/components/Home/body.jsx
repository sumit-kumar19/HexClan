import MainContent from "./maincontent";
import AnouncementCarousel from "./carousel";
import ContactUs from "./contact";
import Events from "./events";
import About from "./about";
export default function Body() {

    return (
        <>
            {/* Carousel */}
            <AnouncementCarousel/>
            {/* Main Content */}
            <MainContent />
            {/* Events */}
            <Events />
            {/* About Us */}
            <About />
            {/* Contact Us */}
            <ContactUs />
        </>
    )
}