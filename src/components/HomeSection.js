import { useEffect, useState } from 'react';
import useVanta from '../utils/useVanta';
import Image from 'next/image';


export default function HomeSection() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Initialize Vanta.js background
  useVanta();

  const phrases = ["Hrishikesh Atole", "Software Developer"];
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_AFTER = 2000;

  useEffect(() => {
    let timeout;
    
    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting && charIndex < currentPhrase.length) {
        // Typing forward
        setCurrentText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        timeout = setTimeout(typeWriter, TYPING_SPEED);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setCurrentText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        timeout = setTimeout(typeWriter, ERASING_SPEED);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    };

    timeout = setTimeout(typeWriter, isDeleting ? ERASING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section id="home" className="section">
      {/* Vanta.js Animated Background */}
      <div id="vanta-bg"></div>

      <div className="home-container">
        <div className="home-content">
          <div className="greeting">Hi There,</div>
          <div className="name-title">
            I&apos;m{' '}
            <div className="typewriter-container">
              <span className="typewriter-text" id="text">
                {currentText}
              </span>
              <span className="cursor" id="cursor">|</span>
            </div>
          </div>
          {/* <p>
            I&apos;m a Software Developer with extensive experience for over 1 year. 
            My expertise is to create and Websites design, graphic design and many more...
          </p> */}
          <p>
            Hey there! I’m Hrishikesh — a curious coder who loves building cool stuff with <strong>JavaScript</strong> & <strong>AI</strong>.
            From full-stack apps to smart tech, I turn ideas into interactive reality! Let’s build, break, and make magic on the web.
          </p>

        </div>
        <div className="home-image">
          <div className="profile-image">
            {!imageError ? (
              <Image
                src="/hrishi_im.jpg"
                alt="Hrishikesh Profile"
                width={400}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="profile-placeholder">
                Add your profile image<br/>
                <small>hrishi_png.jpg</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
