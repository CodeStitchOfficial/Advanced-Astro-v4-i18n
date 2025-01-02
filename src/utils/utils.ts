export function formatDate(date: string | number | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

// This function is used to create localized slugs for blog posts
export function slugify(slug: string): string {
  const parts = slug.split("/");
  const result = parts.pop() || parts.pop(); // Handles cases where the last part may be an empty string
  return result ?? ""; // Ensures a string is returned
}

import { getImage } from "astro:assets";

export async function getOptimizedImage(image: ImageMetadata) {
  const optimizedImage = await getImage({
    src: image,
    format: "webp",
    loading: "eager",
  });

  return optimizedImage;
}

export function trimArrSlashes(arr: string[]) {
  return arr.map((str) => str.replace(/^\/+|\/+$/g, ""));
}

export function trimStringSlashes(arr: string) {
  return arr.replace(/^\/+|\/+$/g, "");
}
