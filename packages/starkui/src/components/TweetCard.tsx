import React from 'react';
import { cn } from '../utils/cn';

export interface TweetCardProps {
  avatarUrl: string;
  username: string;
  handle: string;
  content: string;
  mediaUrl?: string;
  className?: string;
  date?: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({
  avatarUrl,
  username,
  handle,
  content,
  mediaUrl,
  className,
  date,
}) => {
  return (
    <div className={cn('bg-white border border-gray-200 rounded-xl p-4 shadow-sm max-w-md', className)}>
      <div className="flex items-start gap-3">
        <img
          src={avatarUrl}
          alt={username}
          className="w-12 h-12 rounded-full object-cover border border-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">{username}</span>
            <span className="text-gray-500 text-sm">@{handle}</span>
            {date && <span className="text-gray-400 text-xs ml-auto">· {date}</span>}
          </div>
          <div className="mt-1 text-gray-800 whitespace-pre-line">{content}</div>
          {mediaUrl && (
            <div className="mt-3">
              <img
                src={mediaUrl}
                alt="Tweet media"
                className="rounded-lg max-h-60 object-cover border border-gray-100"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TweetCard.displayName = 'TweetCard'; 