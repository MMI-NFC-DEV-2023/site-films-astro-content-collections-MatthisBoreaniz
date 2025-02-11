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
    profession: z.array(z.enum(["acteur", "réalisateur", "scénariste", "Producteur"])).optional(),
  }),
});

const films = defineCollection({
  loader: glob({ base: "src/data/films", pattern: "**/*.md" }),
  schema: z.object({
    titre: z.string(),
    dateSortie: z.date(),
    duree: z.number(),
    langue: z.string(),
    synopsis: z.string(),
  }),
});

export const collections = { personnes };
