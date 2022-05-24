import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarContent = () => {
  return (
    <Navbar bg='primary' variant='dark' >
        <Container>
            <Navbar.Brand href='#home'>Logo</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#features'>Features</Nav.Link>
                <Nav.Link href='#capital'>Capital</Nav.Link>
            </Nav>
        </Container>
</Navbar>
  )
}

export default NavbarContent