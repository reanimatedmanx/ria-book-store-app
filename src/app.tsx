import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './app.css';

import RiaInput from './shared/RiaInput';
import Shelf from './features/Shelf';
import Layout from './features/Layout';
import RiaTypography from './shared/Typography';
import SearchSvg from './resources/icons/magnifying-glass.svg';
import { withDebounce } from './core/utils/withDebounce';

const SearchIcon = (): JSX.Element => (
  <img src={SearchSvg} width={16} height={16} />
);

let timer: NodeJS.Timer;

const App = (): JSX.Element => {
  const [searchTerms, setSearchTerms] = useState('');

  const handleSearchTerms = useCallback((value) => {
    // Simulate API request | debounce
    withDebounce(timer, () => setSearchTerms(value), 600)
  }, [timer]);

  return (
    <Layout type="focused">
      <Layout.Header>
        <RiaTypography as="h2">Ria Book Store</RiaTypography>
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
  );
};

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
