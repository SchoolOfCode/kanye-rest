export async function customFetch(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
