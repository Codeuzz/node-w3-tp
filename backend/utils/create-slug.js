export default function createSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // replace spaces and non-word chars with dash
    .substring(0, 20) // limit length to 20 chars (optional)
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes
}
