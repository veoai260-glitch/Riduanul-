/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Channel {
  id: string;
  name: string;
  subscribers: string;
  avatar: string;
  verified?: boolean;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  likes: string;
  timestamp: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  channel: Channel;
  views: string;
  timestamp: string;
  duration: string;
  description: string;
  category: string;
  tags: string[];
  comments: Comment[];
}

export interface SidebarItem {
  iconName: string;
  label: string;
  id: string;
}

export interface AppState {
  selectedVideoId: string | null;
  searchQuery: string;
  activeCategory: string;
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
}
