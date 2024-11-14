import React, { useState } from 'react';
import { Send, SkipForward, LogOut, Flag, Globe, User } from 'lucide-react';
import ConfirmDialog from './ConfirmDialog';

interface ChatRoomProps {
  currentEmotion: string;
  onExit: () => void;
}

interface UserInfo {
  age: string;
  country: string;
  nickname: string;
}

export default function ChatRoom({ currentEmotion, onExit }: ChatRoomProps) {
  const [message, setMessage] = useState('');
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showSkipDialog, setShowSkipDialog] = useState(false);
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'مرحباً بك! أنا أشعر بنفس شعورك. كيف حالك؟', isReceived: true, time: new Date() }
  ]);

  // Simulated user info - in a real app, this would come from the chat server
  const otherUser: UserInfo = {
    age: '25',
    country: 'السعودية',
    nickname: 'مستمع'
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: message,
        isReceived: false,
        time: new Date()
      }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReport = () => {
    // In a real app, this would send a report to the server
    setShowReportDialog(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
              <User className="w-5 h-5 text-violet-600" />
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{otherUser.nickname}</h3>
                <span className="text-sm text-emerald-500">متصل الآن</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{otherUser.age} سنة</span>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>{otherUser.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowReportDialog(true)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              title="الإبلاغ عن إساءة"
            >
              <Flag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowSkipDialog(true)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2"
            >
              <SkipForward className="w-4 h-4" />
              تخطي
            </button>
            <button
              onClick={() => setShowExitDialog(true)}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              إنهاء المحادثة
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-center">
            <span className="bg-violet-100 text-violet-800 text-sm px-4 py-2 rounded-full">
              تم توصيلك بشخص يشعر {currentEmotion} مثلك
            </span>
          </div>
          
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.isReceived ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-lg px-4 py-3 rounded-2xl ${
                  msg.isReceived
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'bg-violet-600 text-white'
                } ${msg.isReceived ? 'rounded-br-none' : 'rounded-bl-none'}`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className={`text-xs mt-1 block ${
                  msg.isReceived ? 'text-gray-400' : 'text-violet-200'
                }`}>
                  {msg.time.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك..."
              className="flex-1 px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 text-right"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="p-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ConfirmDialog
        isOpen={showExitDialog}
        onClose={() => setShowExitDialog(false)}
        onConfirm={onExit}
        title="إنهاء المحادثة"
        message="هل أنت متأكد من رغبتك في إنهاء المحادثة؟ سيتم حذف جميع الرسائل."
        confirmText="إنهاء المحادثة"
        confirmColor="red"
      />

      <ConfirmDialog
        isOpen={showSkipDialog}
        onClose={() => setShowSkipDialog(false)}
        onConfirm={onExit}
        title="تخطي المحادثة"
        message="هل تريد تخطي هذه المحادثة والبحث عن شخص آخر؟"
        confirmText="تخطي"
        confirmColor="violet"
      />

      <ConfirmDialog
        isOpen={showReportDialog}
        onClose={() => setShowReportDialog(false)}
        onConfirm={handleReport}
        title="الإبلاغ عن إساءة"
        message="هل تريد الإبلاغ عن هذا المستخدم؟ سيتم مراجعة البلاغ من قبل المشرفين."
        confirmText="إبلاغ"
        confirmColor="red"
      />
    </div>
  );
}