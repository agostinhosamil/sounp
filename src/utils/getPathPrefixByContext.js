export function getPathPrefixByContext (context) {
  if (context.req && typeof context.req.headers === 'object') {
    return `http://${context.req.headers.host}`
  }

  return ''
}
