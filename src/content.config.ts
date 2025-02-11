import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const personnes = defineCollection({
  loader: glob({ base: "src/data/personnes", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    prenom: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    lieuNaissance: z.string(),
    lieuDeces: z.string().optional(),
    nationalite: z.string(),
  }),
});

export const collections = { personnes };
