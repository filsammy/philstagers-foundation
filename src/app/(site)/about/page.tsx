import Image from 'next/image';
import Reveal from '../../../components/Reveal';

export const metadata = { title: 'About — Philippine Stagers Foundation' };

const missions = [
  {
    title: 'Promote Filipino Culture & History',
    body:
      'Produce high-quality, original Filipino plays and musicals that highlight our rich heritage, historical truths, and vital sociopolitical issues to educate and inspire audiences — especially the youth.',
  },
  {
    title: 'Provide Accessible Theater',
    body:
      'Bring mobile, touring stage productions directly to students, local communities, and provinces across the Philippines, making theater affordable and inclusive beyond traditional venues.',
  },
  {
    title: 'Foster Youth Development & Social Purpose',
    body:
      'Support underprivileged youth by offering free theater workshops, full artistic scholarships, and training to help develop young Pinoy talent into disciplined performers and responsible citizens.',
  },
  {
    title: 'Engage in Humanitarian Work',
    body:
      'Use arts and stage earnings to continuously fund humanitarian initiatives, benefiting charitable institutions, the elderly, sick, and marginalized sectors.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <section>
          <div className="section-label">About the foundation</div>
          <h2>Theatre as a living record of who we are.</h2>
          <p className="lead">
            Founded in 2001 by lawyer, writer, director, and actor Atty. Vincent M. Tañada,
            Philippine Stagers Foundation, Inc. (PhilStagers) is a multi-awarded, non-stock,
            and non-profit professional theatre company dedicated to enriching Filipino culture
            and history through original stage musicals.
          </p>
          <p className="body-copy">
            Specializing in modern <em>sarswelas</em> and educational touring productions, PSF performs
            nationwide across schools, universities, and major theater venues. By blending historical
            rigor, socially relevant themes, original music, and vibrant contemporary storytelling,
            the foundation makes theater accessible, entertaining, and deeply inspiring for young
            audiences and communities throughout the archipelago.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="section-label">Meet the founder</div>
          <h2>The man behind the mission.</h2>
          <div className="director-grid">
            <div className="director-photo">
              <Image
                src="/about/vince-tanada.jpg"
                alt="Atty. Vincent 'Vince' M. Tañada, Founder & Artistic Director of PSF"
                width={480}
                height={480}
              />
            </div>
            <div className="director-info">
              <blockquote className="director-quote">
                &ldquo;Theatre should not only entertain; it must educate, transform lives,
                and instill a deep sense of patriotism and pride in our identity as Filipinos.&rdquo;
                <cite>— Atty. Vincent M. Tañada, Founder & Artistic Director</cite>
              </blockquote>
              <p>
                Atty. Vincent &ldquo;Vince&rdquo; M. Tañada is a Filipino lawyer, award-winning
                theater and film director, writer, producer, and actor — and the founder, CEO,
                and artistic director of Philippine Stagers Foundation and PhilStagers Films. He
                has written and directed acclaimed stage productions including{' '}
                <em>Katips: Ang Bagong Katipunan</em>, <em>Andres Bonifacio: Ang Supremo Isang
                Musikal</em>, <em>Ako si Ninoy</em>, and <em>Sindak 1941</em>.
              </p>
              <ul className="director-honors">
                <li>
                  Best Director, Best Actor & Best Screenplay at the 50th FAMAS Awards (2022) for
                  <em> Katips</em> — which also won Best Picture among 7 total awards
                </li>
                <li>
                  Aliw Hall of Fame for Best Director (2017), with multiple Best Actor in a Musical
                  wins across his career
                </li>
                <li>Carlos Palanca Memorial Award for Literature, Full-Length Play category</li>
                <li>Named one of the Outstanding Men and Women of the Philippines (2022)</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="section-label">Vision &amp; mission</div>
          <h2>Why we do this work.</h2>
          <div className="mv-grid">
            <div>
              <h3>Mission</h3>
              <ul className="mission-list">
                {missions.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.body}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                To serve as a major catalyst for transformation, cultural preservation, and social
                awakening in the Philippines through accessible, world-class theatrical art, while
                nurturing a nation of socially aware, history-conscious, and art-loving audiences.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
