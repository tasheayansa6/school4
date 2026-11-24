/** Prefix public asset paths for Vite base (GitHub Pages). */
export function asset(path) {
  const clean = String(path).replace(/^\//, '')
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${clean}`
}
