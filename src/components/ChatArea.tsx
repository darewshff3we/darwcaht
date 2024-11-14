import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatArea() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="h-16 bg-white border-b flex items-center px-6">
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <h3 className="font-medium text-gray-900">محادثة مجهولة</h3>
            <p className="text-sm text-green-500">متصل الآن</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          <div className="self-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">
            تم توصيلك بشخص يشعر مثلك. يمكنكما التحدث بحرية وأمان
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="اكتب رسالتك..."
            className="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-right"
            dir="rtl"
          />
          <button 
            className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => setMessage('')}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}