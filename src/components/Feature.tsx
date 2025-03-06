import React from 'react';

interface FeatureProps {
  icon: React.ElementType;
  text: string;
}

function Feature({ icon: Icon, text }: FeatureProps) {
  return (
    <div className="flex items-center space-x-2 text-gray-700 bg-white/50 backdrop-blur-sm p-3 rounded-lg hover:bg-white/80 transition-colors">
      <Icon className="h-5 w-5 text-red-600" />
      <span>{text}</span>
    </div>
  );
}

export default Feature; 