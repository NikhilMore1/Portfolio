
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header.css';

function Header() {
  return (
    <Navbar expand="lg" className=" navs">
      <Container fluid >
        <Navbar.Brand href="#">Nikhil More</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#skill">Skills</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#education">Education</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#project">Project's</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#social">Social</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#contact">Contact</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
           
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;