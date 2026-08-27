// Resolve a local asset path against Vite's base URL.
// Paths in content.json like "/images/Logo1.png" are plain runtime strings that
// Vite does NOT rewrite, so on GitHub Pages (served from /JDPortfolio/) they would
// 404. This prepends import.meta.env.BASE_URL ("/JDPortfolio/" in prod, "/" in dev).
// External URLs (http/https/data) are returned unchanged.
export function asset(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
