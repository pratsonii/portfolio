import { User } from "./../../interface/user";
import { createAction, props } from "@ngrx/store";

export const register = createAction("[Registration] ADD User", props<User>());
