import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';

function OrderCD() {

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/xrbgvday', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('We will send a payment request via Venmo!');
        form.reset();
      } else {
        alert('Order failed. Please try again.');
      }
    }
  };
  
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
            <img src='/images/Everything.png' width="160" ></img>
          </div>
          <h1 className="text-center newsletter-header">Order 'Everything'</h1>
          <p className="text-center newsletter-extra">Currently accepting Venmo and shipping CD's to the US Only. CD's are $12.99 plus $2.50 for shipping. You can purchase the full set of mp3's $9.00 </p>
          <Form ref={formRef} onSubmit={submitOrder} className="newsletter-form">
            <Form.Group controlId="name">
              <Form.Control type="name" name="name" placeholder="Full Name" required />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Control type="address1" name="address1" placeholder="Address" required />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Control type="address2" name="address2" placeholder="" />
            </Form.Group>

            <Form.Group className='order-city-size' controlId="formCity">
              <Form.Control type="city" name="city" placeholder="City" required />
            </Form.Group>

            <Form.Group className="order-state-size" controlId="formState">
              <Form.Select name="state" required>
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
            <Form.Group controlId="email" >
              <FormControl type="email" name="email" placeholder="email" required />
            </Form.Group>

            <Col >
              <Form.Group controlId="formType">
                <Form.Select name="type" required>
                  <option value="">CD or mp3's</option>
                  <option value="CD">CD</option>
                  <option value="mp3s">mp3's</option>

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