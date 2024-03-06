import { Book, BookDetail } from "../models/Book.model";
import { Pagination } from "../models/Pagination.model";
import { httpClient } from "./http";

interface FetchBooksProps {
  category?: string;
  recent?: boolean;
  currentPage?: number;
  limit?: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksProps) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (isbn: string) => {
  const response = await httpClient.get<BookDetail[]>(`/books/${isbn}`);
  return response.data[0];
};

export const likeBook = async (isbn: string) => {
  const response = await httpClient.post(`/likes/${isbn}`);
  return response.data;
};

export const unlikeBook = async (isbn: string) => {
  const response = await httpClient.delete(`/likes/${isbn}`);
  return response.data;
};
