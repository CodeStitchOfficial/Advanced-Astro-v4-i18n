// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
			tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
// Note: You can use defineCollection() as many times as you want to create multiple schemas. 
// All collections must be exported from inside the single collections object.
export const collections = {
	blog: blogsCollection,
};