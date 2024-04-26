const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllCabor() {
  const response = await fetch(`${API_URL}/cabor`);
  const data = await response.json();
  return data;
}

export async function getVolley() {
    const response = await fetch(`${API_URL}/volley`);
    const data = await response.json();
    return data.data;
  }

export async function getVolleyLocation() {
    const response = await fetch(`${API_URL}/volley`);
    const data = await response.json();
    return data.data[0].cabors.lokasi;
  }

export async function getBadminton() {
    const response = await fetch(`${API_URL}/badminton`);
    const data = await response.json();
    return data.data;
  }

export async function getBadmintonLocation() {
    const response = await fetch(`${API_URL}/badminton`);
    const data = await response.json();
    return data.data[0].cabors.lokasi;
  }

export async function getTenis() {
    const response = await fetch(`${API_URL}/tenis`);
    const data = await response.json();
    return data.data;
  }

export async function getTenisLocation() {
    const response = await fetch(`${API_URL}/tenis`);
    const data = await response.json();
    return data.data[0].cabors.lokasi;
  }

export async function getFutsal() {
    const response = await fetch(`${API_URL}/futsal`);
    const data = await response.json();
    return data.data;
  }


export async function getFutsalLocation() {
    const response = await fetch(`${API_URL}/futsal`);
    const data = await response.json();
    return data.data[0].cabors.lokasi;
  }