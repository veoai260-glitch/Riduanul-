/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Video } from '../types';
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, CheckCircle2, Download } from 'lucide-react';
import CommentSection from './CommentSection';

interface VideoPlayerProps {
  video: Video;
  relatedVideos: Video[];
  onVideoSelect: (id: string) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, relatedVideos, onVideoSelect }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1700px] mx-auto">
      {/* Left Content: Player & Details */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Aspect ratio container for video */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video 
            src={video.videoUrl} 
            controls 
            autoPlay
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold leading-tight md:text-2xl">{video.title}</h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img src={video.channel.avatar} alt="" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-bold">
                  {video.channel.name}
                  {video.channel.verified && <CheckCircle2 size={14} className="fill-zinc-500 text-white dark:text-black" />}
                </div>
                <span className="text-xs text-zinc-500">{video.channel.subscribers} subscribers</span>
              </div>
              <button className="ml-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border-r border-zinc-200 dark:border-zinc-700">
                  <ThumbsUp size={18} />
                  <span className="text-sm font-medium">{video.views.includes('K') ? '2.4K' : '15K'}</span>
                </button>
                <button className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                  <ThumbsDown size={18} />
                </button>
              </div>
              
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = video.videoUrl;
                  link.setAttribute('download', `${video.title}.mp4`);
                  link.setAttribute('target', '_blank');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors"
                title="Download Video"
              >
                <Download size={18} />
                <span className="text-sm font-medium hidden md:inline">Download</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors">
                <Share2 size={18} />
                <span className="text-sm font-medium hidden md:inline">Share</span>
              </button>
              
              <button className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-3 text-sm">
            <div className="flex items-center gap-2 font-bold mb-1">
              <span>{video.views} views</span>
              <span>{video.timestamp}</span>
              <div className="flex gap-2">
                {video.tags.map(tag => (
                   <span key={tag} className="text-blue-600 dark:text-blue-400">#{tag}</span>
                ))}
              </div>
            </div>
            <p className="whitespace-pre-wrap leading-relaxed">
              {video.description}
            </p>
          </div>

          <CommentSection comments={video.comments} />
        </div>
      </div>

      {/* Right Content: Sidebar Recommendations */}
      <div className="w-full lg:w-[400px] flex flex-col gap-3">
        <h3 className="font-bold text-sm mb-1 px-1">Related videos</h3>
        {relatedVideos.map((item) => (
          <div 
            key={item.id}
            onClick={() => onVideoSelect(item.id)}
            className="flex gap-2 cursor-pointer group"
          >
            <div className="relative w-40 shrink-0 aspect-video rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <img src={item.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="absolute bottom-1 right-1 px-1 py-0 bg-black/80 text-white text-[9px] font-bold rounded">
                {item.duration}
              </div>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <h4 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <div className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                {item.channel.name}
                {item.channel.verified && <CheckCircle2 size={10} className="fill-zinc-500 text-white dark:text-black" />}
              </div>
              <div className="text-[12px] text-zinc-500 dark:text-zinc-400">
                {item.views} views • {item.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
