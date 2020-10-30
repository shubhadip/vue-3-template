import { POSTS } from "./actions";

export interface State {
  counter: number;
  status?: string;
  data: POSTS[];
  selectedEmployee: POSTS;
  message?: string;
}
