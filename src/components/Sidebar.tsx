import React from 'react';
import { MessageSquare, Heart, Moon } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-20 bg-purple-700 flex flex-col items-center py-6 space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <Heart className="w-8 h-8 text-white" />
        <div className="h-0.5 w-8 bg-purple-500" />
      </div>
      
      <nav className="flex-1 flex flex-col items-center space-y-6">
        <button className="p-3 rounded-xl bg-purple-800 text-white">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-xl text-purple-200 hover:bg-purple-800 transition-colors">
          <Moon className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}