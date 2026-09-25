export type ShowStatus = 'current' | 'upcoming' | 'archived';

export type Show = {
  id: string;
  title: string;
  poster: string;
  dates?: string;
  credits?: string;
  description?: string;
  status: ShowStatus;
};

// Poster paths point to public/shows/ — drop the matching image files in there.
export const shows: Show[] = [
  {
    id: 'ang-bangkay',
    title: 'Ang Bangkay: Isang Sarswela',
    poster: '/shows/ang-bangkay.jpg',
    dates: 'Repertoire Series · Manila',
    credits: 'Written & staged by Atty. Vince Tañada',
    description:
      'An intense, psychological dark comedy-drama musical centered on the mystery, secrets, and societal commentary surrounding a corpse (bangkay). Through dark humor, sharp satire, and high-energy theatrical numbers, the play exposes human flaws, greed, corruption, and the social realities of modern Philippine society when people are confronted with death and morality.',
    status: 'upcoming',
  },
  {
    id: 'san-vicente',
    title: 'San Vicente: Isang Sarswela',
    poster: '/shows/san-vicente.jpg',
    dates: 'Now Touring · Nationwide',
    credits: 'Written & directed by Atty. Vince Tañada · Music by Christian H. Lim',
    description:
      'Centered around the inspiring life, faith, and deeds of San Vicente de Paul, the patron saint of charitable societies and defender of the poor. The play balances its sacred subject matter with jokes, lighthearted comedic banter, and lively musical numbers, keeping audiences entertained throughout.',
    status: 'current',
  },
  {
    id: 'rizal-3000',
    title: 'Rizal 3000',
    poster: '/shows/rizal-3000.jpg',
    dates: 'Upcoming Season · Manila',
    credits: 'Written & directed by Vince Tañada · Music by Pipo Cifra',
    description:
      'A futuristic historical-fiction musical bridging two distant eras — 1890s colonial Philippines and a dystopian alternate universe set in the year 3000. It contrasts the original Dr. José Rizal with a future counterpart in a high-tech society where historical memory and national identity have been completely erased.',
    status: 'upcoming',
  },
  {
    id: 'bonifacio',
    title: 'Bonifacio: Isang Sarswela',
    poster: '/shows/bonifacio.jpg',
    dates: 'Repertoire Series · Manila',
    credits: 'Written & directed by Vince Tañada · Music by Pipo Cifra',
    description:
      'Also staged as Supremo Redux, this dramatic and patriotic musical chronicle celebrates the life, revolutionary vision, leadership, and sacrifice of the Supremo of the Katipunan, Andres Bonifacio — from his humble beginnings through the secret founding of the Katipunan and the trials of the 1896 Philippine Revolution against Spanish colonial rule, serving as a call for modern patriotism among young Filipinos.',
    status: 'upcoming',
  },
];
