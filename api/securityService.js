const API_URL = import.meta.env.VITE_API_URL; 

export async function getAllSecurity() {
  const response = await fetch(`${API_URL}/security`);
  const data = await response.json();
  return data;
}

export async function jadwalSecurity() {
  const response = await fetch(`${API_URL}/jadwal-petugas`);
  const data = await response.json();
  const personils = data.data[0].personils;

  const personilsProcessed = personils.map(personil => {
    // Misalnya, kita hanya ingin mengembalikan nama dan jabatan dari setiap personil
    return {
      name: personil.name,
      foto: personil.foto,
      no_hp: personil.no_hp,
    };
  });
  return personilsProcessed;
}