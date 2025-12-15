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
export interface ExecomMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
  department?: string;
  year?: string;
}

// Import all images from src/media/team as URLs so Astro/Vite can optimize them.
// We use eager import with Vite's recommended query so the values are strings at build time.
const _teamImports = import.meta.glob('../media/team/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });
const _teamMap: Record<string, string> = Object.fromEntries(
  Object.entries(_teamImports).map(([p, url]) => [p.split('/').pop() ?? p, String(url)])
);

function resolveTeamImage(img: string): string {
  if (!img) return img;
  // If already an absolute URL (http(s):) leave it
  if (/^https?:\/\//i.test(img)) return img;

  // If it's an absolute public path like /media/team/Foo.jpg, try to map by basename
  const publicTeamMatch = /\/media\/team\/(.+)$/.exec(img);
  if (publicTeamMatch) {
    const base = publicTeamMatch[1];
    if (_teamMap[base]) return _teamMap[base];
    return img; // no optimized version found; keep public path
  }

  // If it's a relative path (e.g. ../media/team/Name.jpg) or bare filename, map by basename
  const base = img.split('/').pop() ?? img;
  if (_teamMap[base]) return _teamMap[base];
  return img;
}
export const execomMembersRaw: { [key: string]: ExecomMember[] } = {
  "Branch Counselor": [
    {
      id: 0,
      name: "Dr. Naveena AK",
      role: "Branch Counselor",
  image: ("../media/team/Dr.Naveena.jpeg"),
      social: {},
      department: "HOD - Department of CSE",
      year: "Faculty"
    }
  ],
  "Chairperson": [
    {
      id: 1,
      name: "Heba Hassan",
      role: "Chairperson",
  image: ("../media/team/HebaHassan.jpeg"),
      social: {
        linkedin: "http://www.linkedin.com/in/heba-hassan-a93607247",
        github: "https://github.com/hebahassan22",
      },
      department: "CSE",
      year: "2022"
    }
  ],
  "Vice Chairperson": [
    {
      id: 2,
      name: "Aliya TM",
      role: "Vice Chairperson",
  image: ("../media/team/Aliya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/aliya-tm-6b60762b3/",
      },
      department: "CSE",
      year: "2022"
    }
  ],
  "Secretary": [
    {
      id: 3,
      name: "Akshay Sreedharan",
      role: "Secretary",
  image: ("../media/team/AkshaySreedharan.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/akshay-sreedharan-125890325",
        github: "https://github.com/AkshaySreedharan"
      },
      department: "CSE",
      year: "2022"
    }
  ],
  "Joint Secretary": [
    {
      id: 4,
      name: "Anush Ahmed",
      role: "Joint Secretary",
  image: ("../media/team/Anush.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anush-ahmed-15144a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Treasurer": [
    {
      id: 5,
      name: "Vaishnav K",
      role: "Treasurer",
  image: ("../media/team/Vaishnav.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/vaishnav-kadambur-0a6296367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "Webmasters": [
    {
      id: 6,
      name: "Abhishek Vadakke Madam",
      role: "Webmaster",
  image: ("../media/team/Abhishek.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/abhishek-vadakke-madam-2b7b53296",
        github: "https://github.com/Unkn0wn-007"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 7,
      name: "Anukheth Sunil",
      role: "Webmaster",
  image: ("../media/team/Anukheth.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anukheth-sunil/",
        github: "https://github.com/kethu-x86"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Event Coordinators": [
    {
      id: 8,
      name: "Jasim AG",
      role: "Event Coordinator",
  image: ("../media/team/Jasim.jpeg"),
      social: {
        linkedin: "http://linkedin.com/in/jasim-ag-396a30316"
      },
      department: "CSE",
      year: "2023"
    } 
  ],
  "Design Lead": [
    {
      id: 9,
      name: "Mubeen Keerantakath",
      role: "Design Lead",
  image: ("../media/team/MubeenKeerantakath.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/mubeen-keerantakath-2b7b53296"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 10,
      name: "Ridha Davood",
      role: "Design Lead",
  image: ("../media/team/Ridha.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/ridha-davood-01755a29b",
        github: "https://github.com/ridha-davood"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Content Lead": [
    {
      id: 11,
      name: "Aadithyan Parangen",
      role: "Content Lead",
  image: ("../media/team/AadithyanParangen.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/aadithyan-p-2702a62a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/agaadhi"
      },
      department: "ECE",
      year: "2022"
    },
    {
      id: 12,
      name: "Laya Khathoon V",
      role: "Content Lead",
  image: ("../media/team/Laya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/laya-khathoon-v-763189387?trk=contact-info",
        github: "https://github.com/Layakhathoon"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "IEEE PES Chair": [
    {
      id: 13,
      name: "Athulya P N",
      role: "IEEE PES Chair",
  image: ("../media/team/Athulya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/athulya-nixan-251a0b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      department: "EEE",
      year: "2023"
    }
  ],
  "IEEE PES Vice Chair": [
    {
      id: 14,
      name: "Abdullahi Farhan",
      role: "IEEE PES Vice Chair",
  image: ("../media/team/Farhan.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/abdullahi-farhan-402833281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "Women in Power": [
    {
      id: 15,
      name: "Sukanya A Kamalakshan",
      role: "Women in Power Lead",
  image: ("../media/team/Sukanya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/sukanya-a-kamalakshan-0ab6b0297"
      },
      department: "EEE",
      year: "2023"
    }
  ],
  "FYP Coordinator": [
    {
      id: 16,
      name: "James Wilson",
      role: "FYP Coordinator",
  image: ("../media/team/placeholder.jpeg"),
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "IEEE IAS Chair": [
    {
      id: 17,
      name: "Asliya S",
      role: "IEEE IAS Chair",
  image: ("../media/team/Asliya.jpeg"),
      social: {
        linkedin: "www.linkedin.com/in/asliya-s-9332a7304?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE IAS Vice Chair": [
    {
      id: 18,
      name: "Devanandan P",
      role: "IEEE IAS Vice Chair",
  image: ("../media/team/Devanandan.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/devanandan-p-906101367"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE WIE Chair": [
    {
      id: 19,
      name: "Anjana. K",
      role: "IEEE WIE Chair",
  image: resolveTeamImage("/media/team/Anjana.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anjana-k-973740332"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE WIE Vice Chair": [
    {
      id: 20,
      name: "Adhima Sudheer MV",
      role: "IEEE WIE Vice Chair",
  image: resolveTeamImage("/media/team/Adhima.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/adhima-sudheer-mv-450701332"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE Link Representative": [
    {
      id: 21,
      name: "Unnikrishnan Namboothiri EN",
      role: "IEEE Link Representative",
  image: resolveTeamImage("/media/team/Unni.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/unnikrishnan-namboothiri-en-63aa58332"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "Membership Development Coordinator": [
    {
      id: 22,
      name: "Amay M Thamban",
      role: "Membership Development Coordinator",
  image: resolveTeamImage("/media/team/Amay.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/inn/aymt",
        github: "https:github.com/amaymt990"
      },
      department: "ECE",
      year: "2022"
    }
  ],
  "ECC": [
    {
      id: 23,
      name: "Aadith V P",
      role: "ECC",
  image: resolveTeamImage("/media/team/Aadith.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/aadithvp",
        github: "https://github.com/aadithvp"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "Media": [
    {
      id: 24,
      name:  "Parthiv EV",
      role:  "Media Lead",
  image: resolveTeamImage("/media/team/Parthiv.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/parthiv-ev-323512302?trk=contact-info",
      },
      department: "EEE",
      year: "2022"
    }
  ]
};

// Build-time resolved copy: replace image paths with imported URLs when possible.
export const execomMembers: { [key: string]: ExecomMember[] } = Object.fromEntries(
  Object.entries(execomMembersRaw).map(([group, members]) => [
    group,
    members.map((m) => ({ ...m, image: resolveTeamImage(m.image) }))
  ])
) as { [key: string]: ExecomMember[] };