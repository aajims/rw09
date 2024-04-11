const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getAllKeuangan() {
  const response = await fetch(`${API_URL}/keuangan`);
  const data = await response.json();
  return data.data;
}
