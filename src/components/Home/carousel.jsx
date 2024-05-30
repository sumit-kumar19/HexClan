import { Carousel } from "flowbite-react"

export default function AnouncementCarousel() {
    return (
        <div className="h-20 sm:h-20 xl:h-20 2xl:h-20 mt-10 flex justify-center items-center">
            <Carousel indicators={false} leftControl=" " rightControl=" " className="w-11/12" infinite={true} autoPlay={true} autoPlayInterval={5000}>
                <div className="flex h-full items-center justify-center bg-black dark:bg-white dark:text-white rounded-2xl font-serif">
                    <span className="text-4xl max-sm:text-2xl ">Welcome to Hex Clan</span>
                </div>
                <div className="flex h-full items-center justify-center bg-black dark:bg-white dark:text-white rounded-2xl font-serif p-4">
                    <span className="text-4xl max-sm:text-2xl">Another event is coming soon</span>
                </div>
                <div className="flex h-full items-center justify-center bg-black dark:bg-white dark:text-white rounded-2xl font-serif">
                    <span className="text-4xl max-sm:text-2xl ">Join us and learn to code</span>
                </div>
            </Carousel>
        </div>
    )
}