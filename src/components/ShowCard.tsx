import Image from 'next/image';
import type { Show } from '../data/shows';

const statusLabel: Record<Show['status'], string> = {
  upcoming: 'Upcoming',
  current: 'Running now',
  archived: 'Archived',
};

export default function ShowCard({ show }: { show: Show }) {
  const featured = show.status === 'current';

  return (
    <div
      className={`ticket${featured ? ' featured' : ''}${show.status === 'archived' ? ' archived' : ''}`}
    >
      <div className="poster">
        <Image src={show.poster} alt={show.title} width={600} height={800} />
      </div>
      <div className="body">
        <div className={`tag ${show.status}`}>{statusLabel[show.status]}</div>
        <h3>{show.title}</h3>
        {show.dates && <div className="dates">{show.dates}</div>}
        {show.credits && <div className="credits">{show.credits}</div>}
        {show.description && <p>{show.description}</p>}
      </div>
    </div>
  );
}
