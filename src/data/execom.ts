/**
 * Website for IEEE SB CETKR
 * Copyright (C) 2024 IEEE Student Branch CETKR
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
  "Chairperson": [
    {
      id: 1,
      name: "John Doe",
      role: "Chairperson",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "Vice Chairperson": [
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice Chairperson",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        github: "#"
      },
      department: "Electronics",
      year: "2025"
    }
  ],
  "Secretary": [
    {
      id: 3,
      name: "Alex Johnson",
      role: "Secretary",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        instagram: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "Joint Secretary": [
    {
      id: 4,
      name: "Sarah Williams",
      role: "Joint Secretary",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        github: "#"
      },
      department: "Electronics",
      year: "2026"
    }
  ],
  "Treasurer": [
    {
      id: 5,
      name: "Michael Brown",
      role: "Treasurer",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "Webmasters": [
    {
      id: 6,
      name: "David Wilson",
      role: "Webmaster",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        github: "#"
      },
      department: "Computer Science",
      year: "2025"
    },
    {
      id: 7,
      name: "Emily Davis",
      role: "Webmaster",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        github: "#"
      },
      department: "Computer Science",
      year: "2026"
    }
  ],
  "Event Coordinators": [
    {
      id: 8,
      name: "Robert Taylor",
      role: "Event Coordinator",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        instagram: "#"
      },
      department: "Electronics",
      year: "2025"
    }
  ],
  "Design Lead": [
    {
      id: 9,
      name: "Emma Wilson",
      role: "Design Lead",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#",
        instagram: "#"
      },
      department: "Computer Science",
      year: "2026"
    }
  ],
  "Content Lead": [
    {
      id: 10,
      name: "Daniel Lee",
      role: "Content Lead",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "IEEE PES Chair": [
    {
      id: 11,
      name: "Olivia Martin",
      role: "IEEE PES Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Electrical",
      year: "2025"
    }
  ],
  "IEEE PES Vice Chair": [
    {
      id: 12,
      name: "William Anderson",
      role: "IEEE PES Vice Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Electrical",
      year: "2026"
    }
  ],
  "Women in Power": [
    {
      id: 13,
      name: "Sophia Garcia",
      role: "Women in Power Lead",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Electrical",
      year: "2025"
    }
  ],
  "FYP Coordinator": [
    {
      id: 14,
      name: "James Wilson",
      role: "FYP Coordinator",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "IEEE IAS Chair": [
    {
      id: 15,
      name: "Ava Martinez",
      role: "IEEE IAS Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Electrical",
      year: "2025"
    }
  ],
  "IEEE IAS Vice Chair": [
    {
      id: 16,
      name: "Noah Thompson",
      role: "IEEE IAS Vice Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Electrical",
      year: "2026"
    }
  ],
  "IEEE WIE Chair": [
    {
      id: 17,
      name: "Isabella Clark",
      role: "IEEE WIE Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2025"
    }
  ],
  "IEEE WIE Vice Chair": [
    {
      id: 18,
      name: "Liam Rodriguez",
      role: "IEEE WIE Vice Chair",
      image: "/images/team/placeholder.jpg",
      social: {
        linkedin: "#"
      },
      department: "Computer Science",
      year: "2026"
    }
  ]
};
