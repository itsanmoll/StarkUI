import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

export interface TypingAnimationProps {
  text: string;
  speed?: number; // ms per character
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  showCursor = true,
  cursorChar = '|',
  className,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    setDisplayed('');
    setIndex(0);
  }, [text]);

  return (
    <span className={cn('font-mono whitespace-pre', className)}>
      {displayed}
      {showCursor && (
        <span className="inline-block animate-pulse">{cursorChar}</span>
      )}
    </span>
  );
};

TypingAnimation.displayName = 'TypingAnimation'; 