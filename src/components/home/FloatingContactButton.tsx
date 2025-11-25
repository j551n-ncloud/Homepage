"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContactButton() {
  const handleContactClick = () => {
    window.location.href = "mailto:Johannes.quangminh.nguyen@gmail.com";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in" style={{ animationDelay: "1s" }}>
      <Button
        className="rounded-full bg-tech-500 px-5 py-4 text-tech-foreground shadow-[0_16px_32px_-18px_rgba(30,136,229,0.65)] transition-colors hover:bg-tech-600"
        onClick={handleContactClick}
      >
        <Mail className="mr-2 h-5 w-5" />
        <span>Contact</span>
      </Button>
    </div>
  );
}
