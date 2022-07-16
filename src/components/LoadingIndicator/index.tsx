import * as React from 'react';
import {ActivityIndicator} from 'react-native';

interface LoadingIndicatorProps {
  isLoading?: boolean;
  color?: string;
}
export function LoadingIndicator({
  isLoading = true,
  color = '#e21221',
}: LoadingIndicatorProps) {
  if (isLoading) {
    return <ActivityIndicator size={'large'} color={color} />;
  }

  return null;
}
