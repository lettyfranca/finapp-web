const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch(
  path: string,
  options?: RequestInit
) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    cache: 'no-store', // evita cache no Next (bom pra API)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Erro na API');
  }

  return res.json();
}