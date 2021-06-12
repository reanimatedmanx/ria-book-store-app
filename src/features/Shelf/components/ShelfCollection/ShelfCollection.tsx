import React from 'react';

// THIS is ugly, prefferably just use some sort of an absolute alias
// "@shared/RiaCard" etc;
import RiaCollection from '../../../../shared/RiaCollection';
import RiaCard from '../../../../shared/RiaCard';
import RiaImage from '../../../../shared/RiaImage';
import RiaTypography from '../../../../shared/Typography';
import RiaTag from '../../../../shared/RiaTag';
import { Book, TGetBooksResponse } from '../../../../api/books';
import { renderAuthorNames } from '../../../../core/utils/formatNamesList';

const renderBookCategories = (categories: string[]) =>
  categories.map((c, i) => (c.length > 1 ? <RiaTag key={i} text={c} /> : null));

const getOrientationByCollectionType = (type: 'grid' | 'list') =>
  type === 'grid' ? 'vertical' : 'horizontal';

export type ShelfCollection = {
  type: 'grid' | 'list';
  searchTerms: string;
  shelfData: TGetBooksResponse;
  handleItemClick: (book: Book) => void;
};

const getMatchedResults = (books: Book[], searchTerms: string) => {
  const regex = new RegExp(`${searchTerms}`, 'gi');

  if (!searchTerms || !searchTerms.length) {
    return books;
  }

  return books.filter((book) => {
    const terms = [
      book.title,
      // book.shortDescription, Does not make sense in current ui
      ...book.authors,
      ...book.categories,
    ];

    return terms.some((term) => term && term.match(regex));
  });
};

const ShelfCollection = ({
  type,
  shelfData,
  searchTerms,
  handleItemClick,
}: ShelfCollection): JSX.Element => (
  <RiaCollection type={type}>
    {shelfData.books.length &&
      getMatchedResults(shelfData.books, searchTerms).map((book, index) => (
        <RiaCard
          key={index}
          onClick={() => handleItemClick(book)}
          orientation={getOrientationByCollectionType(type)}
        >
          <RiaImage
            src={book.thumbnailURL}
            alt={book.shortDescription}
            width="auto"
            height="280px"
          />
          <div
            style={{ minHeight: 120, padding: type === 'list' ? '40px' : 0 }}
          >
            <RiaTypography.Heading>{book.title}</RiaTypography.Heading>
            <RiaTypography as="h5">
              {renderAuthorNames(book.authors)}
            </RiaTypography>
          </div>
          {type === 'grid' ? (
            <div style={{ display: 'flex' }}>
              {renderBookCategories(book.categories)}
            </div>
          ) : (
            <div style={{ display: 'block' }}>
              {renderBookCategories(book.categories)}
            </div>
          )}
        </RiaCard>
      ))}
  </RiaCollection>
);

export default ShelfCollection;
