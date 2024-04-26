const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllKeuangan() {
  const response = await fetch(`${API_URL}/keuangan`);
  const data = await response.json();
  return data.data;
}
