const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getAllKegiatan() {
  const response = await fetch(`${API_URL}/agenda`);
  const data = await response.json();
  return data;
}
