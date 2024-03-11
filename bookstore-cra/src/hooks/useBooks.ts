import { useLocation } from "react-router-dom";
import { FetchBooksResponse, fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data: booksData, isLoading: isBooksLoading } =
    useQuery<FetchBooksResponse>({
      queryKey: ["books", location.search],
      queryFn: () =>
        fetchBooks({
          category: params.get(QUERYSTRING.CATEGORY) || undefined,
          recent: params.get(QUERYSTRING.RECENT) ? true : undefined,
          currentPage: Number(params.get(QUERYSTRING.CURRENT_PAGE)) || 1,
          limit: Number(params.get(QUERYSTRING.LIMIT)) || LIMIT,
        }),
    });

  return {
    books: booksData?.books,
    pagination: booksData?.pagination,
    isEmpty: booksData?.books.length === 0,
    isBooksLoading,
  };
};
