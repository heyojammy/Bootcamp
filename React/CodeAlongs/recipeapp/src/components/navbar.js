import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; //import all element items from the navbar
const NavBar = () => {

return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">RECIPOOOOOOPS :DDDD</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">It working</Nav.Link>
        <Nav.Link href="#link">Hooray</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Stuff</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Stuff</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Stuff</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated Stuff</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default NavBar;