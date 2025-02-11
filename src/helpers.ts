const formatter = new Intl.DateTimeFormat("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}