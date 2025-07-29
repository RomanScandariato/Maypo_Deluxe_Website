import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

function Player() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState('/audio/AroundYou.mp3');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState('/videos/MD-Movie-Background-2.mp4');
  const [selectedButton, setSelectedButton] = useState('one');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleButtonClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
      });
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioSrc]);

  const handleSeek = (e: { target: { value: any; }; }) => {
    const audio = audioRef.current;
    const value = Number(e.target.value);
    if (audio) {
      audio.currentTime = value;
      setCurrentTime(value);
    }
  };

  function formatTime(sec: number) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  return (
    <Container className='musicPlayer' fluid={true} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', padding: 0 }}>
      <div
        className="video-wrapper"
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="landing-hero-video"
          autoPlay
          loop
          muted
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio ref={audioRef} src={audioSrc} loop />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            pointerEvents: 'none',
            zIndex: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'VCR, monospace',
              color: '#f4ad3c',
              fontSize: '3.5vw',
              letterSpacing: '.4vw',
              textShadow: `
                0 0 16px rgba(244,173,60,0.8),
                0 0 32px rgba(244,173,60,0.6),
                0 0 64px rgba(244,173,60,0.4)
              `,
              textTransform: 'uppercase',
              filter: 'blur(0.5px)',
              margin: 0,
              textAlign: 'center',
              userSelect: 'none'
            }}
          >
            {selectedButton === 'one' && 'Around You'}
            {selectedButton === 'two' && 'Dreaming'}
            {selectedButton === 'three' && 'Whisper'}
          </h1>
        </div>
        <div
          className="top-right-btns"
          style={{
            position: 'absolute',
            top: -10,
            right: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            margin: 0,
            padding: '12px 28px 0 0',
            width: 'auto',
            alignItems: 'flex-end'
          }}
        >
          <button
            className="btn initial-load"
            style={{
              fontFamily: 'VCR, monospace',
              color: '#f4ad3c',
              fontSize: '20px',
              letterSpacing: '1.5px',
              padding: '10px 0px',
              borderRadius: '12px',
              textShadow: `
                0 0 8px rgba(244,173,60,0.8),
                0 0 16px rgba(244,173,60,0.6),
                0 0 32px rgba(244,173,60,0.4)
              `,
              filter: 'blur(0.75px)',
              textTransform: 'uppercase',
              background: 'transparent',
              border: selectedButton === 'one'
                ? '2px solid #f4ad3c'
                : '1px solid #f4ad3c',
              boxShadow: selectedButton === 'one'
                ? '0 0 16px 4px rgba(244,173,60,0.4)'
                : 'none',
              width: '160px',
              textAlign: 'center'
            }}
            onClick={() => {
              setAudioSrc('/audio/AroundYou.mp3');
              setVideoSrc('/videos/Around-You-2024.mp4');
              setSelectedButton('one');
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.play();
                  setIsPlaying(true);
                }
              }, 0);
            }}
          >
            One
          </button>
          <button
            className="btn initial-load"
            style={{
              fontFamily: 'VCR, monospace',
              color: '#f4ad3c',
              fontSize: '20px',
              letterSpacing: '1.5px',
              padding: '10px 0px',
              borderRadius: '12px',
              textShadow: `
                0 0 8px rgba(244,173,60,0.8),
                0 0 16px rgba(244,173,60,0.6),
                0 0 32px rgba(244,173,60,0.4)
              `,
              filter: 'blur(0.75px)',
              textTransform: 'uppercase',
              background: 'transparent',
              border: selectedButton === 'two'
                ? '2px solid #f4ad3c'
                : '1px solid #f4ad3c',
              boxShadow: selectedButton === 'two'
                ? '0 0 16px 4px rgba(244,173,60,0.4)'
                : 'none',
              width: '160px',
              textAlign: 'center'
            }}
            onClick={() => {
              setAudioSrc('/audio/Dreaming.mp3');
              setVideoSrc('/videos/Dreaming.mp4');
              setSelectedButton('two');
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.play();
                  setIsPlaying(true);
                }
              }, 0);
            }}
          >
            Two
          </button>
          <button
            className="btn initial-load"
            style={{
              fontFamily: 'VCR, monospace',
              color: '#f4ad3c',
              fontSize: '20px',
              letterSpacing: '1.5px',
              padding: '10px 0px',
              borderRadius: '12px',
              textShadow: `
                0 0 8px rgba(244,173,60,0.8),
                0 0 16px rgba(244,173,60,0.6),
                0 0 32px rgba(244,173,60,0.4)
              `,
              filter: 'blur(0.75px)',
              textTransform: 'uppercase',
              background: 'transparent',
              border: selectedButton === 'three'
                ? '2px solid #f4ad3c'
                : '1px solid #f4ad3c',
              boxShadow: selectedButton === 'three'
                ? '0 0 16px 4px rgba(244,173,60,0.4)'
                : 'none',
              width: '160px',
              textAlign: 'center'
            }}
            onClick={() => {
              setAudioSrc('/audio/Whisper.mp3');
              setVideoSrc('/videos/Whisper.mp4');
              setSelectedButton('three');
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.play();
                  setIsPlaying(true);
                }
              }, 0);
            }}
          >
            Three
          </button>
        </div>
        <div className="play-btn-top-left"
          style={{
            position: 'absolute',
            top: 9,
            left: 0,
            zIndex: 20,
            display: 'flex'
          }}
        >
          <button
            onClick={handleButtonClick}
            className = "play-pause"
            //className="btn initial-load mt-3"
            style={{
              fontFamily: 'VCR, monospace',
              color: '#f4ad3c',
              fontSize: '25px',
              letterSpacing: '1.5px',
              textShadow: `
                0 0 8px rgba(244,173,60,0.8),
                0 0 16px rgba(244,173,60,0.6),
                0 0 32px rgba(244,173,60,0.4)
              `,
              filter: 'blur(0.75px)',
              textTransform: 'uppercase'
            }}
          >
            {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
          </button>
        </div>
        <div className="player-control"
          style={{
            position: 'absolute',
            top: 2,
            left: '34%',
            zIndex: 30,
            width: 420,
            background: 'rgba(10,20,40,0.35)',
            borderRadius: 16,
            padding: '12px 32px',
            boxShadow: '0 0 32px 8px rgba(244,173,60,0.18)',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            border: '2px solid #f4ad3c',
            textShadow: `
              0 0 8px rgba(244,173,60,0.8),
              0 0 16px rgba(244,173,60,0.6),
              0 0 32px rgba(244,173,60,0.4)
            `,
            fontFamily: 'VCR, monospace',
            filter: 'blur(0.2px)',
            backdropFilter: 'blur(2px)',
          }}
        >
          <span className="player-span" style={{
            color: '#f4ad3c',
            fontFamily: 'VCR, monospace',
            minWidth: 48,
            textAlign: 'right',
            fontSize: '1.2rem',
            letterSpacing: '2px',
            textShadow: `
              0 0 8px rgba(244,173,60,0.8),
              0 0 16px rgba(244,173,60,0.6),
              0 0 32px rgba(244,173,60,0.4)
            `
          }}>
            {formatTime(currentTime)}
          </span>
          <input
            className = "player-range"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            step="0.01"
            onChange={handleSeek}
            style={{
              flex: 1,
              accentColor: '#f4ad3c',
              height: 8,
              borderRadius: 4,
              background: 'rgba(168,110,60,0.08)',
              boxShadow: `
                0 0 8px rgba(244,173,60,0.8),
                0 0 16px rgba(244,173,60,0.6)
              `,
              outline: 'none',
              border: '1.5px solid rgba(244,173,60,0.5)',
              margin: '0 12px',
              WebkitAppearance: 'none',
              appearance: 'none',
            }}
          />
          <span className="player-time" style={{
            color: '#f4ad3c',
            fontFamily: 'VCR, monospace',
            minWidth: 48,
            textAlign: 'left',
            fontSize: '1.2rem',
            letterSpacing: '2px',
            textShadow: `
              0 0 8px rgba(244,173,60,0.8),
              0 0 16px rgba(244,173,60,0.6),
              0 0 32px rgba(244,173,60,0.4)
            `
          }}>
            {formatTime(duration)}
          </span>
        </div>
      </div>
      <div className="rec-date-time-container" style={{ position: 'absolute', top: 0, left: 0, paddingLeft: '25px', display: 'none', zIndex: 40 }}>
        <div
          className="text-red-600 mb-1 text-lg md:text-xl vcr-font"
          style={{
            fontFamily: 'VCR, monospace',
            color: 'rgb(255, 0, 0)',
            filter: 'blur(1px)',
            textShadow: `
              0 0 8px rgba(255,0,0,0.8),
              0 0 16px rgba(255,0,0,0.6),
              0 0 32px rgba(255,0,0,0.4)
            `
          }}
        >
          ● REC
        </div>
        <div
          className="vcr-font mb-1 md:text-lg"
          style={{
            fontFamily: 'VCR, monospace',
            color: 'rgb(222, 236, 250)',
            filter: 'blur(1px)',
            textShadow: `
              0 0 8px rgba(244,173,60,0.8),
              0 0 16px rgba(244,173,60,0.6),
              0 0 32px rgba(244,173,60,0.4)
            `
          }}
        >
          {date}
        </div>
        <div
          className="vcr-font md:text-lg"
          style={{
            fontFamily: 'VCR, monospace',
            color: 'rgb(222, 236, 250)',
            filter: 'blur(1px)',
            textShadow: `
              0 0 8px rgba(244,173,60,0.8),
              0 0 16px rgba(244,173,60,0.6),
              0 0 32px rgba(244,173,60,0.4)
            `
          }}
        >
          {time}
        </div>
      </div>
    </Container>
  );
}

export default Player;