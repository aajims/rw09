const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getAllRw() {
  const response = await fetch(`${API_URL}/pengurus`);
  const data = await response.json();
  return data;
}