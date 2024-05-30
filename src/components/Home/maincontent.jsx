import { Button } from "flowbite-react";


export default function MainContent(){
    return(
        <div className="container mx-auto text-center justify-center items-center flex flex-col pb-20">

                <h1 className="max-lg:text-[5em] text-[10em]  text-blue-600 font-serif">Hex Clan</h1>
                <p className="mt-5  max-lg:text-2xl text-4xl text-black font-extralight ">Welcome to the Hex Clan website</p>
                <p className="mt-5 text-4xl max-lg:text-2xl text-black font-extralight">We are a group of developers who love to code</p>
                {/* Motive */}
                <p className="mt-5 text-4xl max-lg:text-2xl text-blue-600 font-semibold"><span >
                    <span className="text-purple-500" > Code, </span>
                    <span className="text-lime-400"> Conqueror, </span>
                    <span className="text-red-600"> Create </span>
                </span>
                </p>
                <Button outline gradientDuoTone="cyanToBlue" className="mt-9 align-center">About Us</Button>
            </div>
    )
}