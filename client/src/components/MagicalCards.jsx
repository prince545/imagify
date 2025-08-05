import React, { useState } from 'react';

const MagicalCards = () => {
  const cards = [
    { id: 1, src: '/card1.png', title: 'Enchanted Forest', description: 'Transform your images into mystical realms' },
    { id: 2, src: '/card2.png', title: 'Cosmic Dreams', description: 'Explore the universe through AI magic' },
    { id: 3, src: '/card3.png', title: 'Crystal Vision', description: 'See beyond reality with enhanced clarity' },
    { id: 4, src: '/card4.png', title: 'Ethereal Beauty', description: 'Capture moments with supernatural elegance' },
    { id: 5, src: '/card5.png', title: 'Digital Alchemy', description: 'Turn imagination into visual gold' },
    { id: 6, src: '/card6.png', title: 'Mystic Portals', description: 'Open gateways to infinite possibilities' }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Magical Transformations</h2>
        <p className="text-gray-600 text-lg">Discover the power of AI-generated art</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      AI Magic
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            hoveredCard === card.id ? 'bg-purple-500' : 'bg-gray-300'
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Magical glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicalCards;
