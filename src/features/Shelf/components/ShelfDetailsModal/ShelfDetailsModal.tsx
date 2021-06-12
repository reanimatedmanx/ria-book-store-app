import React, { useEffect } from 'react';
import { Book } from '../../../../api/books';
import { renderAuthorNames } from '../../../../core/utils/formatNamesList';
import RiaImage from '../../../../shared/RiaImage';
import RiaTypography from '../../../../shared/Typography';

import {
  SShelfDetailsModal,
  SShelfDetailsModalWindow,
  SShelfDetailsModalContent,
  SShelfDetailsModalCloseButton,
  SShelfDetailsModalColumn,
} from './ShelfDetailsModal.styled';

export type ShelfDetailsModal = {
  book: Book;
  isOpened: boolean;
  handleClose: () => void;
};

enum EModalState {
  OPENED = 'Modal_OPENED',
  CLOSED = 'Modal_CLOSED',
}

/**
 * Perfect modal in a perfect world is added ONCE to the page and opened/closed through redux actions :)
 */
const ShelfDetailsModal = ({
  book,
  isOpened,
  handleClose,
}: ShelfDetailsModal): JSX.Element => {
  const body = document.getElementsByTagName('body');

  useEffect(() => {
    if (isOpened) {
      body[0].classList.add(EModalState.OPENED);
    } else {
      body[0].classList.remove(EModalState.CLOSED);
    }

    return () => {
      body[0].classList.remove(EModalState.OPENED, EModalState.CLOSED);
    };
  }, [isOpened]);

  return isOpened ? (
    <SShelfDetailsModal>
      <SShelfDetailsModalWindow>
        <SShelfDetailsModalContent>
          <SShelfDetailsModalCloseButton onClick={handleClose} />
          <SShelfDetailsModalColumn>
            <RiaImage
              src={book.thumbnailURL}
              alt={book.shortDescription}
              width="inherit"
              height={256}
            />
          </SShelfDetailsModalColumn>
          <SShelfDetailsModalColumn>
            <RiaTypography.Heading>{book.title}</RiaTypography.Heading>
            <div style={{ fontSize: '18px' }}>
              <RiaTypography as="p">{book.longDescription}</RiaTypography>
            </div>
            <RiaTypography as="h5">
              {renderAuthorNames(book.authors)}
            </RiaTypography>
          </SShelfDetailsModalColumn>
        </SShelfDetailsModalContent>
      </SShelfDetailsModalWindow>
    </SShelfDetailsModal>
  ) : null;
};

export default ShelfDetailsModal;
