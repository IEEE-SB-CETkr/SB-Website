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
import { defineCollection, z } from 'astro:content';

const baseSchema = {
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.string().or(z.date()).transform((val) => {
    if (val instanceof Date) return val;
    return new Date(val);
  }),
  image: z.object({
    url: z.string(),
    alt: z.string().optional(),
  }).optional(),
  author: z.string().default('IEEE SB CETKR'),
  tags: z.array(z.string()).optional(),
};

const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSchema,
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSchema,
    eventDate: z.string().or(z.date()).transform((val) => {
      if (val instanceof Date) return val;
      return new Date(val);
    }),
    location: z.string().optional(),
    registrationLink: z.string().url().optional(),
    gallery: z.array(z.object({
      type: z.enum(['image', 'video']),
      url: z.string(),
      alt: z.string().optional(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  'newsletters': newsletterCollection,
  'events': eventsCollection,
};
