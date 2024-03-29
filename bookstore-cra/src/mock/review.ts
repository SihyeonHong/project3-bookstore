import { BookReviewItem } from "@/models/Book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

const mockReviewData: BookReviewItem[] = Array.from({ length: 8 }).map(
  (_, idx) => ({
    isbn: (idx + 1).toString(),
    userName: `${faker.person.lastName()}${faker.person.firstName()}`,
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
    score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  })
);

export const reviewsByIsbn = http.get(
  "http://localhost:8888/reviews/:isbn",
  () => {
    return HttpResponse.json(mockReviewData, { status: 200 });
  }
);

export const addReview = http.post(
  "http://localhost:8888/reviews/:isbn",
  () => {
    return HttpResponse.json(
      { message: "리뷰가 등록되었습니다." },
      { status: 200 }
    );
  }
);
