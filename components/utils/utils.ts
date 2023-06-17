export const formatDate = (dateString: string): string => {
  const options = { day: "numeric", month: "long", year: "numeric" as const }
  const date = new Date(dateString)
  // @ts-ignore
  return date.toLocaleDateString(undefined, options)
}
