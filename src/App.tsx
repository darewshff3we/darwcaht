import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmotionalState from './components/EmotionalState';
import ChatRoom from './components/ChatRoom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type AppState = 'welcome' | 'emotion-select' | 'chatting';

interface UserInfo {
  age: string;
  country: string;
  nickname: string;
}

export default function App() {
  const [parent] = useAutoAnimate();
  const [state, setState] = useState<AppState>('welcome');
  const [emotion, setEmotion] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleStart = (info: UserInfo) => {
    setUserInfo(info);
    setState('emotion-select');
  };

  const handleEmotionSelect = (selectedEmotion: string) => {
    setEmotion(selectedEmotion);
    setState('chatting');
  };

  const handleExitChat = () => {
    setState('emotion-select');
    setEmotion('');
  };

  return (
    <div ref={parent} className="h-screen">
      {state === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {state === 'emotion-select' && (
        <div className="min-h-screen bg-gradient-to-b from-violet-600 to-indigo-700 flex items-center justify-center p-4">
          <EmotionalState onSelect={handleEmotionSelect} />
        </div>
      )}
      
      {state === 'chatting' && (
        <ChatRoom 
          currentEmotion={emotion}
          onExit={handleExitChat}
        />
      )}
    </div>
  );
}