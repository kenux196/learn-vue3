export function convertISODateString(date) {
  return date.toISOString().split('T')[0];
}
