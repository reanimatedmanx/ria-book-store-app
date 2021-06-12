/**
 * TODO Dev notes ✌
 *
 * Instead of fetching here directly, we could make use of a certain effects library like Saga,
 * or Rx effects so we could make the api call there, and then set the result in the state
 * and pick it with a selector :)
 *
 * Also it make sense to use react-virtualized or build a custom solution for this.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { Book, getBooks, TGetBooksResponse } from '../../api/books';
import ShelfCollection from './components/ShelfCollection';
import ShelfDetailsModal from './components/ShelfDetailsModal';
import ShelfFilters from './components/ShelfFilters';
import { SShelf } from './Shelf.styled';

export type ShelfProps = {
  searchTerms: string;
};

const Shelf = ({ searchTerms }: ShelfProps): JSX.Element => {
  const [collectionDisplayType, setCollectionDisplayType] = useState(true);
  const [modalProps, setModalProps] = useState({
    book: new Book(),
    isOpened: false,
  });

  const handleItemClick = useCallback((book: Book) => {
    setModalProps({
      book,
      isOpened: true,
    });
  }, []);

  const handleModalClosed = useCallback(() => {
    setModalProps({
      book: new Book(),
      isOpened: false,
    });
  }, []);

  const handleCollectionDisplayChanged = useCallback((enabled) => {
    setCollectionDisplayType(enabled);
  }, []);

  const [shelfData, setShelfData] = useState<TGetBooksResponse>({
    count: 0,
    books: [],
  });

  const getBooksResolver = async () => {
    const books = await getBooks();

    setShelfData(books);
  };

  useEffect(() => {
    getBooksResolver();
  }, []);

  return (
    <SShelf>
      <ShelfFilters
        onCollectionDisplayChanged={handleCollectionDisplayChanged}
      />
      <ShelfCollection
        type={collectionDisplayType ? 'grid' : 'list'}
        searchTerms={searchTerms}
        shelfData={shelfData}
        handleItemClick={handleItemClick}
      />
      <ShelfDetailsModal
        book={modalProps.book}
        isOpened={modalProps.isOpened}
        handleClose={handleModalClosed}
      />
    </SShelf>
  );
};

export default Shelf;
