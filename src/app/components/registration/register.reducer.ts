import { createReducer, on, Action, State } from "@ngrx/store";
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

//This function is very imp. if we dont add this we could not build using
// ng build --prod
export function reducer(state: User[] | undefined, action: Action) {
  return registerReducer(state, action);
}
