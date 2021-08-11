import { INCREMENT, DECREMENT } from "./types";
// action = { type: string, payload: нагрузка-любое значение }
// action creator
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
