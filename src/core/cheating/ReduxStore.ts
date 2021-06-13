import { createContext } from 'react';
import { DayTheme } from '../../features/Themes/Day';

// Setup fake "redux" store :D
export const ReduxStore = createContext({
  theme: new DayTheme(),
});
