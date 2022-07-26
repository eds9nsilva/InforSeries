/* eslint-disable @typescript-eslint/no-shadow */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, ReactElement, useEffect, useState} from 'react';

export interface IWelcomeContext {
  status: boolean;
  loading: boolean;
  postStatus(status: boolean): void;
}

const WelcomeData = '@MetSeries:Welcome';

interface IProps {
  children: ReactElement;
}

export const WelcomeContext = createContext<IWelcomeContext>(
  {} as IWelcomeContext,
);

export const WelcomeContextProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function getStatus() {
      try {
        setLoading(true);
        const data = await AsyncStorage.getItem(WelcomeData);
        if (data) {
          setStatus(JSON.parse(data));
        }
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    }
    getStatus();
  }, []);
  const postStatus = async (status: any) => {
    try {
      setStatus(status);
      await AsyncStorage.setItem(WelcomeData, JSON.stringify(status));
    } catch (error) {
      throw new Error(error as string);
    }
  };
  return (
    <WelcomeContext.Provider value={{loading, status, postStatus}}>
      {children}
    </WelcomeContext.Provider>
  );
};
