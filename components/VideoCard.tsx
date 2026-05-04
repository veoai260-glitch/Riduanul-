/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Video } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-3 cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
          {video.duration}
        </div>
      </div>

      {/* Info */}
      <div className="flex gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 mt-0.5">
          <img src={video.channel.avatar} alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
              {video.channel.name}
              {video.channel.verified && <CheckCircle2 size={12} className="fill-zinc-500 text-white dark:text-black" />}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500">
              {video.views} views • {video.timestamp}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
