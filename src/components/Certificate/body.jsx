import { HiUser, HiX } from 'react-icons/hi';
import { Label, TextInput, Button, Toast } from 'flowbite-react';
import { useEffect, useState } from 'react';
import certi from '../../assets/certi.pdf'
import fonttxt from '../../assets/GreatVibes-Regular.ttf'
import users from '../../assets/users';




export default function Body() {

    const [showToast, setShowToast ] = useState(false);

    useState(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    }, [showToast]);

    useEffect(() => {
        const PDFLibScript = document.createElement('script');
        PDFLibScript.src = 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
        document.head.appendChild(PDFLibScript);

        // Dynamically load fontkit
        const fontkitScript = document.createElement('script');
        fontkitScript.src = 'https://unpkg.com/@pdf-lib/fontkit@0.0.4';
        document.head.appendChild(fontkitScript);
    }, [])

    const generatePDF = async (name) => {
        if (!window.PDFLib || !window.fontkit) {
            console.error("Libraries not loaded");
            return;
        }

        const { PDFDocument, rgb } = window.PDFLib

        // Fetch PDF and font data
        const exBytes = await fetch(certi).then((res) =>
            res.arrayBuffer());
        const exFont = await fetch(fonttxt).then((res) => res.arrayBuffer());


        // Load PDF document and register fontkit
        const pdfDoc = await PDFDocument.load(exBytes);
        pdfDoc.registerFontkit(window.fontkit);
        const myFont = await pdfDoc.embedFont(exFont);

        // Modify PDF document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        firstPage.drawText(name, {
            x: 370,
            y: 280,
            size: 45,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        // Save and return the modified PDF as a data URI
        const uri = await pdfDoc.saveAsBase64({ dataUri: true });
        return uri;
    };


    const handleSubmit = async (e) => {

        const btn = document.getElementById('btn');
        btn.disabled = true;
        btn.className = 'bg-slate-400 h-12 rounded-lg';
        btn.innerText = "Downloading...";


        e.preventDefault();
        const name = e.target.name.value.trim();

        const userSet = new Set(users);
        if (!userSet.has(name)) {
            setShowToast(true);
            btn.disabled = false;
            btn.className = 'bg-slate-600 h-12 rounded-lg';
            btn.innerText = "Submit";
            return;
        }

        const pdfUri = await generatePDF(name);
        const link = document.createElement('a');
        link.href = pdfUri;
        link.download = name + '_certificate.pdf';
        link.click();
        btn.disabled = false;
        btn.className = 'bg-slate-600 h-12 rounded-lg';
        btn.innerText = "Submit";
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex bg-white w-1/2 pt-10 pb-10 justify-center items-center mx-auto my-4 rounded-lg shadow-2xl relative">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className=" text-black text-4xl font-bold text-center">Generate Certificate</h1>
                        <h2 className="text-black text-2xl mt-4 font-bold text-center">For Code ⚡ Blaze</h2>
                        <p className="text-black text-2xl font-bold text-center">event</p>
                        {showToast && (
                            <Toast className="flex items-center justify-center">
                                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                                    <HiX className="h-5 w-5" />
                                </div>
                                <div className="ml-3 text-sm font-normal rounded">No user Found.</div>
                                <Toast.Toggle onDismiss={() => setShowToast(false)} />
                            </Toast>
                        )}
                        <form className="flex max-w-md flex-col gap-4 w-11/12" onSubmit={handleSubmit}>
                            <div className='text-center w-full mt-8'>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your Name" />
                                </div>
                                <TextInput id="name" name="name" type="text" icon={HiUser} required shadow spellCheck={false} placeholder="Your name" />
                            </div>
                            <Button id='btn' className='bg-slate-600 h-12' type="submit">Submit</Button>


                        </form>

                        <h2 className="text-black text-2xl mt-10 font-bold align-bottom">Hex Clan</h2>
                        <p className="text-black align-bottom">Organizers</p>

                    </div>
                </div>
            </div>
        </>
    )
}