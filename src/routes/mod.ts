import { App } from "../infrastructure/mod.ts";
import { State } from "./state.ts";
import { addListPetsRoutes } from "./list_pets.ts";
import { addCreatePetRoute } from "./create_pet.ts";
import { addUpdateRoute } from "./update_pet.ts";
import { swaggerUI } from "https://esm.sh/@hono/swagger-ui@0.4.1";

export const init = (state: State) => (app: App) => {
  addListPetsRoutes(state)(app);
  addCreatePetRoute(state)(app);
  addUpdateRoute(state)(app);

  // Swagger UI
  app.get("/swagger", swaggerUI({ url: "/doc" }));

  app.doc("/doc", {
    info: {
      title: "Swagger Bunny store - OpenAPI 3.1",
      description:
        "This is a sample Pet Store Server built with Hono and Bunny. You can find out more about Bunny at https://bunny.net",
      contact: {
        url: "https://bunny.net",
      },
      version: "v1",
    },
    openapi: "3.1.0",
  });
};
