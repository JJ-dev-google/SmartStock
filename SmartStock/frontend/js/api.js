const API_URL = window.SMARTSTOCK_API_URL || "";
async function apiRequest(path, options = {}) {
  if (!API_URL) return null;
  const response = await fetch(API_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  if (!response.ok) throw new Error("API request failed");
  return response.json();
}
