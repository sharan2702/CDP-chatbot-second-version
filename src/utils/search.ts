import Fuse from 'fuse.js';
import { CDPDoc } from '../types';
import { cdpDocs } from '../data/cdpDocs';

const fuseOptions = {
  keys: ['platform', 'title', 'content'],
  threshold: 0.4,
  includeScore: true
};

const fuse = new Fuse(cdpDocs, fuseOptions);

export const searchDocs = (query: string): CDPDoc[] => {
  const results = fuse.search(query);
  return results.map(result => result.item);
};

export const isRelevantQuestion = (query: string): boolean => {
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'data', 'integration', 'profile', 'audience'];
  const lowercaseQuery = query.toLowerCase();
  return cdpKeywords.some(keyword => lowercaseQuery.includes(keyword));
};