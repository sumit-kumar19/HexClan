import { Footer } from "flowbite-react"

export default function footer() {
    return (
        <>
            <Footer container>
                <Footer.Copyright href="#" by="Hex Clan" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Blog</Footer.Link>
                    <Footer.Link href="#">Galley</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}