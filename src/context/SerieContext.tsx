import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, ReactElement, useEffect, useState} from 'react';
import {ISerie} from '../model/Serie';
import api from '../services/api';

export interface ISerieContext {
  series: ISerie[];
  favorites: ISerie[];
  addFavorite(serie: ISerie): void;
  removeFavorite(serie: ISerie): void;
  getSeries(numberPage: number): any;
  loading: boolean;
}

const FavoriteData = '@MetSeries:Favorite';

interface IProps {
  children: ReactElement;
}

export const SerieContext = createContext<ISerieContext>({} as ISerieContext);

export const SerieContextProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [series, setSeries] = useState<ISerie[]>([]);
  const [favorites, setFavorites] = useState<ISerie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadingSeries(number: number) {
      try {
        const seriesData = await api.get<ISerie[]>(`shows?page=${number}`);
        const data = seriesData.data;
        setSeries(data);
        const favorite = await AsyncStorage.getItem(FavoriteData);
        if (favorite) {
          setFavorites(JSON.parse(favorite));
        }
      } catch (error) {
        throw new Error(error as string);
      }
      setLoading(false);
    }
    const numberPage = 1;
    loadingSeries(numberPage);
  }, []);

  const getSeries = async (numberPage: number) => {
    try {
      const seriesData = await api.get<ISerie[]>(`shows?page=${numberPage}`);
      const data = seriesData.data;
      setLoading(false);
      return data;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const addFavorite = async (serie: any) => {
    try {
      const newListFavorite = [...favorites, serie];
      setFavorites(newListFavorite);
      await AsyncStorage.setItem(FavoriteData, JSON.stringify(newListFavorite));
    } catch (error) {
      throw new Error(error as string);
    }
  };
  const removeFavorite = async (serie: any) => {
    try {
      const newListFavorite = favorites.filter(
        series => series.id !== serie.id,
      );
      setFavorites(newListFavorite);
      await AsyncStorage.setItem(FavoriteData, JSON.stringify(newListFavorite));
    } catch (error) {
      throw new Error(error as string);
    }
  };
  return (
    <SerieContext.Provider
      value={{
        loading,
        series,
        addFavorite,
        favorites,
        removeFavorite,
        getSeries,
      }}>
      {children}
    </SerieContext.Provider>
  );
};
