import React from 'react';
import { Truck, Package, ArrowRight, Check, ShoppingCart } from 'lucide-react';

interface PriceCardProps {
  title: string;
  originalPrice: number;
  price: number;
  description: string;
  shipping: string;
  bonus?: string;
  recommended?: boolean;
  quantity?: number;
  buyLink?: string;
}

function PriceCard({ 
  title, 
  originalPrice, 
  price, 
  description, 
  shipping, 
  bonus = '', 
  recommended = false,
  quantity = 1,
  buyLink = '#'
}: PriceCardProps) {
  
  const renderPulseiras = () => {
    const pulseiraUrl = "https://leitura.tarodosanjos.online/wp-content/uploads/2025/03/7e78949d-01f0-4e74-b1d3-c7e24e37562c.png";
    
    return (
      <div className="flex justify-center items-center h-40 relative">
        <div className="relative">
          <img 
            src={pulseiraUrl}
            alt={`${title} - Pulseira 7 Nós`}
            className="w-32 drop-shadow-xl hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    );
  };
  
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
  
  const formatPrice = (value: number) => {
    return Math.floor(value);
  };
  
  const pricePerPulseira = Math.floor(price / quantity);
  const installment = (price / 12).toFixed(2);
  
  return (
    <div className="relative">
      <div className={`relative bg-white/40 backdrop-blur-md rounded-xl shadow-glass hover:shadow-xl transition-all duration-300 scale-in overflow-hidden ${recommended ? 'border-2 border-purple-600 transform hover:scale-105' : 'hover:scale-102'}`} style={{ animationDelay: '0.3s' }}>
        {recommended && (
          <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white py-2 text-center text-sm font-bold z-20">
            Mais Vendido
          </div>
        )}
        
        <div className={`absolute ${recommended ? 'top-12' : 'top-4'} right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10`}>
          -{discountPercentage}%
        </div>
        
        <div className={`absolute ${recommended ? 'top-12' : 'top-4'} left-4 bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10`}>
          {quantity} {quantity === 1 ? 'pulseira' : 'pulseiras'}
        </div>
        
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-red-50 to-purple-50 opacity-30 rounded-xl" />
        
        <div className={`p-6 ${recommended ? 'pt-10' : ''}`}>
          {renderPulseiras()}
          
          <h3 className={`text-xl font-display font-bold ${recommended ? 'text-purple-700' : 'text-red-700'} mb-3 text-center`}>
            {title}
          </h3>
          <p className="text-gray-600 mb-4 text-center">{description}</p>
          
          <div className="mb-6 text-center">
            <span className="line-through text-gray-500 text-sm">De R$ {formatPrice(originalPrice)}</span>
            <div className={`text-3xl font-bold ${recommended ? 'text-purple-700' : 'text-red-700'} flex items-center justify-center`}>
              <span className="text-lg mr-1">R$</span> {formatPrice(price)}
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <p className="text-sm text-gray-500">12x de R$ {installment}</p>
              {quantity > 1 && (
                <>
                  <span className="text-gray-400">|</span>
                  <p className="text-sm font-medium text-green-600">Apenas R$ {pricePerPulseira} cada</p>
                </>
              )}
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="bg-purple-50 rounded-lg p-3 mb-4">
              <p className="text-sm font-medium text-purple-600 flex items-center justify-center gap-2">
                <Package className="h-5 w-5" />
                {quantity === 1 ? 'Kit Individual' : `Kit com ${quantity} Pulseiras`}
              </p>
              {quantity > 1 && (
                <p className="text-xs text-center text-purple-500 mt-1">
                  Economia de R$ {formatPrice(originalPrice - price)} no kit completo
                </p>
              )}
            </div>
            <p className="text-sm text-gray-600 flex items-center">
              <Check className="inline-block mr-2 h-4 w-4 text-green-600" />
              Envio imediato
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <Truck className="inline-block mr-2 h-4 w-4 text-green-600" />
              {shipping}
            </p>
            {bonus && (
              <p className="text-sm text-green-600 flex items-center">
                <Package className="inline-block mr-2 h-4 w-4" />
                {bonus}
              </p>
            )}
          </div>
          
          <a 
            href={buyLink} 
            className={`w-full ${recommended ? 'bg-purple-600 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-700'} text-white py-3 px-6 rounded-lg font-bold transition-colors flex items-center justify-center group shadow-glow-red`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Comprar Agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PriceCard; 