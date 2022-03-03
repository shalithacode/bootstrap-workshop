import {Navbar, NavDropdown, Nav, Container,Form, FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../asset/logo192.png'
function NavBar() {
  return (
    <div className='head'>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="left">
     
  <Container fluid>
    <Navbar.Brand ><img className='logo' src={logo} alt=''/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '600px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action22">Contact</Nav.Link>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Web</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Mobile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Cloud Services
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="info">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}

export default NavBar;
