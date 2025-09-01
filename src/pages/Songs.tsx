import { Container, ListGroup, Row, Col } from "react-bootstrap";

function Songs() {
  return (
    <Container>
      <h1 className="text-center my-4">Featured Songs</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>
        <Row>
        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Keep On Moving</h4>
            <p>Album: Make Believe</p>
            <img src="images/Make-Believe.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/2xvmV1bCMvk02xVpdIJIB9" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
          </ListGroup.Item>
          </Col>
        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Find My Way</h4>
            <p>Album: Make Believe</p>
            <img src="images/Make-Believe.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/6DQSbYUgX6Y1r6jW7Y23Rv" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
          </ListGroup.Item>
          </Col>

        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>If I Only Knew</h4>
            <p>Album: Make Believe</p>
            <img src="images/Make-Believe.png" className="img-fluid mb-3 w-50" />
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
          </ListGroup.Item>
          </Col>
        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Come On Home</h4>
            <p>Album: Make Believe</p>
            <img src="images/Make-Believe.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/7fAl8JaWrQLgIrNpOOh4r8" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>
                  An ever-unpredictable Maypo Deluxe adopts a classic rock and roll presence throughout the Dylan-esque sentiments and style of a brilliantly uplifting Come On Home.
                </p>
                <p>
                Passionately delivered yet backed by a humble pop-rock rise and fall, Come On Home feels like a timeless classic – an ode to the good times with an organic arrangement that can easily translate to any and all settings.
                </p>
                <p>
                The music of Maypo Deluxe has always stood tall, mainly because of a unique manner of framing ideas – blending effective songwriting with subtle twists of unexpected expression throughout a largely genre-free progression. Organic musicianship tends to be a strength too, and in this case it’s the humility of that which allows the natural passion and warmth of the writing and leading vocal to connect so easily.
                </p>
                <p>
                An essential must for this month's playlist, and indeed the kind of anthemic pop-rock hit that will likely reappear for years to come – and lift the mood and satisfy to the same degree every time that it does. Come On Home is everything a good song needs to be in order to engage with and calm the true music fan.
                </p>
              </details>
          </ListGroup.Item>
          </Col>

          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Lonely Road</h4>
            <p>Album: Make Believe</p>
            <img src="images/Make-Believe.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/album/3qYikl5lX3IA96hA7t3hD6" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>Soul-rock seduction at its finest, heartfelt and briefly melancholic for that classic blues thread, but with a crisp, contemporary finish – allowing this accessible, light and expressive vocal-lead to hit with clear identity and emotion.</p>
                <p>Backed by the simple swagger of an electric guitar, bass and mellow drum arrangement, Lonely Road is the latest single from an ever-engaging Maypo Deluxe – proving once again that this is one of the most consistently effective corners of indie songwriting.</p>
                <p>Beautifully captured, there’s a familiarity to the set-up of Lonely Road, but a freshness to the clear passion and delicacy and even grit of the vocal performance. There’s also an element of originality interwoven amidst the recognisable poetic references of the lyrics – this dark lonely road is nothing new, but the details of the longing, the admiration, the optimism, all brings something authentic and honest to the stage.</p>
                <p>Promising more than a few moments of sultry, alluring guitar solo-work, and that ongoing blues-rock rhythm that just grips the listener and sways them from start to finish, Lonely Road comes in at a fairly extensive four-thirty-six, and proceeds through various stages of sadness towards satisfaction and overcoming.</p>
                <p>No spoiler necessary, but this one leaves you feeling a sense of possibility and gratitude. It’s a refreshing twist on the traditional blues sentiment, and a pleasure to listen to at volume.</p>
                <p>By Rebecca Cullen</p>
              </details>
          </ListGroup.Item>
          </Col>          
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Free</h4>
            <p>Album: Home Coming</p>
            <img src="images/free.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/6rcLEBdRwkRgkT4JMIBC4b" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Long Way</h4>
            <p>Album: Home Coming</p>
            <img src="images/long_way.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/album/6JGUElqoSWFSigsVK4Qa2x" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>No Article Yet</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>You're Nowhere</h4>
            <p>Album: Weedzie</p>
            <img src="images/Weedzie.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/track/4SgNQuupy1MXndrVzwqOOk" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>Following the beautifully intoxicating introduction that was Waiting, Maypo Deluxe strikes with a another hit of beautifully intimate song-writing – and a hook section that explodes into life.</p>
                <p>Leading with a kind of soft-rock swagger through the mellow energy then rising anticipation of its verses, You’re Nowhere quickly progresses into indie rock anthem territory once the chorus drops in. Here the soundscape brightens, the vocal reaches new passionate realms, and the simplicity of the line embraces listeners in an immediately welcoming, soon addictive manner.</p>
                <p>The whole thing feels like a nineties rock hit ready and waiting to be rediscovered – Ocean Colour Scene, The Stone Roses, Goo Goo Dolls; the warmth and emotion, the organic and crisp set-up.</p>
                <p>It’s a fresh step away from Waiting, but it still fits the style, offers a powerful midde-8 and guitar solo, and lights up a new side to the artist’s creative arena. Well worth a listen at volume.</p>
                <p>By Rebecca Cullen</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Around You</h4>
            <p>Album: Weedzie</p>
            <img src="images/Weedzie.png" className="img-fluid mb-3 w-50" />
            <p>
              <a href="https://open.spotify.com/album/6L6kAxZjshV1d1vanQCntF" target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Article</summary>
                <p>What a tune. Maypo Deluxe ups the ante with this release, delivering a beautifully nostalgic indie-pop and rock fusion of pure positivity and gratitude.</p>
                <p>Around You sees us move away from the shoulder-swaying grooves of the past, for an upbeat indie gem of a track; one that feels like a slept-on classic from the late nineties days of Girl From Mars and Drinking in LA.</p>
                <p>Fast-paced and light yet uplifting from the outset, the fullness of this pop-rock and mild-punk set-up is quick to lift the mood of the room. The chord pattern depicts a sense of appreciation and warmth, and the lyrics follow suit accordingly – offering a song that openly celebrates the unrivalled appeal and connection found when spending time with someone who truly lights up your day.</p>
                <p>Production-wise, Maypo Deluxe has done a fine job with reflecting the positivity and excitement of the lyrics in the pace and detail of the design. The leading voice is humble yet genuinely impassioned, and is backed by quietly harmonised vocals that whisper further warmth into the mix. All of this is reminiscent of an old school style in many ways, but the clarity of the final arrangement, the simple and satisfying resolve of the hook, all works well to build its own sense of identity – and to hand over an indisputable earworm in the process.</p>
                <p>Celebrate the time spent with people who make the world seem beautiful. Around You is a superb indie track to fire up the new year, and makes for a fine introduction to the ever-impressive and enjoyable catalogue of original music that is the Maypo Deluxe discography.</p>
            </details>
          </ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </Container>
  )
}

export default Songs;