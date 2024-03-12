export interface Book {
  isbn: string;
  title: string;
  category: string;
  form: string;
  price: number;
  author: string;
  summary: string;
  detail: string;
  pages: number;
  contents: string;
  published_date: string;
  img: number;
  likes: number;
}

export interface BookDetail extends Book {
  liked: boolean;
}

export interface BookReviewItem {
  isbn: string;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type BookReviewItemWrite = Pick<BookReviewItem, "content" | "score">;
