import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { translations } from '../constants/translations';

const contactInfo = [
  { icon: Phone, text: '+31 6 12345678' },
  { icon: Mail, text: 'contact@ykayaelektro.nl' },
  { icon: Clock, text: 'Ma-Vr: 9:00 - 18:00' },
  { icon: MapPin, text: 'Elektriciteitstraat 123, Amsterdam' }
];

export default function Contact() {
  const { contact } = translations;
  
  return (
    <div className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            {contact.title}
          </h2>
          <p className="text-gray-400">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={contact.form.name}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:outline-none text-white"
            />
            <input
              type="email"
              placeholder={contact.form.email}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:outline-none text-white"
            />
            <textarea
              placeholder={contact.form.message}
              rows={4}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:outline-none text-white"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              {contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}