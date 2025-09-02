import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function OrderCD() {


  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
    'https://maypodeluxe.development.google.ekodb.net/api/auth/token', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ api_key: '1960c292-518e-4106-8e94-325370074313' })
    });

    const { token } = await response.json();
    console.log(token);
  }

  const mailingListRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mailingListRef.current) {
      observer.observe(mailingListRef.current);
    }

    return () => {

      if (mailingListRef.current) {
        observer.unobserve(mailingListRef.current);
      }

    };
  }, []);

  return (
    <Container fluid={true}>

      <Row className="mt-5 fade-in" ref={mailingListRef}>
        <Col xs="12"> 
          <div className="order-cd-image">
             <img src='/images/Make-Believe.png' width="160" ></img>
          </div>
          <h1 className="text-center newsletter-header">Order Make Believe</h1>
          <p className="text-center newsletter-extra">Currently accepting Venmo and shipping to the US Only. CD's are $12.99, and $2.50 for shipping. We'll send a request for payment via Venmo. For singles (mp3's) use Amazon Music.</p>
          <Form ref={formRef} onSubmit={submitOrder} className="newsletter-form">
            <Form.Group controlId="formAddress">
              <Form.Control type="address1" name="address1" placeholder="Address" required />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Control type="address2" name="address2" placeholder="" />
            </Form.Group>
            
            <Form.Group className='order-city-size' controlId="formCity">
              <Form.Control  type="city" name="city" placeholder="Enter your City" required />
            </Form.Group>

            <Form.Group className="order-state-size" controlId="formState">
              <Form.Select>
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>                
              </Form.Select>
            </Form.Group>

            <Form.Group className='order-zip-size' controlId="formZip">
              <Form.Control type="text" name="zip" placeholder="Zip Code" maxLength={5} required />
            </Form.Group>
            <Form.Group controlId="formVenmoID" >
              <Form.Control type="text" name="Your Venmo ID" placeholder="@my-venmo-id" required />
            </Form.Group>
            
            <Col >
            <Form.Group controlId="formCopies">
                <Form.Select aria-label="">
                    <option value="">Number Of Copies</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Form.Group>            
            </Col>
            <Button type="submit">Place Your Order</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderCD;