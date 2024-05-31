import { Carousel, } from "flowbite-react"

export default function About() {
    const testimonials = [
        { name: "Harshit Katheria", testimonial: "Developer (HEAD)", title: "All rounder" , imgUrl : "https://avatars.githubusercontent.com/u/55049998?v=4"},
        { name: "Sumit Kumar", testimonial: "Developer", title: "Math Geek" , imgUrl : "https://avatars.githubusercontent.com/u/143984750?v=4"},
        { name: "Nishi Shishodia", testimonial: "Club representer", title: "" },
        { name: "Sahil Nawaz", testimonial: "Freeloader (Assistant)", title: "Socialist" , imgUrl: "https://avatars.githubusercontent.com/u/143598850?v=4"},
        { name: "Navneet Kumar", testimonial: "Tech lead", title: "Masking Expert" , imgUrl : "https://avatars.githubusercontent.com/u/143984860?v=4"},
        { name: "Kamlesh Baheti", testimonial: "Club (HEAD)", title: "ML Expert" },
        { name: "Anshul Raathi", testimonial: "Club Member", title: "ML Expert" },
        { name: "Vijay Thakur", testimonial: "Secretary", title: "" },
        { name: "Om Sharma", testimonial: "Club Member", title: "Universal Guy" },
    ];
    return (
        <>
            <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 items-center mx-auto">
                <h2 className="text-center text-8xl max-lg:text-4xl text-black font-extralight font-serif">Testimonials</h2>
                <Carousel className="mt-20 mb-11 h-72 w-full justify-center items-center" indicators={false} leftControl=" " rightControl=" " infinite={true} autoPlay autoPlayInterval={5000}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className="bg-black rounded-full w-40 h-40 mb-4">
                                <img src={testimonial.imgUrl} className="rounded-full w-40 h-40" />
                            </div>
                            <h3 className="text-xl text-black font-semibold">{testimonial.name}</h3>
                            <p className="text-lg text-black text-center">{testimonial.testimonial}</p>
                            <p className="text-lg text-black text-center">{testimonial.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="bg-white shadow-lg rounded-lg w-72 h-72 p-6 mx-4 flex flex-col items-center justify-center">
                    <div className="bg-black rounded-full w-20 h-20 mb-4 max-sm:hidden"></div>
                    <h3 className="text-base text-center text-black font-semibold">The greatest glory in living lies not in never falling, but in rising every time we fall.</h3>
                    <p className="text-sm mt-2 text-center text-black">~ Sumit Kumar</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg w-72 h-72 p-6 mx-4 flex flex-col items-center justify-center">
                    <div className="bg-black rounded-full w-20 h-20 mb-4 max-sm:hidden"></div>
                    <h3 className="text-base text-center text-black font-semibold">Do all the good you can, for all the people you can, in all the ways you can, as long as you can</h3>
                    <p className="text-sm mt-2 text-center text-black">~ Harshit Katheria</p>
                </div>
                {/* Add more profile cards as needed */}
            </div>
        </>
    )
}