import moment, { Moment } from 'moment';
import { logError } from './utils';

const BOOKS_API = `https://riabooksapi.azurewebsites.net/books`;

export class Book {
  authors: string[] = [];
  categories: string[] = [];
  isbn: string = '';
  longDescription: string = '';
  pageCount: number = 0;
  publishDate: Moment = moment();
  shortDescription: string = '';
  status: string = '';
  thumbnailURL: string = '';
  title: string = '';
}

export type TGetBooksResponse = {
  books: Book[];
  count: number;
};

const getBooks = async (): Promise<TGetBooksResponse> => {
  const response = await fetch(BOOKS_API);

  if (!response.ok) {
    logError(new Error(response.statusText));
  }

  return await response.json();
};

export { getBooks };
