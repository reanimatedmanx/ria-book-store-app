import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './app.css';

import RiaInput from './shared/RiaInput';
import Shelf from './features/Shelf';
import Layout from './features/Layout';
import RiaTypography from './shared/Typography';
import SearchSvg from './resources/icons/magnifying-glass.svg';
import DaySvg from './resources/icons/day.svg';
import NightSvg from './resources/icons/night.svg';
import { withDebounce } from './core/utils/withDebounce';
import { DayTheme } from './features/Themes/Day';
import { NightTheme } from './features/Themes/Night';
import RiaToggle from './shared/RiaToggle';
import {
  setObjectToStorage,
  getObjectFromStorage,
} from './core/utils/localStorage';
import { ReduxStore } from './core/cheating/ReduxStore';
import { IBaseTheme } from './features/Themes/Base';

const SearchIcon = (): JSX.Element => (
  <img src={SearchSvg} width={16} height={16} />
);

const DayIcon = (): JSX.Element => <img src={DaySvg} width={22} height={22} />;

const NightIcon = (): JSX.Element => (
  <img src={NightSvg} width={22} height={22} />
);

let timer: NodeJS.Timer;

const App = (): JSX.Element => {
  const [theme, setTheme] = useState<IBaseTheme>(new DayTheme());
  const [searchTerms, setSearchTerms] = useState('');

  const handleSearchTerms = useCallback(
    (value) => {
      // Simulate API request | debounce
      withDebounce(timer, () => setSearchTerms(value), 600);
    },
    [timer]
  );

  const handleThemeChange = useCallback((value) => {
    const newTheme = value ? new DayTheme() : new NightTheme();
    setTheme(newTheme);
    setObjectToStorage('app.theme', newTheme);
  }, []);

  useEffect(() => {
    setTheme(getObjectFromStorage('app.theme') as IBaseTheme);
  }, [getObjectFromStorage]);

  return (
    <ReduxStore.Provider value={{ theme }}>
      <Layout>
        <Layout.Header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <RiaTypography as="h2">Ria Book Store</RiaTypography>
            <div>
              <RiaToggle
                value={theme.name === 'NightTheme'}
                on={{
                  color: theme.primaryColor,
                  Icon: NightIcon,
                }}
                off={{
                  Icon: DayIcon,
                }}
                onClick={handleThemeChange}
              />
            </div>
          </div>
          <RiaInput
            placeholder="Hello, try searching for a book :)"
            Icon={SearchIcon}
            onKeyPressed={handleSearchTerms}
          />
        </Layout.Header>
        <Layout.Content>
          <Shelf searchTerms={searchTerms} />
        </Layout.Content>
        <Layout.Footer />
      </Layout>
    </ReduxStore.Provider>
  );
};

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
