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

export function slugify(slug) {
  const parts = slug.split('/');
  const result = parts.pop() || parts.pop();

  return result;
};
