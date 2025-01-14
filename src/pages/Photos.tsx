import { Container, ListGroup, Row, Col } from "react-bootstrap";

function Photos() {
  return (
    <Container>
      <h1 className="text-center my-4">Pictures</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">
                <img src="images/Popi_small.jpg" className="photo-image" />
                <p>Mark Scan</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">

            <ListGroup.Item className="photo-item">
                <img src="images/MD-Promo-1.jpg" className="photo-image" />
                <p>The Band</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/RobbTorress.jpg" className="photo-image" />
                <p>Robert Torress</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/miguel.jpg" className="photo-image" />
                <p>Miguel Gonzalez</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/pops_2.jpg" className="photo-image" />
                <p>Mike Rudolph</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/SatelliteSix.jpg" className="photo-image" />
                <p>The Band</p>
            </ListGroup.Item>
          </Col> 
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/Robb-3.png" className="photo-image" />
                <p>Robb Torres</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/socials_img.png" className="photo-image" />
                <p>Mark Scan</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/Miguel-2.png" className="photo-image" />
                <p>Miguel Gonzalez</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/robb-4.jpg" className="photo-image" />
                <p>Robert Torres</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/tele.jpg" className="photo-image" />
                <p>Mark's Tele</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/stone_pony_teles.jpg" className="photo-image" />
                <p>Pre Show - The Stone Pony</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/Pops-2.jpg" className="photo-image" />
                <p>Pops!</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/kirk-kelsey.png" className="photo-image" />
                <p>Kirk Kelsey</p>
            </ListGroup.Item>
          </Col>                              
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/troc_rig.jpg" className="photo-image" />
                <p>Pre Show - Philadelphia</p>
            </ListGroup.Item>
          </Col>                              

        </Row>
      </ListGroup>      
    </Container>
  );
}

export default Photos;