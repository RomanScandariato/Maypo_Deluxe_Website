import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { client } from '../main';

function Header() {
  return (
    <Container>
      <Navbar style={{ paddingTop: '18px', paddingBottom: '18px' }}>
        <Container className="nav-wrap">
          <Navbar.Brand as={NavLink} to="/">Maypo Deluxe</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <>
                <Nav.Link as={NavLink} to="/songs">Songs</Nav.Link>
                <Nav.Link as={NavLink} to="/video">Video</Nav.Link>
                <Nav.Link as={NavLink} to="/socials">Social Media</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              </>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header;
