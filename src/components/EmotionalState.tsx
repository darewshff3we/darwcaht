import React from 'react';
import { CloudLightning, CloudRain, Cloud, Wind, CloudOff, CloudDrizzle } from 'lucide-react';

const emotions = [
  { name: 'قلق', icon: CloudLightning, gradient: 'from-amber-400 to-orange-500' },
  { name: 'حزن', icon: CloudRain, gradient: 'from-blue-400 to-cyan-500' },
  { name: 'اكتئاب', icon: Cloud, gradient: 'from-purple-400 to-pink-500' },
  { name: 'خوف', icon: Wind, gradient: 'from-red-400 to-rose-500' },
  { name: 'وحدة', icon: CloudOff, gradient: 'from-emerald-400 to-teal-500' },
  { name: 'إحباط', icon: CloudDrizzle, gradient: 'from-orange-400 to-red-500' },
];

export default function EmotionalState({ onSelect }: { onSelect: (emotion: string) => void }) {
  return (
    <div className="p-8 backdrop-blur-xl bg-gray-900/60 rounded-2xl shadow-2xl max-w-md w-full mx-auto border border-gray-800">
      <h2 className="text-3xl font-bold text-center text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text mb-8">بماذا تشعر الآن؟</h2>
      <div className="grid grid-cols-2 gap-4">
        {emotions.map((emotion) => {
          const Icon = emotion.icon;
          return (
            <button
              key={emotion.name}
              onClick={() => onSelect(emotion.name)}
              className="group relative p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Icon className={`w-8 h-8 mx-auto mb-3 text-transparent bg-gradient-to-r ${emotion.gradient} bg-clip-text`} />
              <p className="text-lg font-medium text-white text-center">{emotion.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}