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

interface fetchMultipleEpisodesParams {
  params: {
    multiple: Episode['id'][];
  } & EpisodeFilter;
}

export const fetchMultipleEpisodes = async ({
  params
}: fetchMultipleEpisodesParams) => {
  const multipleEpisodesResponse = await api.get<Episode | Episode[]>(
    `/episode/${params.multiple}`,
    { params }
  );

  if (Array.isArray(multipleEpisodesResponse.data)) {
    const { data } = multipleEpisodesResponse;
    return { ...multipleEpisodesResponse, data };
  }

  return { ...multipleEpisodesResponse, data: [multipleEpisodesResponse.data] };
};
