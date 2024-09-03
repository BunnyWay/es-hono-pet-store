import { addNewPet, newPet } from "../domain/pets.ts";
import { App, createRoute } from "../infrastructure/mod.ts";
import { State } from "./state.ts";
import { petSchema } from "./ty.ts";

const AddPetRoute = createRoute({
  method: "post",
  path: "/pet",
  summary: "Add a new pet",
  description: "Add a new pet to the store",
  request: {
    body: {
      content: {
        "application/json": {
          schema: petSchema.omit({ id: true }),
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: petSchema,
        },
      },
      description: "Pet created successfully",
    },
  },
});

export const addCreatePetRoute = (state: State) => (app: App) => {
  app.openapi(AddPetRoute, (c) => {
    const body = c.req.valid("json");
    const pet_to_add = newPet({ name: body.name, status: body.status });
    const pet = addNewPet(state.store)(pet_to_add);
    return c.json(pet, 201);
  });
};
