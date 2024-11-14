import React, { useState } from 'react';
import { Heart, MessageCircle, Shield, Sparkles, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (userInfo: { age: string; country: string; nickname: string }) => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [step, setStep] = useState<'welcome' | 'info'>('welcome');
  const [userInfo, setUserInfo] = useState({
    age: '',
    country: '',
    nickname: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(userInfo);
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-md w-full backdrop-blur-xl bg-gray-900/60 rounded-2xl shadow-2xl p-8 text-center border border-gray-800">
          <div className="mb-8 relative">
            <div className="animate-float">
              <Zap className="w-20 h-20 text-violet-400 mx-auto" />
              <Sparkles className="w-8 h-8 text-amber-400 absolute top-0 right-1/4 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">نبضات</h1>
          <p className="text-gray-300 mb-8 text-lg">
            تواصل. تفهم. شارك مشاعرك.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="gradient-border p-4">
              <MessageCircle className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <h3 className="font-medium text-white mb-1">دردشة فورية</h3>
              <p className="text-sm text-gray-400">تواصل مع من يفهمك</p>
            </div>
            <div className="gradient-border p-4">
              <Shield className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <h3 className="font-medium text-white mb-1">خصوصية تامة</h3>
              <p className="text-sm text-gray-400">محادثات آمنة ومشفرة</p>
            </div>
          </div>

          <button
            onClick={() => setStep('info')}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 px-6 rounded-xl text-lg font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]"
          >
            ابدأ المحادثة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full backdrop-blur-xl bg-gray-900/60 rounded-2xl shadow-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">معلومات سريعة</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-300 mb-2">
              الاسم المستعار
            </label>
            <input
              type="text"
              id="nickname"
              required
              maxLength={20}
              value={userInfo.nickname}
              onChange={(e) => setUserInfo(prev => ({ ...prev, nickname: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500 focus:ring-1"
              placeholder="اختر اسماً مستعاراً"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
              العمر
            </label>
            <input
              type="number"
              id="age"
              required
              min="13"
              max="100"
              value={userInfo.age}
              onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500 focus:ring-1"
              placeholder="أدخل عمرك"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
              الدولة
            </label>
            <select
              id="country"
              required
              value={userInfo.country}
              onChange={(e) => setUserInfo(prev => ({ ...prev, country: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 focus:ring-violet-500 focus:ring-1"
            >
              <option value="">اختر الدولة</option>
              <option value="السعودية">السعودية</option>
              <option value="الإمارات">الإمارات</option>
              <option value="الكويت">الكويت</option>
              <option value="قطر">قطر</option>
              <option value="البحرين">البحرين</option>
              <option value="عمان">عمان</option>
              <option value="مصر">مصر</option>
              <option value="الأردن">الأردن</option>
              <option value="العراق">العراق</option>
              <option value="المغرب">المغرب</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep('welcome')}
              className="flex-1 px-6 py-3 text-gray-300 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors border border-gray-700"
            >
              رجوع
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]"
            >
              متابعة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}