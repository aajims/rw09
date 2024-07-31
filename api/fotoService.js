const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllFoto() {
  const response = await fetch(`${API_URL}/foto?page=${this.currentPage}&limit=15`);
  const { data, total_pages } = await response.json();
  return data;
}

export async function getFoto(current_page, per_page) {
  const response = await fetch(`${API_URL}/foto?page=${current_page}&pageSize=${per_page}`);
  const data = await response.json();
  return data.data.data;
}

export async function viewFoto(id) {
  const response = await fetch(`${API_URL}/foto/${id}`);
  const data = await response.json();
  return data;
}

export async function fotoSlide() {
  const response = await fetch(`${API_URL}/foto-slide`);
  const data = await response.json();
  return data;
}
