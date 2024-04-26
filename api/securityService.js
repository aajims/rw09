const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllSecurity() {
  const response = await fetch(`${API_URL}/security`);
  const data = await response.json();
  return data;
}

export async function jadwalSecurity() {
  const response = await fetch(`${API_URL}/jadwal-petugas`);
  const data = await response.json();
  return data.data[0].personils;
}