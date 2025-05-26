import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AIAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Akshay's AI Avatar. I can answer questions about his research, projects, and expertise in AI for manufacturing. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('research') || lowerMessage.includes('phd')) {
      return "Akshay is pursuing his PhD at RWTH Aachen University in collaboration with WZL & Fraunhofer IPT, focusing on AI in Manufacturing. His research spans reinforcement learning for quality-oriented production processes, real-time quality monitoring using machine learning, and automated data preprocessing techniques.";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Akshay has completed 9+ research projects including KI-Erosion for Wire-EDM monitoring, AI ultrasonic testing for welding, and reinforcement learning applications in manufacturing. He's also worked on tabular ML preprocessing and multi-objective process optimization.";
    }
    
    if (lowerMessage.includes('publication') || lowerMessage.includes('paper')) {
      return "Akshay has 8+ publications in top-tier venues including Advances in Transdisciplinary Engineering, CIRP conferences, and specialized manufacturing journals. His work covers reinforcement learning, quality monitoring, and AI-driven manufacturing optimization.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Akshay specializes in Deep Learning, Reinforcement Learning, CNNs, Transformers, Generative AI, and AutoML. He's proficient in Python, TensorFlow, PyTorch, and various manufacturing technologies including Wire-EDM, welding processes, and quality control systems.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('connect')) {
      return "You can reach Akshay through the contact form on this website, connect with him on LinkedIn, or read his latest insights on Medium. He's always open to discussing AI in manufacturing, research collaborations, and consulting opportunities.";
    }
    
    return "That's an interesting question! Akshay's expertise spans AI in manufacturing, reinforcement learning, and quality optimization. Feel free to ask about his research projects, publications, or specific areas of expertise. You can also use the contact form to reach out directly for more detailed discussions.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg z-50 hover-lift"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Chat Dialog */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-96 shadow-2xl z-50 border-2 border-secondary/20">
          <CardHeader className="bg-secondary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Akshay's AI Avatar
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-secondary text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Akshay's research..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm" className="bg-secondary hover:bg-secondary/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}