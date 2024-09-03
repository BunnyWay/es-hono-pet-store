import { findPetById, Pet, updatePet } from "../domain/pets.ts";
import { App, createRoute, z } from "../infrastructure/mod.ts";
import { State } from "./state.ts";
import { petSchema } from "./ty.ts";

const UpdatePetRoute = createRoute({
  method: "put",
  path: "/pet/{id}",
  summary: "Update an existing pet",
  description: "Update an existing pet",
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: petSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: petSchema,
        },
      },
      description: "Pet updated successfully",
    },
    404: {
      description: "Pet not found",
    },
  },
});

export const addUpdateRoute = (state: State) => (app: App) => {
  app.openapi(UpdatePetRoute, (c) => {
    const id = parseInt(c.req.param("id"));
    const body = c.req.valid("json");
    const opt_pet = findPetById(state.store)(id);

    if (opt_pet === null) {
      return c.json({ error: "Pet not found" }, 404);
    }

    const new_pet: Pet = {
      id: opt_pet.id,
      name: body.name || opt_pet.name,
      status: body.status || opt_pet.status,
    };
    const updated_pet = updatePet(state.store)(new_pet);

    return c.json(updated_pet);
  });
};
