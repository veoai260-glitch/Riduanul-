/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, Search, Video, Bell, User, Sun, Moon, Youtube, DownloadCloud } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearch: (query: string) => void;
  onToggleTheme: () => void;
  theme: 'light' | 'dark';
  onDownloadRequest: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onSearch, onToggleTheme, theme, onDownloadRequest }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 bg-white dark:bg-[#0f0f0f] border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-1 cursor-pointer select-none" onClick={() => onSearch('')}>
          <Youtube className="text-red-600 fill-red-600" size={28} />
          <span className="text-xl font-bold tracking-tighter">VidFlow</span>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="hidden md:flex flex-1 max-w-[720px] mx-4 items-center"
      >
        <div className="flex flex-1 items-center bg-zinc-50 dark:bg-[#121212] border border-zinc-300 dark:border-zinc-700 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <Search size={18} className="text-zinc-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
        <button 
          type="submit"
          className="px-5 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-l-0 border-zinc-300 dark:border-zinc-700 rounded-r-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <Search size={18} />
        </button>
      </form>

      <div className="flex items-center gap-1 sm:gap-2">
        <button 
          onClick={onDownloadRequest}
          className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors group"
          title="Download Project Code"
        >
          <DownloadCloud size={18} className="text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-bold hidden sm:inline">ডাউনলোড কোড</span>
        </button>
        <button 
          onClick={onToggleTheme}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button className="hidden sm:block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
          <Video size={20} />
        </button>
        <button className="hidden sm:block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
          <Bell size={20} />
        </button>
        <div className="w-8 h-8 ml-2 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:opacity-90 transition-opacity">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;
