const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllDokumen() {
  const response = await fetch(`${API_URL}/dokumen`);
  const data = await response.json();
  return data;
}

export async function detailDokumen(id) {
    const response = await fetch(`${API_URL}/dokumen/${id}`);
    const data = await response.json();
    return data;
  }
