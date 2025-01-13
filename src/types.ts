export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface CDPDoc {
  platform: string;
  title: string;
  content: string;
  url: string;
}

export type Platform = 'segment' | 'mparticle' | 'lytics' | 'zeotap';