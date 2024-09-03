import { App, createRoute, z } from "../infrastructure/mod.ts";
import { State } from "./state.ts";
import { petSchema } from "./ty.ts";

const ListPetsRoute = createRoute({
  method: "get",
  path: "/pets",
  summary: "Get all pets",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(petSchema),
        },
      },
      description: "Successfully retrieved all pets",
    },
  },
});

export const addListPetsRoutes = (state: State) => (app: App) => {
  app.openapi(ListPetsRoute, (c) => c.json(state.store));
};
