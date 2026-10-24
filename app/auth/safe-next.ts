export function getSafeNextPath(value: string | null | undefined, fallback = "/dashboard") {
  if (!value?.startsWith("/") || value.startsWith("//") || value.includes("\\") || /[\u0000-\u001F]/.test(value)) {
    return fallback;
  }

  return value;
}
