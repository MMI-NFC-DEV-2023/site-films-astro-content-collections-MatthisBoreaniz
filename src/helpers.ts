const formatter = new Intl.DateTimeFormat("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZone: "Europe/Paris",
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}