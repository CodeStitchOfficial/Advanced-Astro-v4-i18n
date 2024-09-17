export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export function getCurrentYear() {
  return new Date().getFullYear();
}

// This function is used to create localized slugs for blog posts
export function slugify(slug) {
  const parts = slug.split('/');
  const result = parts.pop() || parts.pop();
  return result;
};
