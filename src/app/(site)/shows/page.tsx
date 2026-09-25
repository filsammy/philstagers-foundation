import ShowCard from '../../../components/ShowCard';
import Reveal from '../../../components/Reveal';
import { shows, type Show } from '../../../data/shows';

export const metadata = { title: 'Shows — Philippine Stagers Foundation' };

function Group({ title, shows, scroll }: { title: string; shows: Show[]; scroll?: boolean }) {
  if (shows.length === 0) return null;
  return (
    <Reveal>
      <div className="show-group">
        <h3 className="group-title">{title}</h3>
        <div className={scroll ? 'show-row' : 'prod-grid'}>
          {shows.map((show) => <ShowCard key={show.id} show={show} />)}
        </div>
      </div>
    </Reveal>
  );
}

export default function ShowsPage() {
  const current = shows.filter((s) => s.status === 'current');
  const upcoming = shows.filter((s) => s.status === 'upcoming');
  const archived = shows.filter((s) => s.status === 'archived');

  return (
    <section>
      <div className="section-label">Selected work</div>
      <h2>Productions and programs.</h2>

      <Group title="Running now" shows={current} />
      <Group title="Upcoming" shows={upcoming} scroll />
      <Group title="Past productions" shows={archived} scroll />
    </section>
  );
}
