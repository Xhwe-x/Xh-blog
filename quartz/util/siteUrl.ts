export function getSiteUrl(baseUrl?: string): URL | undefined {
  const domain = baseUrl?.trim()
  return domain ? new URL(`https://${domain}`) : undefined
}
