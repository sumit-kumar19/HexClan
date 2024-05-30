import { Footer } from "flowbite-react"

export default function footer() {
    return (
        <>
            <Footer container className="outline outline-1 outline-blue-400">
                <Footer.Copyright className="font-semibold" href="#" by="Hex Clan" year={2024} />
                <Footer.LinkGroup className="font-semibold dark:text-white">
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Blog</Footer.Link>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}