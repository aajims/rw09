const API_URL = 'https://be.rw09sukamulya.com/api'; 

export async function getSlide() {
  const response = await fetch(`${API_URL}/slide`);
  const data = await response.json();
  return data;
}
