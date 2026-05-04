/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Video, SidebarItem } from './types';

export const VIDEO_CATEGORIES = [
  'All',
  'Gaming',
  'Music',
  'Technology',
  'Travel',
  'Education',
  'Podcasts',
  'Live',
  'Recently Uploaded',
  'Watched',
  'New for you'
];

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'home', label: 'Home', iconName: 'Home' },
  { id: 'shorts', label: 'Shorts', iconName: 'Zap' },
  { id: 'subscriptions', label: 'Subscriptions', iconName: 'Youtube' },
  { id: 'library', label: 'Library', iconName: 'Library' },
  { id: 'history', label: 'History', iconName: 'History' },
  { id: 'liked', label: 'Liked videos', iconName: 'ThumbsUp' },
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Future Vision: How AI is Changing Everything',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    channel: {
      id: 'c1',
      name: 'TechInsights',
      subscribers: '1.2M',
      avatar: 'https://i.pravatar.cc/150?u=techinsights',
      verified: true
    },
    views: '450K',
    timestamp: '2 days ago',
    duration: '12:45',
    category: 'Technology',
    description: 'AI is no longer just a buzzword. It is actively reshaping how we work, learn, and live. In this video, we explore the most significant shifts happening right now.',
    tags: ['AI', 'Future', 'Tech'],
    comments: [
      { id: 'com1', user: 'DevJohn', avatar: 'https://i.pravatar.cc/150?u=john', text: 'This was incredibly insightful! AI is definitely moving fast.', likes: '1.2K', timestamp: '1 day ago' },
      { id: 'com2', user: 'SarahCoder', avatar: 'https://i.pravatar.cc/150?u=sarah', text: 'Great breakdown of complex topics.', likes: '450', timestamp: '12 hours ago' }
    ]
  },
  {
    id: 'v2',
    title: 'Exploring the Hidden Streets of Tokyo',
    thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    channel: {
      id: 'c2',
      name: 'Wanderlust Diaries',
      subscribers: '850K',
      avatar: 'https://i.pravatar.cc/150?u=wanderlust',
      verified: true
    },
    views: '1.1M',
    timestamp: '1 week ago',
    duration: '18:20',
    category: 'Travel',
    description: 'Tokyo is a city of layers. Beyond the neon lights of Shibuya, there are quiet backstreets filled with history and flavor.',
    tags: ['Tokyo', 'Japan', 'Travel'],
    comments: [
      { id: 'com3', user: 'TravelerJoe', avatar: 'https://i.pravatar.cc/150?u=joe', text: 'I miss Japan so much after watching this!', likes: '3.1K', timestamp: '5 days ago' }
    ]
  },
  {
    id: 'v3',
    title: 'Modern Web Development with React 19',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    channel: {
      id: 'c3',
      name: 'FullStack Master',
      subscribers: '2.5M',
      avatar: 'https://i.pravatar.cc/150?u=fullstack',
      verified: true
    },
    views: '230K',
    timestamp: '3 hours ago',
    duration: '25:10',
    category: 'Education',
    description: 'React 19 is here! Let us dive into the new features and how they improve your development workflow.',
    tags: ['React', 'WebDev', 'JavaScript'],
    comments: []
  },
  {
    id: 'v4',
    title: 'Epic Gaming Moments Compilation 2026',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    channel: {
      id: 'c4',
      name: 'GamerZone',
      subscribers: '5M',
      avatar: 'https://i.pravatar.cc/150?u=gamerzone',
      verified: true
    },
    views: '10M',
    timestamp: '1 month ago',
    duration: '10:00',
    category: 'Gaming',
    description: 'The most insane clips from the biggest games this year. Don not blink!',
    tags: ['Gaming', 'Epic', '2026'],
    comments: [
      { id: 'com4', user: 'N00b_Master', avatar: 'https://i.pravatar.cc/150?u=n00b', text: 'That last clip was insane!', likes: '15K', timestamp: '2 weeks ago' }
    ]
  },
  {
    id: 'v5',
    title: 'Chill Lo-Fi Beats for Studying',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    channel: {
      id: 'c5',
      name: 'Lofi Vibes',
      subscribers: '3.2M',
      avatar: 'https://i.pravatar.cc/150?u=lofivibes'
    },
    views: '2.5M',
    timestamp: 'Live',
    duration: 'Live',
    category: 'Music',
    description: 'Relax, study, or sleep with these curated chill beats.',
    tags: ['Lofi', 'Chill', 'Study'],
    comments: []
  },
  {
    id: 'v6',
    title: 'The Secret to the Perfect Espresso',
    thumbnail: 'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    channel: {
      id: 'c6',
      name: 'Barista Daily',
      subscribers: '120K',
      avatar: 'https://i.pravatar.cc/150?u=barista'
    },
    views: '89K',
    timestamp: '4 days ago',
    duration: '08:45',
    category: 'Education',
    description: 'Learn the science behind a perfect shot of espresso.',
    tags: ['Coffee', 'Espresso', 'Barista'],
    comments: []
  }
];
