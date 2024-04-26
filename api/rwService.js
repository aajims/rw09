const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllRw() {
  const response = await fetch(`${API_URL}/pengurus`);
  const data = await response.json();
  return data;
}