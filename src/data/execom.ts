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
  image: string | any;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
  department?: string;
  year?: string;
}

// Import all images from src/media/team as image objects so Astro/Vite can deeply optimize them.
const _teamImports = import.meta.glob('../media/team/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' });
const _teamMap: Record<string, any> = Object.fromEntries(
  Object.entries(_teamImports).map(([p, obj]) => [p.split('/').pop() ?? p, obj])
);

function resolveTeamImage(img: string): any {
  if (!img) return img;
  // If already an absolute URL (http(s):) leave it
  if (typeof img === 'string' && /^https?:\/\//i.test(img)) return img;

  // If it's an absolute public path like /media/team/Foo.jpg, try to map by basename
  const publicTeamMatch = typeof img === 'string' && /\/media\/team\/(.+)$/.exec(img);
  if (publicTeamMatch) {
    const base = publicTeamMatch[1];
    if (_teamMap[base]) return _teamMap[base];
    return img; // no optimized version found; keep public path
  }

  // If it's a relative path (e.g. ../media/team/Name.jpg) or bare filename, map by basename
  const base = typeof img === 'string' ? (img.split('/').pop() ?? img) : img;
  if (typeof base === 'string' && _teamMap[base]) return _teamMap[base];
  return img;
}
export const execomMembersRaw: { [key: string]: ExecomMember[] } = {
  "facultyMembers": [
    {
      id: 0,
      name: "Dr. Naveena AK",
      role: "IEEE Branch Counselor",
      image: ("../media/team/Dr.Naveena.jpeg"),
      social: {},
      department: "HOD - Department of CSE",
      year: ""
    },
    {
      id: 1,
      name: "Mr. Adil Nassar",
      role: "IEEE PES Chapter Advisor",
      department: "ASST PROF - Department of EEE",
      image: ("../media/team/adhilnasser.jpg"),
      social: {}
    }
  ],
  "Chairperson": [
    {
      id: 2,
      name: "Aadith V P",
      role: "Chairperson",
      image: resolveTeamImage("/media/team/Aadith.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/aadithvp",
        github: "https://github.com/aadithvp"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "Vice Chairperson": [
    {
      id: 3,
      name: "Anush Ahmed",
      role: "Vice Chairperson",
      image: ("../media/team/ANUSH.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anush-ahmed-15144a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Secretary": [
    {
      id: 4,
      name: "Anjana. K",
      role: "Secretary",
      image: resolveTeamImage("/media/team/Anjana.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anjana-k-973740332"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "Joint Secretary": [
    {
      id: 5,
      name: "Jasim AG",
      role: "Joint Secretary",
      image: ("../media/team/Jasim.jpg"),
      social: {
        linkedin: "http://linkedin.com/in/jasim-ag-396a30316"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Treasurer": [
    {
      id: 6,
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
  "IEEE WIE Chair": [
    {
      id: 17,
      name: "Asliya S",
      role: "IEEE IAS Chair",
      image: ("../media/team/asliya.jpg"),
      social: {
        linkedin: "www.linkedin.com/in/asliya-s-9332a7304?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE WIE Vice Chair": [
    {
      id: 8,
      name: "Nayana Sivadas",
      role: "IEEE WIE Vice Chair",
      image: resolveTeamImage("/media/team/Nayana.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/nayana-sivadas-556215329/"
      },
      department: "ECE",
      year: "2024"
    }
  ],
  "IEEE WIE Secretary": [
    {
      id: 8,
      name: "Khadeeja Khalid",
      role: "IEEE WIE Secretary",
      image: resolveTeamImage("/media/team/kajju.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/khadeeja-khalid005/",
        github: "https://github.com/KhadeejaKhalid"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "IEEE PES Chair": [
    {
      id: 13,
      name: "Athulya P N",
      role: "IEEE PES Chair",
      image: ("../media/team/Athulya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/athulya-nixan-251a0b306"
      },
      department: "EEE",
      year: "2023"
    }
  ],
  "IEEE PES Vice Chair": [
    {
      id: 14,
      name: "Gautham Gireesh A",
      role: "IEEE PES Vice Chair",
      image: ("../media/team/Gautham.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/gautham-gireesh-a-04a7ba3a2",
        github: "https://github.com/gauthamannukkaran-hue"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "IEEE PES Secretary": [
    {
      id: 14,
      name: "Pranav E",
      role: "IEEE PES Secretary",
      image: ("../media/team/Pranav.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-e-637709351/"
      },
      department: "EEE",
      year: "2023"
    }

  ],
  "Women in Power": [
    {
      id: 15,
      name: "Karthika M",
      role: "Women in Power Lead",
      image: ("../media/team/karthika.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/karthikadas28/",
        github: "https://github.com/karthikadas"
      },
      department: "CSE",
      year: "2025"
    }
  ],
  "IEEE IAS Chair": [
    {
      id: 18,
      name: "Devanandan P",
      role: "IEEE IAS Vice Chair",
      image: ("../media/team/Devanandan.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/devanandan-p-906101367?"
      },
      department: "ECE",
      year: "2023"
    }
  ],
  "IEEE IAS Vice Chair": [
    {
      id: 8,
      name: "Adhima Sudheer MV",
      role: "IEEE WIE Vice Chair",
      image: resolveTeamImage("/media/team/Adhima.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/adhima-sudheer-mv-450701332"
      },
      department: "ECE",
      year: "2023"
    },
    {
      id: 19,
      name: "Deepak P V",
      role: "IEEE IAS Secretary",
      image: resolveTeamImage("/media/team/Deepak.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/deepak-pv-519681298/"
      },
      department: "EEE",
      year: "2023"

    }
  ],
  "Webmasters": [
    {
      id: 7,
      name: "Anukheth Sunil",
      role: "",
      image: ("../media/team/anukheth.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/anukheth-sunil/",
        github: "https://github.com/kethu-x86"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 10,
      name: "Abhinavraj T",
      role: "",
      image: ("../media/team/abhinavraj.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/abhinavrajt",
        github: "https://github.com/abhinavraj2004"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 7,
      name: "Sravan vishnu P",
      role: "",
      image: ("../media/team/sravan.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/sravan-vishnu",
        github: "https://github.com/sravanvishnu"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "Event Coordinators": [
    {
      id: 6,
      name: "Abhishek Vadakke Madam",
      role: "",
      image: ("../media/team/Abhishek.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/abhishek-vadakke-madam-2b7b53296",
        github: "https://github.com/Unkn0wn-007"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 8,
      name: "Laya Khathoon V",
      role: "",
      image: ("../media/team/Laya.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/laya-khathoon-v-763189387?trk=contact-info",
        github: "https://github.com/Layakhathoon"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 9,
      name: "Vignesh Sasidharan",
      role: "",
      image: ("../media/team/vignesh.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/vignesh-sasidharan-135067266",
        github: "https://github.com/V-1gn3sh"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "IEEE Link Representative": [
    {
      id: 21,
      name: "Unnikrishnan Namboothiri EN",
      role: "",
      image: resolveTeamImage("/media/team/Unni.jpeg"),
      social: {
        linkedin: "https://www.linkedin.com/in/unnikrishnan-namboothiri-en-63aa58332"
      },
      department: "CSE",
      year: "2024"
    },
    {
      id: 21,
      name: "Adith K",
      role: "",
      image: resolveTeamImage("/media/team/Adithk.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/adith-k-a132b4364/",
        github: "https://github.com/AdithK06"
      },
      department: "CSE",
      year: "2025"
    }
  ],
  "MDC": [
    {
      id: 22,
      name: "Sathyajith K M",
      role: "",
      image: resolveTeamImage("/media/team/Sathyajith.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/sathyajith-k-m/",
        github: "https://github.com/sathyajithkm"
      },
      department: "CSE",
      year: "2024"
    },
    {
      id: 22,
      name: "Nayan Keshav",
      role: "",
      image: resolveTeamImage("/media/team/nayan.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/nayan-keshav/",
        github: "https://github.com/nayankeshav"
      },
      department: "ECE",
      year: "2025"
    },
  ],
  "IEEE IAS MDC": [
    {
      id: 22,
      name: "Adith M",
      role: "IEEE IAS MDC",
      image: resolveTeamImage("/media/team/adithm.jpg"),
      social: {
        linkedin: "",
        github: ""
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "IEEE PES MDC": [
    {
      id: 22,
      name: "Afrad",
      role: "IEEE PES MDC",
      image: resolveTeamImage("/media/team/mohammedafrad.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/mohammed-afrad-4906aa38a/",
        github: "https://github.com/afru2323"
      },
      department: "CSE",
      year: "2024"
    }
  ],
  "ECC": [
    {
      id: 23,
      name: "Amegh V V",
      role: "",
      image: resolveTeamImage("/media/team/Amegh.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/amegh-vv",
        github: ""
      },
      department: "ECE",
      year: "2024"
    }
  ],
  "Design Lead": [
    {
      id: 9,
      name: "Sushanth Sugesh",
      role: "",
      image: ("../media/team/susanth.jpg"),
      social: {
        linkedin: ""
      },
      department: "CSE",
      year: "2023"
    },
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
      name: "Adithyan M",
      role: "",
      image: ("../media/team/adithyan.png"),
      social: {
        linkedin: "https://www.linkedin.com/in/adithyan-m-",
        github: "https://github.com/adithyanmcr7-wq"
      },
      department: "CSE",
      year: "2023"
    }
  ],
  "Content Lead": [
    {
      id: 12,
      name: "Abhishek Thamban",
      role: "",
      image: ("../media/team/Abhishek Thamban.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/abhishek-thamban-722827353"
      },
      department: "EEE",
      year: "2023"
    },
    {
      id: 11,
      name: "Ashique Paul Shajee",
      role: "Content Lead",
      image: ("../media/team/Ashique.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/ashique-paul",
        github: "https://github.com/ashiquepaul"
      },
      department: "CSE",
      year: "2023"
    },
    {
      id: 12,
      name: "Kishor U",
      role: "",
      image: ("../media/team/kishor.jpg"),
      social: {

      },
      department: "CSE",
      year: "2023"
    }

  ],
  "Newsletter Editors": [
    {
      id: 24,
      name: "Sidharth V",
      role: "",
      image: resolveTeamImage("/media/team/Sidharth.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/sidharth-v-8704a6352/",
        github: "https://github.com/Sidharth967"
      },
      department: "CSE",
      year: "2024"
    },
    {
      id: 25,
      name: "Mithradev T V",
      role: "",
      image: resolveTeamImage("/media/team/mithradev.jpg"),
      social: {},
      department: "AI",
      year: "2025"
    },
    {
      id: 26,
      name: "Adish Pradeep",
      role: "",
      image: resolveTeamImage("/media/team/adish.jpg"),
      social: {
        linkedin: "https://www.linkedin.com/in/adish-pradeep-4551a1336",
        github: "https://github.com/ADISH899"
      },
      department: "CSE",
      year: "2024"
    },
  ]
};

// Build-time resolved copy: replace image paths with imported URLs when possible.
export const execomMembers: { [key: string]: ExecomMember[] } = Object.fromEntries(
  Object.entries(execomMembersRaw).map(([group, members]) => [
    group,
    members.map((m) => ({ ...m, image: resolveTeamImage(m.image) }))
  ])
) as { [key: string]: ExecomMember[] };