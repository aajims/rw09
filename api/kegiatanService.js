const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllKegiatan() {
  const response = await fetch(`${API_URL}/agenda`);
  const data = await response.json();
  return data;
}
