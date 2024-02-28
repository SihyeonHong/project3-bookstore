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
