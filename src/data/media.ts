export type MediaItem =
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; src: string; poster?: string; caption?: string };

// Add files to public/gallery/ and list them here, e.g.:
// { type: 'video', src: '/gallery/highlight-reel.mp4', caption: '2025 season highlight reel' },
export const galleryItems: MediaItem[] = [
  { type: 'image', src: '/gallery/01.jpg' },
  { type: 'image', src: '/gallery/02.jpg' },
  { type: 'image', src: '/gallery/03.jpg' },
  { type: 'image', src: '/gallery/04.jpg' },
  { type: 'image', src: '/gallery/05.jpg' },
  { type: 'image', src: '/gallery/06.jpg' },
  { type: 'image', src: '/gallery/07.jpg' },
  { type: 'image', src: '/gallery/08.jpg' },
  { type: 'image', src: '/gallery/09.jpg' },
  { type: 'image', src: '/gallery/10.jpg' },
  { type: 'image', src: '/gallery/11.jpg' },
  { type: 'image', src: '/gallery/12.jpg' },
];
