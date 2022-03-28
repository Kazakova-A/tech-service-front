declare type AnyFunction = (...args: any[]) => any;

export type ActionsUnion<A extends Record<string, AnyFunction>> = ReturnType<
A[keyof A]
>;

export type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

export type PickAction<T, U> = T extends { type: U } ? T : never;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): Action<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  const action = payload === undefined ? { type } : { type, payload };

  return action;
}
