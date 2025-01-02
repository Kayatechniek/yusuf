import React from 'react';
import { Home, Building2, Factory, Shield } from 'lucide-react';
import { translations } from '../constants/translations';

const services = [
  {
    icon: Home,
    title: translations.services.residential.title,
    description: translations.services.residential.description
  },
  {
    icon: Building2,
    title: translations.services.commercial.title,
    description: translations.services.commercial.description
  },
  {
    icon: Factory,
    title: translations.services.industrial.title,
    description: translations.services.industrial.description
  },
  {
    icon: Shield,
    title: translations.services.safety.title,
    description: translations.services.safety.description
  }
];

export default function Services() {
  const { services: servicesTranslations } = translations;
  
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            {servicesTranslations.title}
          </h2>
          <p className="text-gray-400">{servicesTranslations.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <service.icon className="w-12 h-12 text-purple-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}