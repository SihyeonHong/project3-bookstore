import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../models/Book.model";
import { Pagination } from "../models/Pagination.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";

export const useBooks = () => {
  const location = useLocation();
  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    totalCount: 0,
    currentPage: 1,
  });

  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetchBooks({
      category: params.get(QUERYSTRING.CATEGORY) || undefined,
      recent: params.get(QUERYSTRING.RECENT) ? true : undefined,
      currentPage: Number(params.get(QUERYSTRING.CURRENT_PAGE)) || 1,
      limit: Number(params.get(QUERYSTRING.LIMIT)) || LIMIT,
    }).then(({ books, pagination }) => {
      setBooks(books);
      setPagination(pagination);
      setIsEmpty(books.length === 0);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
};
