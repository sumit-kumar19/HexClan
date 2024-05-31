import { Textarea, TextInput, Label, Button, Toast } from "flowbite-react";
import { HiCheck, HiMail, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function ContactUs() {
    const [showToast, setShowToast] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxoA2D1Sg2OCXRliyND6h3zzOd7UzhZur6kiFLRubVluB1VHFH4lbkUVS1g3bE2GxRL/exec';

    useEffect(() => {
        if (showToast) { 
            const timer = setTimeout(() => setShowToast(false), 5000);
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [showToast]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form),
            });
            if (response.ok) {
                setShowToast(true);
                form.reset();
            } else {
                console.error('Error!', response.statusText);
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
            <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 items-center mx-auto">
                <h2 className="text-center text-8xl max-lg:text-4xl text-black font-extralight font-serif">Contact Us</h2>
                <p className="text-center mt-5 text-4xl max-lg:text-2xl text-black font-extralight">Contact us to learn more about the club</p>
                <div className="mt-5 flex justify-center items-center">
                    <form className="flex max-w-md flex-col gap-4 w-11/12" onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput id="name" name="name" type="text" icon={HiUser} required shadow spellCheck={false} placeholder="Harshit Katheria" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" name="email" type="email" placeholder="name@company.com" icon={HiMail} required shadow spellCheck={false} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="message" value="Your Message" />
                            </div>
                            <Textarea id="message" name="message" placeholder="Your message here" type="text" required shadow max={250} spellCheck={true} className="h-40" />
                        </div>
                        <Button type="submit">Submit</Button>

                        <div className="flex justify-center items-center mt-4">
                            {showToast && (
                                <Toast className="flex items-center justify-center">
                                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                                        <HiCheck className="h-5 w-5" />
                                    </div>
                                    <div className="ml-3 text-sm font-normal">Submitted.</div>
                                    <Toast.Toggle onDismiss={() => setShowToast(false)} />
                                </Toast>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}