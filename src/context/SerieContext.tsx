import React, {createContext, ReactElement, useEffect, useState} from 'react';
import {ISerie} from '../model/Serie';
import api from '../services/api';

export interface ISerieContext {
  series: ISerie[];
  loading: boolean;
}

interface IProps {
  children: ReactElement;
}

export const SerieContext = createContext<ISerieContext>({} as ISerieContext);

export const SerieContextProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [series, setSeries] = useState<ISerie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadingSeries(number: number) {
      try {
        const seriesData = await api.get<ISerie[]>(`shows?page=${number}`);
        const data = seriesData.data;
        setSeries(data);
      } catch (error) {
        throw new Error(error as string);
      }
      setLoading(false);
    }
    const numberPage = 1;
    loadingSeries(numberPage);
  }, []);
  return (
    <SerieContext.Provider value={{loading, series}}>
      {children}
    </SerieContext.Provider>
  );
};
