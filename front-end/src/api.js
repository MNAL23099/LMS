// This file centralizes all API calls to the backend
const API_BASE_URL = "http://localhost:5000";

export async function fetchHello() {
  const response = await fetch(`${API_BASE_URL}/api/hello`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

// Add more API functions as needed