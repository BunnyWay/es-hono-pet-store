import { z } from "../infrastructure/mod.ts";

export const petSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  status: z.enum(["available", "pending", "sold"]),
}).required({
  name: true,
}).openapi("Pet");
