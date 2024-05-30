import { Textarea, TextInput, Label, Button, Toast } from "flowbite-react";
import { HiCheck, HiMail, HiUser } from "react-icons/hi";
import { useState } from "react";
export default function ContactUs() {
    const [showToast, setShowToast] = useState(false);
    useState(() => {
        setInterval(() => {
            setShowToast(false)
        }, 5000)
    }, [showToast])
    return (
        <>
            <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 items-center mx-auto">
                <h2 className="text-center text-8xl max-lg:text-4xl text-black font-extralight font-serif">Contact Us</h2>
                <p className="text-center mt-5 text-4xl max-lg:text-2xl text-black font-extralight"> Contact us to learn more about the club</p>
                <div className="mt-5 flex justify-center items-center">
                    <form className="flex max-w-md flex-col gap-4 w-11/12" onSubmit={(e) => { e.preventDefault(); setShowToast((state) => !(state)) }}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput id="name" type="text" icon={HiUser} required shadow spellCheck={false} placeholder="Harshit Katheria" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="name@company.com" icon={HiMail} required shadow spellCheck={false} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="message" value="Your Message" />
                            </div>
                            <Textarea id="message" placeholder="Your message here" type="text" required shadow max={250} spellCheck={true} className="h-40" />
                        </div>
                        <Button type="submit"> Submit </Button>

                        <div className="flex justify-center items-center">
                            {showToast &&
                                <Toast className="flex items-center justify-center">
                                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                                        <HiCheck className="h-5 w-5" />
                                    </div>
                                    <div className="ml-3 text-sm font-normal">Submitted.</div>
                                    <Toast.Toggle onDismiss={() => setShowToast(false)} />
                                </Toast>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}