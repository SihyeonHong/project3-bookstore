import { setupWorker } from "msw/browser";
import { addReview, reviewsByIsbn } from "./review";

const handlers = [reviewsByIsbn, addReview];
export const worker = setupWorker(...handlers);
