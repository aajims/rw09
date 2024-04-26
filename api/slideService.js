const API_URL = import.meta.env.VITE_API_URL; 

export async function getSlide() {
  const response = await fetch(`${API_URL}/slide`);
  const data = await response.json();
  return data;
}
