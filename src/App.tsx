import React, { useState } from 'react';
import { Message } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { searchDocs, isRelevantQuestion } from './utils/search';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your CDP Assistant. I can help you with questions about Segment, mParticle, Lytics, and Zeotap. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      let botResponse: string;

      if (!isRelevantQuestion(content)) {
        botResponse = "I'm specifically trained to help with CDP-related questions about Segment, mParticle, Lytics, and Zeotap. Could you please ask a question related to these platforms?";
      } else {
        const searchResults = searchDocs(content);
        
        if (searchResults.length > 0) {
          const result = searchResults[0];
          botResponse = `${result.content}\n\nFor more details, you can check the documentation here: ${result.url}`;
        } else {
          botResponse = "I couldn't find specific information about that. Could you please rephrase your question or ask about a different CDP-related topic?";
        }
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
          <h1 className="text-xl font-semibold">CDP Support Assistant</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </main>

      <footer className="mx-auto w-full max-w-3xl px-6">
        <ChatInput onSend={handleSendMessage} />
      </footer>
    </div>
  );
}

export default App;