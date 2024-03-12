import { BookReviewItem, BookReviewItemWrite } from "@/models/Book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (isbn: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${isbn}`);
};

export const addBookReview = async (
  isbn: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<BookReviewItemWrite>(
    "post",
    `/reviews/${isbn}`,
    data
  );
};
