'use client'

import { useEffect, useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { useIsMobile } from '@/hooks/use-mobile';

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center animate-pulse">
          <img
            src="/favicon.png?v=2"
            alt="Logo"
            className="mx-auto mb-4 h-16 w-16 animate-bounce-in animate-pulse-glow"
          />
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-fade-in">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-0 overflow-hidden ${isMobile ? 'pt-0' : ''}`}>
      <Hero />
      <div className="animate-float-up" style={{ animationDelay: '0.3s' }}>
        <About />
      </div>
      <div className="animate-float-up" style={{ animationDelay: '0.5s' }}>
        <Services />
      </div>
    </div>
  );
}

export default HomePage;
