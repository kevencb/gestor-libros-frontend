export const API_URL = 'http://localhost:4000/api';

// ---------- LIBROS PÚBLICOS ----------
export async function fetchBooks() {
  const res = await fetch(`${API_URL}/books`);
  return res.json();
}

export async function fetchRecommended() {
  const res = await fetch(`${API_URL}/books/recommended`);
  return res.json();
}

// ---------- AUTH ----------
export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function register(name, email, password) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  return res.json();
}

// ---------- FAVORITOS ----------
export async function addFavorite(token, bookId) {
  const res = await fetch(`${API_URL}/favorites/${bookId}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function getFavorites(token) {
  const res = await fetch(`${API_URL}/favorites`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

// ---------- CRUD LIBROS (ADMIN) ----------
export async function createBook(token, bookData) {
  const res = await fetch(`${API_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(bookData)
  });
  return res.json();
}

// 📌 Obtener todos los libros con token admin
export async function getBooks(token) {
  const res = await fetch(`${API_URL}/books`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

// 📌 Eliminar libro
export async function deleteBook(token, id) {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

// 📌 Actualizar libro
export async function updateBook(token, id, data) {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
}