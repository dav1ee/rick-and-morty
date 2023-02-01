import { api } from './api';

interface FetchEpisodesParams {
  params?: EpisodeFilter;
}

export const fetchEpisodes = async ({ params }: FetchEpisodesParams = {}) => {
  return await api.get<Result<Episode>>('/episode', { params });
};

interface FetchEpisodeParams {
  params: {
    id: Episode['id'];
  };
}

export const fetchEpisode = async ({ params }: FetchEpisodeParams) => {
  return await api.get<Episode>(`/episode/${params.id}`);
};
