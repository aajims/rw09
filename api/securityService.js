const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getAllSecurity() {
  const response = await fetch(`${API_URL}/security`);
  const data = await response.json();
  return data;
}