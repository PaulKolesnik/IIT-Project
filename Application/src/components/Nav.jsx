import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed='bottom' className="navbar" variant="dark"  style={{ height: 150 }}>
        <Container style={{ height: 100 }}>
          <Navbar.Brand href="#home">Final Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home Page</Nav.Link>
            <Nav.Link href="/feeds">Feeds</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
            <Nav.Link href="/">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;