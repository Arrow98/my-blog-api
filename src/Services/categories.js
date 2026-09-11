import BASE_URL from "../config";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const responseBody = await response.json();

  return responseBody;
}

export async function addCategory(categoryData) {
  const token = localStorage.getItem("techblog_token");
  const response = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(categoryData),
  });
  return await response.json();
}
