// start coding

/**
 * Just a Hello TypeScript function with typedoc and environment variable, used in cypress test too
 * @returns {string}
 */
export const helloWorld = (): string => {
  const message = String(process.env.HELLO_WORLD)
  console.log(message)
  return message
}
