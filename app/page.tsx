import { apiFetch } from '@/lib/api';

export default async function Home() {
  const data = await apiFetch('/');

  return (
    <main>
      <h1>FinApp</h1>
      <p>{data.message}</p>
    </main>
  );
}