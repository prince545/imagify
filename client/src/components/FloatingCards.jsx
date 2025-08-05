import React, { useEffect, useRef } from 'react';

const FloatingCards = () => {
  const cardsRef = useRef([]);

  const cards = [
    { id: 1, name: 'card1.png', delay: 0 },
    { id: 2, name: 'card2.png', delay: 0.2 },
    { id: 3, name: 'card3.png', delay: 0.4 },
    { id: 4, name: 'card4.png', delay: 0.6 },
    { id: 5, name: 'card5.png', delay: 0.8 },
    { id: 6, name: 'card6.png', delay: 1.0 },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Enhanced floating animation with better positioning
    cards.forEach((card, index) => {
      if (card) {
        // More sophisticated positioning
        const baseX = 15 + (index % 3) * 25;
        const baseY = 20 + Math.floor(index / 3) * 30;
        
        card.style.left = `${baseX}%`;
        card.style.top = `${baseY}%`;
        card.style.width = '220px';
        card.style.height = '300px';
        
        // Enhanced animation with staggered timing
        const duration = 4 + Math.random() * 2;
        const delay = index * 0.3;
        
        card.style.animation = `
          float 6s ease-in-out ${delay}s infinite alternate
        `;
      }
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden z-20">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={el => cardsRef.current[index] = el}
          className="absolute glass floating-card rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-300 cursor-pointer"
          style={{
            left: `${15 + (index % 3) * 25}%`,
            top: `${20 + Math.floor(index / 3) * 30}%`,
            width: '220px',
            height: '300px',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src={`/card${card.id}.png`}
              alt={`Card ${card.id}`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingCards;
