export type Pet = {
  id: number;
  name: string;
  status: "available" | "pending" | "sold";
};

export type PetStore = Array<Pet>;

export const petStore: PetStore = [
  { id: 1, name: "Dog", status: "available" },
  { id: 2, name: "Cat", status: "sold" },
];

let serialPetCounter = 3;

export const newPet = (
  { name, status }: { name: string; status: "available" | "pending" | "sold" },
): Pet => {
  const id = serialPetCounter;
  serialPetCounter += 1;

  return ({
    id,
    name,
    status,
  });
};
export const addNewPet = (store: PetStore) => (pet: Pet): Pet => {
  store.push(pet);
  return pet;
};

export const findPetById = (store: PetStore) => (id: number): Pet | null => {
  const pet = store.find((pet) => pet.id === id);

  if (pet === undefined) {
    return null;
  }
  return pet;
};

export const updatePet = (store: PetStore) => (pet: Pet): Pet => {
  const index = store.findIndex((x) => x.id === pet.id);
  store[index] = pet;
  return pet;
};
