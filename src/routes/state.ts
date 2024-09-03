import { petStore } from "../domain/pets.ts";

export type State = {
  store: typeof petStore;
};
