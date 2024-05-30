import MainContent from "./maincontent";
import AnouncementCarousel from "./carousel";
import ContactUs from "./contact";
import Events from "./events";
export default function Body() {

    return (
        <>
            {/* Carousel */}
            <AnouncementCarousel/>
            {/* Main Content */}
            <MainContent />
            {/* Events */}
            <Events />
            {/* Contact Us */}
            <ContactUs />
        </>
    )
}