/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { SIDEBAR_ITEMS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  activeId: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeId }) => {
  return (
    <aside 
      className={`bg-white dark:bg-[#0f0f0f] transition-all duration-300 border-r border-zinc-200 dark:border-zinc-800 ${
        isOpen ? 'w-64 px-3' : 'w-0 sm:w-16 overflow-hidden'
      }`}
    >
      <div className="py-3 flex flex-col gap-1">
        {SIDEBAR_ITEMS.map((item) => {
          const IconComponent = (Icons as any)[item.iconName];
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              className={`flex items-center gap-5 w-full rounded-lg transition-colors overflow-hidden h-10 ${
                isOpen ? 'px-3' : 'px-0 justify-center'
              } ${
                isActive 
                  ? 'bg-zinc-100 dark:bg-zinc-800 font-medium' 
                  : 'hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {IconComponent && (
                <IconComponent 
                  size={20} 
                  className={isActive ? 'text-zinc-900 dark:text-white' : ''} 
                />
              )}
              {isOpen && <span className="text-sm truncate">{item.label}</span>}
            </button>
          );
        })}
      </div>
      
      {isOpen && (
        <>
          <hr className="my-3 border-zinc-200 dark:border-zinc-800" />
          <div className="px-3 pb-6">
            <h3 className="text-xs font-bold px-3 py-2 text-zinc-500 uppercase tracking-wider">মোবাইল অ্যাপ হিসেবে ব্যবহার</h3>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-[11px] leading-relaxed text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
              <p className="font-bold mb-1">অ্যান্ড্রয়েড (Android):</p>
              <p className="mb-2">ব্রাউজারের উপরে ডানদিকের <b>⋮</b> মেনুতে ক্লিক করে <b>Install App</b> বা <b>Add to Home Screen</b> সিলেক্ট করুন।</p>
              <p className="font-bold mb-1">আইফোন (iPhone):</p>
              <p className="mb-2">নিচের <b>Share</b> বাটনে ক্লিক করে <b>Add to Home Screen</b> সিলেক্ট করুন।</p>
            </div>
          </div>

          <div className="px-3 pb-6">
            <h3 className="text-xs font-bold px-3 py-2 text-zinc-500 uppercase tracking-wider">ডাউনলোড নির্দেশিকা</h3>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
              <p className="mb-2">এই প্রজেক্টের সম্পূর্ণ কোড ডাউনলোড করতে চাইলে:</p>
              <ol className="list-decimal ml-4 flex flex-col gap-1">
                <li>উপরের ডানদিকে <b>Settings</b> আইকনে ক্লিক করুন।</li>
                <li>সেখান থেকে <b>Export to ZIP</b> বাটনটি সিলেক্ট করুন।</li>
                <li>আপনার কম্পিউটারে একটি <b>.zip</b> ফাইল ডাউনলোড হবে।</li>
              </ol>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
