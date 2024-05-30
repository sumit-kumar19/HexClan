import { Navbar } from "flowbite-react"

export default function Header() {
    return (
        <header>
            <Navbar fluid className='justify-evenly bg-slate-300'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/vite.svg" className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">HEX-CLAN</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Blog
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