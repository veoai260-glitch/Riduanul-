/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Settings, Download, FolderArchive } from 'lucide-react';

interface DownloadInstructionModalProps {
  onClose: () => void;
}

const DownloadInstructionModal: React.FC<DownloadInstructionModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white dark:bg-[#18181b] rounded-2xl shadow-2xl overflow-hidden animate-slide-up border border-zinc-200 dark:border-zinc-800">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Download className="text-blue-600" size={22} />
            <span>প্রজেক্ট ডাউনলোড করার নিয়ম</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 font-bold text-blue-600">১</div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">মেনু খুঁজে বের করুন</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">এই চ্যাট বক্সের ঠিক উপরে অথবা ব্রাউজারের উপরে ডান দিকে <b>Settings</b> আইকনটি (গিয়ার আইকন) খুঁজে বের করুন।</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 font-bold text-blue-600">২</div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">এক্সপোর্ট অপশনটি নির্বাচন করুন</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Settings-এ ক্লিক করার পর সেখানে <b>Export to ZIP</b> লেখা একটি বাটন পাবেন।</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 font-bold text-blue-600">৩</div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white">ফাইলটি সেভ করুন</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">বাটনটিতে ক্লিক করার কয়েক সেকেন্ডের মধ্যে আপনার কম্পিউটারে একটি .zip ফাইল ডাউনলোড হয়ে যাবে যা আপনি যেকোনো এডিটরে ওপেন করতে পারবেন।</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30 text-xs text-amber-700 dark:text-amber-400 flex gap-3">
             <div className="shrink-0 mt-0.5"><Settings size={14} /></div>
             <p>দ্রষ্টব্য: এটি Google AI Studio-এর বিল্ট-ইন ফিচার, তাই আমি কোড দিয়ে সরাসরি ব্রাউজারে এটি অফার করতে পারি না। আপনাকে উপরের মেনু থেকেই এটি করতে হবে।</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-colors shadow-lg shadow-blue-500/20"
          >
            বুঝেছি
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadInstructionModal;
