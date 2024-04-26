const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllPenduduk() {
  const response = await fetch(`${API_URL}/penduduk`);
  const data = await response.json();
  return data.data.data;
}

export async function viewPenduduk(id) {
  const response = await fetch(`${API_URL}/penduduk/${id}`);
  const data = await response.json();
  return data.data;
}
