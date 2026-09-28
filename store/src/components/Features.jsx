import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <Truck size={24} className="text-black" />,
      title: "FREE SHIPPING",
      description: "On orders over Rs.100"
    },
    {
      icon: <RotateCcw size={24} className="text-black" />,
      title: "EASY RETURNS",
      description: "30-day returns"
    },
    {
      icon: <ShieldCheck size={24} className="text-black" />,
      title: "SECURE PAYMENT",
      description: "100% secure checkout"
    },
    {
      icon: <Headphones size={24} className="text-black" />,
      title: "CUSTOMER SUPPORT",
      description: "24/7 support"
    }
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-3">
            <div className="p-3 bg-white border border-gray-200 rounded shadow-sm">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}