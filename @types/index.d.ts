interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Result<Data> {
  info: Info;
  results: Array<Data>;
}

type Gender = 'female' | 'male' | 'genderless' | 'unknown';
type Status = 'Alive' | 'Dead' | 'unknown';
type Url = string;

interface CharacterEntity {
  name: string;
  url: Url;
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: Url[];
  url: Url;
  created: string;
}

interface CharacterFilter {
  page?: number;
  status?: Character['status'];
  gender?: Character['gender'];
  name?: Character['name'];
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Url[];
  url: Url;
  created: string;
}

interface LocationFilter {
  page?: number;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Url[];
  url: Url;
  created: string;
}

interface EpisodeFilter {
  page?: number;
}
