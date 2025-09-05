/**
 * Website for IEEE SB CETKR
 * Copyright (C) 2025 IEEE Student Branch CETKR
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'competition' | 'research' | 'other';
  teamMembers?: string[];
  image?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Best Student Branch Award 2023',
    description: 'Awarded for outstanding performance and contributions to IEEE activities throughout the year.',
    date: '2023-12-15',
    category: 'award',
    image: '/images/achievements/placeholder.jpg'
  },
  {
    id: 2,
    title: '1st Place in IEEE Xtreme Hackathon',
    description: 'Our team secured first place in the regional IEEE Xtreme Hackathon competition with an innovative solution for sustainable energy management.',
    date: '2023-10-21',
    category: 'competition',
    teamMembers: ['John Doe', 'Jane Smith', 'Alex Johnson'],
    image: '/images/achievements/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Published Research Paper',
    description: 'Research paper on "Advancements in Renewable Energy Systems" published in IEEE Access journal.',
    date: '2023-08-05',
    category: 'research',
    teamMembers: ['Sarah Williams', 'Michael Brown'],
    link: '#'
  },
  {
    id: 4,
    title: 'Community Outreach Program',
    description: 'Successfully organized a technology awareness program for underprivileged students, reaching over 200 participants.',
    date: '2023-05-12',
    category: 'other',
    image: '/images/achievements/placeholder.jpg'
  }
];
