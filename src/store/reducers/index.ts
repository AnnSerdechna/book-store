import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { bookDetailsReducer } from "./bookDetailsReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  book: bookDetailsReducer
});

export type RootState = ReturnType<typeof rootReducer>