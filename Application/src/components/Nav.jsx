import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed='bottom' bg="primary" variant="dark" sticky='top' style={{height:150}}>
        <Container style={{height:100}}>
          <Navbar.Brand href="#home">Posts Application</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="../App.jsx">Home Page</Nav.Link>
            <Nav.Link href="#features">Log Out</Nav.Link>
            <Nav.Link href="../components/AllPosts.jsx">All Posts</Nav.Link>
            <Nav.Link href="#allposts">Add New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;