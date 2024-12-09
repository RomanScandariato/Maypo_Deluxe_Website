import { Container, ListGroup, Row, Col } from "react-bootstrap";

function Songs() {
  return (
    <Container>
      <h1 className="text-center my-4">Featured Songs</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>
        <Row>
        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>If I Only Knew</h4>
            <p>Album: Going Steady</p>
            <img src="images/If_I_Only_Knew.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/4uTe4L4cZcU5C2mkFmfpSu" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>Blissful nostalgia returns with that crisp, organic musicianship – Maypo Deluxe keep authenticity alive, with the heartfelt and evocative new soft-rock single If I Only Knew.</p>
                <p>Featuring a humble melody and ever-enchanting array of guitars, If I Only Knew presents some of Maypo Deluxe’ most imaginative and inspiring lyrics yet. The whole thing sets the mood in the way that nineties indie once did, but softens the vibe for its breathy and comforting melody, and proceeds to weave in a poetic storyline that grips you from start to finish.</p>
                <p>To then consider the easy resolve of that chorus, this relatable moment of self-reflection, the song humbly reaches a rather anthemic status – its perfectly crafted four minutes and thirty-eight seconds building up the anticipation beautifully throughout. There’s also a consistency of lyrical imagery and ideas forever maintaining the intrigue and dreamy appeal of the writing.</p>
                <p>Given the shorter length of most mainstream tracks, it’s always an impressive pleasure when a true master of the craft returns to embrace listeners with a purposeful, intentional groove, story, and level of substance. In my view, If I Only Knew delivers precisely the warmth and escapism expected from that fine balancing of qualities.</p>
                <p>Article by Rebecca Cullen</p>
              </details>
            <p>Song Player goes here</p>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Free</h4>
            <p>Album: Home Coming</p>
            <img src="images/free.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/4uTe4L4cZcU5C2mkFmfpSu" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
            <p>Song Player goes here</p>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Long Way</h4>
            <p>Album: Home Coming</p>
            <img src="images/long_way.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/4uTe4L4cZcU5C2mkFmfpSu" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
            <p>Song Player goes here</p>
          </ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </Container>
  )
}

export default Songs;