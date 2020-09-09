import EpisodeData from './EpisodeData';

export default interface VoteData {
  [key: string]: any[] | undefined

  problem?: number[];
  pitch?: EpisodeData[];
  voice?: EpisodeData[];
  funny?: EpisodeData[];
  content?: EpisodeData[];
  original?: EpisodeData[];
  sleep?: EpisodeData[];
  unit?: string[];
  rookie?: string[];
  grow?: string[];
  master?: string[];
  custom?: {
    episode: {
      episode: number;
      index: number;
    };
    content: string;
  }[];
  message?: {
    name: string;
    content: string;
  }[];
}