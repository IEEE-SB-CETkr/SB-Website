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

export const execomMembers: { [key: string]: ExecomMember[] } = {
  "Branch Advisor": [
    {
      id: 0,
      name: "Dr. Naveena AK",
      role: "Branch Counselor",
      image: "/images/team/Dr.Naveena.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/saji-gopinath-4b4b0214",
        instagram: "https://www.instagram.com/sajigopinath_/?igsh=MWZ1Z2Q3a3ZkZzVt"
      },
      department: "HOD - Department of CSE",
      year: "Faculty"
    }
  ],
  "Chairperson": [
    {
      id: 1,
      name: "Heba Hassan",
      role: "Chairperson",
      image: "/images/team/HebaHassan.jpeg",
      social: {
        linkedin: "http://www.linkedin.com/in/heba-hassan-a93607247",
        github: "https://github.com/hebahassan22",
        instagram: "https://www.instagram.com/__heba_hassan",
      },
      department: "Computer Science",
      year: "2022"
    }
  ],
  "Vice Chairperson": [
    {
      id: 2,
      name: "Aliya TM",
      role: "Vice Chairperson",
      image: "/images/team/Aliya.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/aliya-tm-6b60762b3/",
        instagram: "https://www.instagram.com/__alyaahh?igsh=eXFsZHpxYmszbXU3"
      },
      department: "Computer Science",
      year: "2022"
    }
  ],
  "Secretary": [
    {
      id: 3,
      name: "Akshay Sreedharan",
      role: "Secretary",
      image: "/images/team/AkshaySreedharan.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/akshay-sreedharan-125890325",
        instagram: "https://www.instagram.com/a_4_ksh_y?igsh=MXdsb3M5dDV2Zm04MA==",
        github: "https://github.com/AkshaySreedharan"
      },
      department: "Computer Science",
      year: "2022"
    }
  ],
  "Joint Secretary": [
    {
      id: 4,
      name: "Anush Ahmed",
      role: "Joint Secretary",
      image: "/images/team/Anush.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/anush-ahmed-15144a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/anush__ahmed"
      },
      department: "Computer Science",
      year: "2023"
    }
  ],
  "Treasurer": [
    {
      id: 5,
      name: "Vaishnav K",
      role: "Treasurer",
      image: "/images/team/Vaishnav.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/vaishnav-kadambur-0a6296367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/vaishnav_kadambur"
      },
      department: "Electronics",
      year: "2023"
    }
  ],
  "Webmasters": [
    {
      id: 6,
      name: "Abhishek Vadakke Madam",
      role: "Webmaster",
      image: "/images/team/Abhishek.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/abhishek-vadakke-madam-2b7b53296",
        github: "https://github.com/Unkn0wn-007",
        instagram: "https://www.instagram.com/shek_n0t_f0und"
      },
      department: "Computer Science",
      year: "2024"
    },
    {
      id: 7,
      name: "Anukheth",
      role: "Webmaster",
      image: "/images/team/Anukheth.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/anukheth-sunil/",
        github: "https://github.com/kethu-x86",
        instagram: "https://www.instagram.com/kethu_x86/"
      },
      department: "Computer Science",
      year: "2024"
    }
  ],
  "Event Coordinators": [
    {
      id: 8,
      name: "Jasim AG",
      role: "Event Coordinator",
      image: "/images/team/Jasim.jpeg",
      social: {
        linkedin: "http://linkedin.com/in/jasim-ag-396a30316",
        instagram: "https://www.instagram.com/jasim_ag?igsh=MjYxZjVua3l0aHk5&utm_source=qr"
      },
      department: "Computer Science",
      year: "2025"
    } 
  ],
  "Design Lead": [
    {
      id: 9,
      name: "Mubeen Keerantakath",
      role: "Design Lead",
      image: "/images/team/MubeenKeerantakath.jpeg",
      social: {
        instagram: "https://www.instagram.com/adobe.varayan"
      },
      department: "Computer Science",
      year: "2023"
    },
    {
      id: 10,
      name: "Ridha Davood",
      role: "Design Lead",
      image: "/images/team/Ridha.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/ridha-davood-01755a29b",
        github: "https://github.com/ridha-davood"
      },
      department: "Computer Science",
      year: "2023"
    }
  ],
  "Content Lead": [
    {
      id: 11,
      name: "Aadithyan Parangen",
      role: "Content Lead",
      image: "/images/team/AadithyanParangen.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/aadithyan-p-2702a62a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/agaadhi",
        instagram: "https://www.instagram.com/ag_.aadhi?igsh=MTF2MGU5anh4NnpwMg=="
      },
      department: "Electronics",
      year: "2022"
    },
    {
      id: 12,
      name: "Laya Khathoon V",
      role: "Content Lead",
      image: "/images/team/Laya.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/laya-khathoon-v-763189387?trk=contact-info",
        github: "https://github.com/Layakhathoon",
        instagram: "https://www.instagram.com/laya.khathoon?igsh=MWVubG15aWpxdHc3bw%3D%3D&utm_source=qr"
      },
      department: "Computer Science",
      year: "2023"
    }
  ],
  "IEEE PES Chair": [
    {
      id: 13,
      name: "Athulya P N",
      role: "IEEE PES Chair",
      image: "/images/team/Athulya.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/athulya-nixan-251a0b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/__.ann.____?igsh=YTlsZ2xranRyZ2pw"
      },
      department: "Electrical",
      year: "2023"
    }
  ],
  "IEEE PES Vice Chair": [
    {
      id: 14,
      name: "Abdullahi Farhan",
      role: "IEEE PES Vice Chair",
      image: "/images/team/Farhan.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/abdullahi-farhan-402833281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/abdullahi.farhan___?igsh=MXBpeTQxbjI5NXBsMQ=="
      },
      department: "Computer Science",
      year: "2024"
    }
  ],
  "Women in Power": [
    {
      id: 15,
      name: "Sukanya A Kamalakshan",
      role: "Women in Power Lead",
      image: "/images/team/Sukanya.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/sukanya-a-kamalakshan-0ab6b0297",
        instagram: "https://www.instagram.com/sukanya_kamal"
      },
      department: "Electrical",
      year: "2025"
    }
  ],
  "FYP Coordinator": [
    {
      id: 16,
      name: "James Wilson",
      role: "FYP Coordinator",
      image: "/images/team/placeholder.jpeg",
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
      image: "/images/team/Asliya.jpeg",
      social: {
        linkedin: "www.linkedin.com/in/asliya-s-9332a7304?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/as__liya.__?igsh=MWNjaTNqOW5tZG9qNQ=="
      },
      department: "Electronics",
      year: "2023"
    }
  ],
  "IEEE IAS Vice Chair": [
    {
      id: 18,
      name: "Devanandan P",
      role: "IEEE IAS Vice Chair",
      image: "/images/team/Devanandan.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/devanandan-p-906101367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      department: "Electronics",
      year: "2023"
    }
  ],
  "IEEE WIE Chair": [
    {
      id: 19,
      name: "Anjana. K",
      role: "IEEE WIE Chair",
      image: "/images/team/Anjana.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/anjana-k-973740332",
        instagram: "https://www.instagram.com/anjahhna?igsh=dTV2YXp6eDhheTNz"
      },
      department: "Electronics",
      year: "2023"
    }
  ],
  "IEEE WIE Vice Chair": [
    {
      id: 20,
      name: "Adhima Sudheer MV",
      role: "IEEE WIE Vice Chair",
      image: "/images/team/Adhima.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/adhima-sudheer-mv-450701332",
        instagram: "https://www.instagram.com/__adhimasudheer?igsh=MWhoNzI3Z2N2dnNhaw=="
      },
      department: "Electronics",
      year: "2023"
    }
  ],
  "IEEE Link Representative": [
    {
      id: 21,
      name: "Unnikrishnan Namboothiri EN",
      role: "IEEE Link Representative",
      image: "/images/team/placeholder.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/unnikrishnan-namboothiri-en-63aa58332",
        instagram: "https://www.instagram.com/iunni_005"
      },
      department: "Computer Science",
      year: "2024"
    }
  ],
  "Membership Development Chair": [
    {
      id: 22,
      name: "Amay M Thamban",
      role: "Membership Development Chair",
      image: "/images/team/KaiVarghese.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/inn/aymt",
        github: "https:github.com/amaymt990",
        instagram: "https://www.instagram.com/aymt._"
      },
      department: "Electronics",
      year: "2022"
    }
  ],
  "ECC": [
    {
      id: 23,
      name: "Aadith V P",
      role: "ECC",
      image: "/images/team/Aadith.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/aadithvp",
        github: "https://github.com/aadithvp",
        instagram: "https://www.instagram.com/aaadiithh"
      },
      department: "Electronics",
      year: "2024"
    }
  ],
  "Media": [
    {
      id: 24,
      name:  "Parthiv E.V",
      role:  "Media Lead",
      image: "/images/team/Parthiv.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/parthiv-ev-323512302?trk=contact-info",
        instagram: "https://www.instagram.com/pa6thiv?igsh=MXBscjY0aG1qcWtiag=="
      },
      department: "Electrical",
      year: "2022"
    }
  ]
};