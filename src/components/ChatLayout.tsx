import React from 'react';
import { Users, MessageSquare, Search, Settings, LogOut } from 'lucide-react';

export default function ChatLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-20 bg-indigo-600 flex flex-col items-center py-6 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <MessageSquare className="w-8 h-8 text-white" />
          <div className="h-0.5 w-8 bg-indigo-500" />
        </div>
        
        <nav className="flex-1 flex flex-col items-center space-y-6">
          <button className="p-3 rounded-xl bg-indigo-700 text-white">
            <Users className="w-6 h-6" />
          </button>
          <button className="p-3 rounded-xl text-indigo-200 hover:bg-indigo-700 transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-3 rounded-xl text-indigo-200 hover:bg-indigo-700 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </nav>

        <button className="p-3 rounded-xl text-indigo-200 hover:bg-indigo-700 transition-colors">
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      {/* User List */}
      <div className="w-80 border-r bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Online Users</h2>
          <p className="text-sm text-gray-500 mt-1">Find someone to chat with</p>
          
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-2 px-3">
          {['Art', 'Music', 'Tech', 'Sports', 'Books'].map((interest) => (
            <button
              key={interest}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {[1, 2, 3].map((user) => (
            <button
              key={user}
              className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-medium">
                U{user}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-900">Anonymous User {user}</h3>
                <p className="text-sm text-gray-500">Interested in Tech, Art</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-20 border-b flex items-center px-6 bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-medium">
              U1
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Anonymous User 1</h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div className="flex items-end space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-sm">
              U1
            </div>
            <div className="max-w-md bg-white rounded-2xl rounded-bl-none p-4 shadow-sm">
              <p className="text-gray-700">Hey! Would love to chat about tech and art!</p>
              <span className="text-xs text-gray-400 mt-1 block">12:34 PM</span>
            </div>
          </div>

          <div className="flex items-end justify-end space-x-3">
            <div className="max-w-md bg-indigo-600 text-white rounded-2xl rounded-br-none p-4">
              <p>Hi! Sure, what kind of tech are you interested in?</p>
              <span className="text-xs text-indigo-200 mt-1 block">12:35 PM</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="h-24 border-t bg-white p-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}