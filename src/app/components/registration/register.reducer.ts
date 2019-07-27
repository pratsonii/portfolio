import { createReducer, on } from "@ngrx/store";
import { register } from "./register.actions";
import { User } from "src/app/interface/user";

export const initialState: User[] = [];

export const registerReducer = createReducer(
  initialState,
  on(register, (state, user: User) => {
    state.push(user);
    return state;
  })
);
