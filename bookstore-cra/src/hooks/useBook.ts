import { useEffect, useState } from "react";
import { BookDetail } from "../models/Book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";

export const useBook = (isbn: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCartAdded] = useState<boolean>(false);
  const { isLoggedIn } = useAuthStore();
  const showAlert = useAlert();

  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => setBook(book));
  }, [isbn]);

  const likeToggle = () => {
    if (!book) return;

    if (!isLoggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }

    if (book.liked) {
      // unlike
      unlikeBook(book.isbn).then((res) =>
        setBook({ ...book, liked: false, likes: book.likes - 1 })
      );
    } else {
      //like 낙관적 업데이트: 다시 받아오는 대신 미리 올려주기
      likeBook(book.isbn).then((res) =>
        setBook({ ...book, liked: true, likes: book.likes + 1 })
      );
    }
  };

  const addToCart = (quantity: number) => {
    if (!book) return;
    addCart({ isbn: book.isbn, quantity: quantity }).then(() => {
      setCartAdded(true);
      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };

  return { book, likeToggle, addToCart, cartAdded };
};
