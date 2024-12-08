import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Landing() {
  const handleButtonClick = () => {
    window.open('https://open.spotify.com/track/4uTe4L4cZcU5C2mkFmfpSu', '_blank');
  };

  const bioRef = useRef(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const mailingListRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    paragraphRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    if (mailingListRef.current) {
      observer.observe(mailingListRef.current);
    }

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    videoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
      paragraphRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      if (mailingListRef.current) {
        observer.unobserve(mailingListRef.current);
      }
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
      videoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container fluid={true}>
      <Row>
      <Col xs="12" className="p-0">
        <div className="video-wrapper">
          <video className="landing-hero-video" autoPlay loop muted>
            <source src="/videos/MD-Movie-Background-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </Col>
        <Col xs="12">
          <h1 className="text-center landing-text">Maypo Deluxe</h1>
          <h3 className="text-center landing-text-two">Check Out my Latest Release!</h3>
          <div className="d-flex justify-content-center">
            <button onClick={handleButtonClick} className="btn custom-button initial-load mt-3">Latest Release</button>
          </div>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md="8">
          <div className="d-flex flex-column bio-padding fade-in" ref={bioRef}>
            <h1 className="mt-5 custom-underline">Biography</h1>
            <p className="bio-text-wrap mt-4 fs-5 fade-in" ref={(el) => (paragraphRefs.current[0] = el)}>Call them a throwback to a simpler era, Maypo Deluxe is a band that manages to craft their sound with instruments instead of samples, feel instead of sterile perfection.</p>
            <p className="bio-text-wrap mt-4 fs-5 fade-in" ref={(el) => (paragraphRefs.current[1] = el)}>While their songs have a retro appeal, they’re modern enough to catch the ear of any music lover. Bluesy vocal tracks that drive with intimacy and strength of melody that secure its hold on the listener increasingly throughout the musical journey.</p>
            <p className="bio-text-wrap mt-4 fs-5 fade-in" ref={(el) => (paragraphRefs.current[2] = el)}>Great song-writing, proving all the more impressive and captivating as the lyrics and melody go on.</p>
            <p className="bio-text-wrap mt-4 fs-5 fade-in" ref={(el) => (paragraphRefs.current[3] = el)}>The very sentiments of the opening track Waiting, such as this act of telling yourself you’ll be alright, reach out with more and more authority; ultimately connecting for their realness. And meanwhile, the soul-rock swagger of the instrumental continues to weave its web.</p>
            <p className="bio-text-wrap mt-4 fs-5 fade-in custom-underline-2" ref={(el) => (paragraphRefs.current[4] = el)}>Brilliantly crafted songs, an easy must for the year.</p>
          </div>
        </Col>
        <Col md="4" className="d-flex align-items-center justify-content-center">
          <img src="/images/crowd_landing_picture.png" alt="Bio Image" className="img-fluid img-padding-right" />
        </Col>
      </Row>
      <Row className="mt-5 fade-in" ref={videoSectionRef}>
        <Col>
          <div className="d-flex flex-column bio-padding">
            <h1 className="text-center mt-5">Recent Video Clips</h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
      <Col xs={12} md={6} className="d-flex justify-content-center fade-in" ref={(el: HTMLVideoElement | null) => (videoRefs.current[0] = el)}>
          <video width="65%" controls>
        <source src="/videos/If-I-Only-Knew-RELEASE.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          </video>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center fade-in" ref={(el: HTMLVideoElement | null) => (videoRefs.current[1] = el)}>
          <video width="65%" controls>
        <source src="/videos/Around-You-2024.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          </video>
        </Col>
        <div className="mt-5">
        </div>
      </Row>
      <Row className="mt-5 fade-in" ref={mailingListRef}>
        <Col xs="12">
          <h1 className="text-center newsletter-header">Mailing List</h1>
          <p className="text-cetner newsletter-extra">Subscribe for upcoming events, shows, releases, and more! </p>
          <Form className="newsletter-form">
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Control type="text" placeholder="Enter your location" />
            </Form.Group>
            <Button type="submit">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;