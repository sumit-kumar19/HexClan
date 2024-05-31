import { Navbar } from "flowbite-react"

export default function Header() {
    return (
        <header>
            <Navbar fluid className='justify-evenly bg-slate-300 relative'>
                <Navbar.Brand href="/HexClan/">
                    <img src="/HexClan/vite.svg" className="mr-3 h-8 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">HEX-CLAN</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/HexClan/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/HexClan/certificate" active>
                        Certificate
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}