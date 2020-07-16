export function search(searchTerm) {
  return { type: "SEARCH", payload: searchTerm };
}
