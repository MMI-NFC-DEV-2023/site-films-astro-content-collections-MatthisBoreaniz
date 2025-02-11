import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const personne = defineCollection({
  loader: glob({ base: "src/data/personnes", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    prenom: z.string(),
    dateNaissance: date(),
    dateDeces: date().optional(),
    lieuNaissance: z.string(),
    lieuDeces: z.string().optional(),
    nationalite: z.string(),
  })
});
