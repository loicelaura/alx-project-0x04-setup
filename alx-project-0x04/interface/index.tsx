import { ReactNode } from 'react';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}

