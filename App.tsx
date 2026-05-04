/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoryBar from './components/CategoryBar';
import VideoCard from './components/VideoCard';
import VideoPlayer from './components/VideoPlayer';
import { MOCK_VIDEOS, VIDEO_CATEGORIES } from './constants';
import { Video, AppState } from './types';
import { motion, AnimatePresence } from 'motion/react';

import DownloadInstructionModal from './components/DownloadInstructionModal';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    selectedVideoId: null,
    searchQuery: '',
    activeCategory: 'All',
    isSidebarOpen: true,
    theme: 'dark',
  });

  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // Handle Dark Mode
  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  const toggleSidebar = () => setState(prev => ({ ...prev, isSidebarOpen: !prev.isSidebarOpen }));
  const toggleTheme = () => setState(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
  const setCategory = (category: string) => setState(prev => ({ ...prev, activeCategory: category, selectedVideoId: null }));
  const setSearch = (query: string) => setState(prev => ({ ...prev, searchQuery: query, selectedVideoId: null }));
  const selectVideo = (id: string | null) => setState(prev => ({ ...prev, selectedVideoId: id }));

  const filteredVideos = useMemo(() => {
    return MOCK_VIDEOS.filter(video => {
      const matchesCategory = state.activeCategory === 'All' || video.category === state.activeCategory;
      const matchesSearch = video.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                           video.channel.name.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [state.activeCategory, state.searchQuery]);

  const selectedVideo = useMemo(() => 
    MOCK_VIDEOS.find(v => v.id === state.selectedVideoId) || null,
  [state.selectedVideoId]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-white transition-colors duration-200 overflow-hidden font-sans">
      <Header 
        onMenuClick={toggleSidebar} 
        onSearch={setSearch} 
        onToggleTheme={toggleTheme}
        theme={state.theme}
        onDownloadRequest={() => setShowDownloadModal(true)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={state.isSidebarOpen} 
          activeId={state.selectedVideoId ? '' : 'home'} 
        />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <AnimatePresence mode="wait">
            {state.selectedVideoId && selectedVideo ? (
              <motion.div
                key="player"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-4 lg:p-6"
              >
                <VideoPlayer 
                  video={selectedVideo} 
                  relatedVideos={MOCK_VIDEOS.filter(v => v.id !== selectedVideo.id)}
                  onVideoSelect={selectVideo}
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col min-h-full"
              >
                <div className="sticky top-0 z-20 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md px-4 py-3">
                  <CategoryBar 
                    categories={VIDEO_CATEGORIES} 
                    activeCategory={state.activeCategory}
                    onSelect={setCategory}
                  />
                </div>
                
                <div className="p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-4">
                  {filteredVideos.map((video, idx) => (
                    <VideoCard 
                      key={video.id} 
                      video={video} 
                      onClick={() => selectVideo(video.id)}
                      index={idx}
                    />
                  ))}
                </div>

                {filteredVideos.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-24 h-24 mb-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                      <span className="text-4xl text-zinc-400">?</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">No results found</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">Try different keywords or categories</p>
                    <button 
                      onClick={() => { setCategory('All'); setSearch(''); }}
                      className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    >
                      Browse all videos
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {showDownloadModal && (
        <DownloadInstructionModal onClose={() => setShowDownloadModal(false)} />
      )}
    </div>
  );
};

export default App;
