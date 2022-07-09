import { userRouter } from './signin';
// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { notesRouter } from './notes';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", authRouter)
  .merge("notes.", notesRouter)
  .merge('user.', userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
