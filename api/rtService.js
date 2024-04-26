const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllRt() {
  const response = await fetch(`${API_URL}/rt`);
  const data = await response.json();
  return data;
}
