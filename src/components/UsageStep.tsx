import React from 'react';

interface UsageStepProps {
  number: number;
  title: string;
  description: string;
}

function UsageStep({ number, title, description }: UsageStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
      <div className="absolute -top-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h4 className="font-display text-xl font-bold mb-3 mt-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default UsageStep; 