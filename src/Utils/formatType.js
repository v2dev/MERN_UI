export const formatType = (str = "") => {
  if (!str) return "";

  // 1. Replace hyphens/underscores with spaces
  let cleaned = str.replace(/[-_]/g, " ");

  // 2. Capitalize each word
  cleaned = cleaned
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // 3. If last char is not 's', make plural
  if (!cleaned.endsWith("s")) {
    cleaned += "s";
  }

  return cleaned;
};
