const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getAllRt() {
  const response = await fetch(`${API_URL}/rt`);
  const data = await response.json();
  return data;
}
