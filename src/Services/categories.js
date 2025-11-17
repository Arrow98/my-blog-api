export async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories/`);
  const responseBody = await response.json();

  return responseBody;
}
