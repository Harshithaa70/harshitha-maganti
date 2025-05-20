import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import all drawing images
import drawing1 from '../assets/drawings/IMG-20250520-WA0003.jpg';
import drawing2 from '../assets/drawings/IMG-20250520-WA0004.jpg';
import drawing3 from '../assets/drawings/IMG-20250520-WA0005.jpg';
import drawing4 from '../assets/drawings/IMG-20250520-WA0006.jpg';
import drawing5 from '../assets/drawings/IMG-20250520-WA0007.jpg';
import drawing6 from '../assets/drawings/IMG-20250520-WA0008.jpg';
import drawing7 from '../assets/drawings/IMG-20250520-WA0009.jpg';
import drawing8 from '../assets/drawings/IMG-20250520-WA0010.jpg';
import drawing9 from '../assets/drawings/IMG-20250520-WA0012.jpg';

const DrawingSlideshow = () => {
  // Array of all drawings
  const drawings = [
    { id: 1, image: drawing1, alt: "Drawing 1" },
    { id: 2, image: drawing2, alt: "Drawing 2" },
    { id: 3, image: drawing3, alt: "Drawing 3" },
    { id: 4, image: drawing4, alt: "Drawing 4" },
    { id: 5, image: drawing5, alt: "Drawing 5" },
    { id: 6, image: drawing6, alt: "Drawing 6" },
    { id: 7, image: drawing7, alt: "Drawing 7" },
    { id: 8, image: drawing8, alt: "Drawing 8" },
    { id: 9, image: drawing9, alt: "Drawing 9" }
  ];

  // State for the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for auto play
  const [isPlaying, setIsPlaying] = useState(true);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === drawings.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? drawings.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto play functionality
  useEffect(() => {
    let slideInterval;
    
    if (isPlaying) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, currentIndex]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  // Swipe handlers
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // Determine if we should show all dots or just a limited number on mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
  
  // Update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Function to render dots - show all on desktop, limited on mobile
  const renderDots = () => {
    if (!isMobile) {
      return drawings.map((drawing, index) => (
        <button
          key={drawing.id}
          className={`slide-dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => goToSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ));
    } else {
      // On mobile, show dots with a more limited approach
      const totalDots = 5; // Show max 5 dots on mobile
      const middleDot = Math.floor(totalDots / 2);
      let startDot = currentIndex - middleDot;
      
      // Adjust startDot if near the beginning or end
      if (startDot < 0) {
        startDot = 0;
      } else if (startDot + totalDots > drawings.length) {
        startDot = drawings.length - totalDots;
      }
      
      // If we have fewer drawings than totalDots, show all
      if (drawings.length <= totalDots) {
        return drawings.map((drawing, index) => (
          <button
            key={drawing.id}
            className={`slide-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ));
      }
      
      // Create array with visible dots
      const dots = [];
      
      // Add "first" dot if we're not at the beginning
      if (startDot > 0) {
        dots.push(
          <button
            key="first"
            className="slide-dot"
            onClick={() => goToSlide(0)}
            aria-label="Go to first slide"
          />
        );
        // Add ellipsis if not right after first
        if (startDot > 1) {
          dots.push(<span key="ellipsis1" className="slide-ellipsis">…</span>);
        }
      }
      
      // Add visible dots around current
      for (let i = Math.max(0, startDot); i < Math.min(drawings.length, startDot + totalDots); i++) {
        dots.push(
          <button
            key={drawings[i].id}
            className={`slide-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        );
      }
      
      // Add "last" dot if we're not at the end
      if (startDot + totalDots < drawings.length) {
        // Add ellipsis if not right before last
        if (startDot + totalDots < drawings.length - 1) {
          dots.push(<span key="ellipsis2" className="slide-ellipsis">…</span>);
        }
        dots.push(
          <button
            key="last"
            className="slide-dot"
            onClick={() => goToSlide(drawings.length - 1)}
            aria-label="Go to last slide"
          />
        );
      }
      
      return dots;
    }
  };

  return (
    <div className="drawing-slideshow-container">
      <h2 className="slideshow-title">My Drawings</h2>
      
      <div className="slideshow-wrapper">
        <div className="slideshow">
          <button 
            // className="nav-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          
          <div className="slide-container">
            <AnimatePresence initial={false} custom={1}>
              <motion.img
                key={currentIndex}
                src={drawings[currentIndex].image}
                alt={drawings[currentIndex].alt}
                className="slide-image"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  
                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
              />
            </AnimatePresence>
            
            <div className="slide-counter">
              {currentIndex + 1} / {drawings.length}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
          <div className="slideshow-controls">
          <button 
            className={`play-pause-btn ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        
        <div className="slide-dots">
          {renderDots()}
        </div>
      </div>
    </div>
  );
};

export default DrawingSlideshow;
