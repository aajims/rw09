const API_URL = 'https://be.rw09sukamulya.com/api'; 

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
