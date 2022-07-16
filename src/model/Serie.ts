interface IGenres {
  name: string;
}
interface IRating {
  average: number;
}
interface INetwork {
  id: number;
  name: string;
  code: string;
  timezone: string;
}
interface IImage {
  medium: string;
  original: string;
}
export interface ISerie {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: IGenres[];
  runtime: number;
  rating: IRating;
  network: INetwork;
  image: IImage;
}
