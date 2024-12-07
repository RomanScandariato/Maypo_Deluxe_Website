import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light footer-text">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col xs="auto">
            <img src="images/md_brand.gif" alt="Footer Logo" className="footer-logo me-3" />
          </Col>
          <Col>
            <p className="mb-0">
              &copy; {currentYear} - All Rights Reserved
            </p>
            <p className="mb-0">
              Dev & Design by Roman Scandariato
            </p>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-dark"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </Col>
          <Col xs="auto">
            <img src="images/Scuff_Mutt_Dog.gif" alt="Another Footer Logo" className="footer-logo" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;