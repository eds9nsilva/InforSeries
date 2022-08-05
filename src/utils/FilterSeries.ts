import {ISerie} from '../model/Serie';

export function filterSeries(nameGenre: string, series: ISerie[]) {
  const seriesFilter = series.filter(series => {
    const filter = series.genres?.map(genres => {
      if (genres === nameGenre) {
        return true;
      }
    });
    if (filter?.find(filter => filter === true)) {
      return series;
    }
  });
  return seriesFilter;
}
