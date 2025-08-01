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
  const [isFlipped, setIsFlipped] = useState<boolean[]>(new Array(cards.length).fill(false));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  const handleCardClick = (index: number) => {
    setIsFlipped((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (!isLoaded) {
    return (
      <div className="py-1">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-2">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-[200px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-blue-600/50 to-purple-700/50 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-1">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-2">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="h-[200px] sm:h-[220px] md:h-[240px] relative"
              onClick={() => handleCardClick(index)}
              style={{ perspective: '1000px' }}
            >
              <div
                className="w-full h-full relative transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
                style={{
                  transform: isFlipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full rounded-2xl p-3 sm:p-4 md:p-6
                    bg-gradient-to-br from-blue-600 to-purple-700 shadow-xl backface-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                      Card {index + 1}
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {card.front}
                    </p>
                    <div className="absolute bottom-2 right-2 text-white/70 text-xs">
                      <span className="md:hidden">Tap to flip</span>
                      <span className="hidden md:inline">Click to flip</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full rounded-2xl p-3 sm:p-4 md:p-6
                    bg-gradient-to-br from-purple-600 to-blue-700 shadow-xl backface-hidden"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                      Details
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {card.back}
                    </p>
                    <div className="absolute bottom-2 right-2 text-white/70 text-xs">
                      <span className="md:hidden">Tap to flip</span>
                      <span className="hidden md:inline">Click to flip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}