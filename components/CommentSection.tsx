/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Comment } from '../types';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold">{comments.length} Comments</h3>
        <button className="flex items-center gap-2 text-sm font-medium">
          <MessageSquare size={18} />
          Sort by
        </button>
      </div>

      {/* Add Comment */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">JD</div>
        <div className="flex-1 border-b border-zinc-200 dark:border-zinc-800 pb-1 focus-within:border-zinc-900 dark:focus-within:border-white transition-colors">
          <input 
            type="text" 
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-transparent outline-none py-1"
          />
        </div>
      </div>

      {/* Comment List */}
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0">
              <img src={comment.avatar} alt={comment.user} referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">@{comment.user}</span>
                <span className="text-xs text-zinc-500">{comment.timestamp}</span>
              </div>
              <p className="text-sm">{comment.text}</p>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1.5 text-xs">
                  <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                    <ThumbsUp size={16} />
                  </button>
                  <span>{comment.likes}</span>
                </div>
                <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                  <ThumbsDown size={16} />
                </button>
                <button className="text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-1 rounded-full transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
