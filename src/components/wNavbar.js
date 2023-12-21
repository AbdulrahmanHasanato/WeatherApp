import React from "react"
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"

const WNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark">
                <Container className="justify-content-center text-center">
                    <Navbar.Brand href="/" className="text-dark bg-white px-2 br-05">
                        <div>
                            It's too hot 🥵
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar>
        </div>
    )
}

export default WNavbar