const API_URL = import.meta.env.VITE_API_URL;

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.mensagem ||
        data?.message ||
        "Não foi possível realizar a requisição.",
    );
  }

  return data;
}

export default apiRequest;
