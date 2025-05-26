'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardContent {
  id: number;
  front: string;
  back: string;
}

const cards: CardContent[] = [
  {
    id: 1,
    front: "While building a broad foundation in cybersecurity, I'm focused on a career in defensive security. I believe in the importance of securing, safeguarding, and educating people about data protection across industries and in daily life.",
    back: "My key areas of interest include threats to healthcare systems and SCADA/ICS environments, where the intersection of digital and physical systems presents unique challenges and opportunities for impactful defense."
  },
  {
    id: 2,
    front: "My professional journey includes hands-on IT work as an IT Health Consultant, where I provided training and onsite support for EHR systems and ensured compliant clinical documentation uploads in accordance with HIPAA regulations.",
    back: "To deepen my technical expertise, I'm actively training in LetsDefend, gaining real-world SOC analyst experience by identifying threats, analyzing SIEM alerts, and participating in simulations. I also contribute walkthroughs to the LetsDefend community based on successfully completed exercises."
  },
  {
    id: 3,
    front: "I currently hold the CompTIA Security+ certification and am preparing for CompTIA Network+. Through my graduate studies at WGU, I am also pursuing:\n(ISC)² Certified in Cybersecurity (CC)\nCompTIA CySA+, PenTest+, CASP+ (optional voucher)\nISACA CISM (optional voucher)",
    back: "Alongside these certifications, I'm actively developing skills in Python, Linux, PowerShell, and more. Explore my projects and research below to see how I'm applying these tools in real-world scenarios and gaining practical industry insight!"
  }
];

export default function ScrollCards() {
  const [activeCard, setActiveCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState<boolean[]>(new Array(cards.length).fill(false));
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveCard(cardIndex);
        }
      });
    }, options);

    if (isLoaded) {
      const cards = document.querySelectorAll('.card-container');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  const handleCardClick = (index: number) => {
    setIsFlipped((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (!isLoaded) {
    return (
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-[400px] bg-gradient-to-br from-blue-600/50 to-purple-700/50 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8" ref={containerRef}>
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  data-index={index}
                  className="card-container h-[400px] relative"
                  onClick={() => handleCardClick(index)}
                  style={{ perspective: '2000px' }}
                >
                  <div
                    className="w-full h-full relative transition-transform duration-700 transform-style-preserve-3d"
                    style={{
                      transform: isFlipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Front of card */}
                    <div
                      className="absolute w-full h-full rounded-2xl p-8 cursor-pointer
                        bg-gradient-to-br from-blue-600 to-purple-700 shadow-xl backface-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Card {index + 1}
                        </h3>
                        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
                          {card.front}
                        </p>
                        <div className="absolute bottom-4 right-4 text-white/70">
                          Click to flip
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div
                      className="absolute w-full h-full rounded-2xl p-8 cursor-pointer
                        bg-gradient-to-br from-purple-600 to-blue-700 shadow-xl backface-hidden"
                      style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Details
                        </h3>
                        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
                          {card.back}
                        </p>
                        <div className="absolute bottom-4 right-4 text-white/70">
                          Click to flip
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}