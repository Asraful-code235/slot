export default async function getallslots() {
  const response = await fetch("/api/slots") // Update with the correct API endpoint
  const data = await response.json()
  return data
}
