import React from 'react';
import { Star, User, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  avatar?: string;
  delay?: number;
}

function Testimonial({ name, text, avatar, delay = 0 }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden slide-up" style={{ animationDelay: `${delay}s` }}>
      {/* Decoração de fundo */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-100 rounded-full opacity-50" />
      <div className="absolute -left-6 -top-6 w-16 h-16 bg-purple-100 rounded-full opacity-50" />
      
      {/* Ícone de citação */}
      <div className="absolute top-4 right-4 text-red-200">
        <Quote className="h-12 w-12 rotate-180" />
      </div>
      
      {/* Estrelas de avaliação */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Texto do depoimento */}
      <p className="text-gray-600 italic mb-6 relative z-10">{text}</p>
      
      {/* Informações do cliente */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-purple-400 rounded-full flex items-center justify-center text-white mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <User className="h-6 w-6" />
          )}
        </div>
        <div>
          <p className="text-gray-800 font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">Cliente Satisfeito</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial; 