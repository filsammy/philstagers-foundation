export type MediaItem =
  | { type: 'image'; src: string; width: number; height: number; caption?: string }
  | { type: 'video'; src: string; poster?: string; caption?: string };

// Add files to public/gallery/ and list them here, e.g.:
// { type: 'video', src: '/gallery/highlight-reel.mp4', caption: '2025 season highlight reel' },
export const galleryItems: MediaItem[] = [
  { type: 'image', src: '/gallery/01.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/02.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/03.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/04.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/05.jpg', width: 2048, height: 1536 },
  { type: 'image', src: '/gallery/06.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/07.jpg', width: 2048, height: 1075 },
  { type: 'image', src: '/gallery/08.jpg', width: 2048, height: 1152 },
  { type: 'image', src: '/gallery/09.jpg', width: 2048, height: 1368 },
  { type: 'image', src: '/gallery/10.jpg', width: 2048, height: 1368 },
  { type: 'image', src: '/gallery/11.jpg', width: 1536, height: 1024 },
  { type: 'image', src: '/gallery/12.jpg', width: 2048, height: 1396 },
];
